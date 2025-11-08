<template>
  <div class="p-4 sm:p-6 bg-gray-100 min-h-screen sm:pl-[260px]">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
      <div></div>
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 my-5">Clothes Collection</h2>
      <div class="flex flex-wrap gap-3 sm:gap-4 justify-start sm:justify-end">
        <router-link to="/category" class="text-blue-600 hover:text-blue-700 font-medium transition-colors">
          ← Back to Categories
        </router-link>

        <router-link to="/cart"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-sm transition">
          See Cart 🛒
        </router-link>
      </div>
    </div>

    <!-- Loader -->
    <div v-if="isLoading" class="flex justify-center items-center h-[60vh]">
      <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
    </div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="item in clothes" :key="item.id"
        class="bg-white shadow-md hover:shadow-xl rounded-2xl p-4 sm:p-5 transition duration-300 flex flex-col">
        <!-- Carousel -->
        <div :id="'carousel-' + item.id" class="carousel slide rounded-lg overflow-hidden" data-bs-ride="carousel"
          data-bs-interval="2000">
          <div class="carousel-inner">
            <div v-for="(img, index) in getImages(item)" :key="index"
              :class="['carousel-item', { active: index === 0 }]">
              <img :src="img" alt="Clothing item" class="d-block w-100 h-40 sm:h-48 object-cover" />
            </div>
          </div>

          <!-- Carousel Controls -->
          <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + item.id"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + item.id"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <!-- Product Details -->
        <div class="flex-1 mt-4">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">
            {{ item.uppers || 'N/A' }}
          </h3>
          <p class="text-gray-600 text-sm sm:text-base">
            Lowers: {{ item.lowers || 'N/A' }}
          </p>
          <p class="text-gray-600 text-sm sm:text-base">
            Shoes: {{ item.shoes || 'N/A' }}
          </p>
          <p class="text-green-600 font-bold mt-2 text-base sm:text-lg">
            ₹ {{ item.price }}
          </p>
        </div>

        <!-- Add to Cart Button -->
        <button class="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          @click="addToCart(item)">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import { addToCart } from "@/eventBus";
import { LoopingRhombusesSpinner } from 'epic-spinners'
import Swal from "sweetalert2";
import { useUserData } from "@/localstorage";
export default {
  name: "ClothesCollection",
  data() {
    return {
      clothes: [],
      isLoading: false,
      cart: {
        userId: '',
        productId: '',
        productCategory: 'CLOTHES',
        quantity: 1,
      },
      user: useUserData(),
      userObj: '',
      token: ''
    };
  },
  methods: {
    getImages(item) {
      // Example: Replace with your actual image array from DB
      return [
        item.upperImage,
        item.lowerImage,
        item.shoesImage
      ];
    },
    async addToCart(item) {
      this.isLoading = true
      try {
        this.cart.userId = this.userObj.id
        this.cart.productId = item.id
        const response = await axios.post(`https://ecommerce-hjlr.onrender.com/cart/add`, this.cart, {
          headers: {
            Authorization: 'Bearer ' + this.userObj.token
          }
        })
        console.log(response);
        if (response.statusText == 'ACCEPTED') {
          addToCart(item)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item Added to Cart Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        this.isLoading = false;
      }
      console.log(item);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item Added to Cart Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    },
    async getAllClothes() {
      this.isLoading = true;
      try {

        const response = await axios.get("https://ecommerce-hjlr.onrender.com/cloth/get", {
          headers: {
            Authorization: 'Bearer ' + this.userObj.token
          }
        }); // Your API endpoint
        this.clothes = response.data;
        console.log(response)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching clothes:", error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  components: {
    ClipLoader, LoopingRhombusesSpinner
  },
  async mounted() {
    this.userObj = this.user.getUser();
    console.log(this.userObj);
    this.getAllClothes();
  }
};
</script>
