<template>
  <div class="p-4 sm:p-6 bg-gray-100 min-h-screen sm:pl-[260px]">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
      <div></div>
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 my-5">Household Products</h2>

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
      <div v-for="item in products" :key="item.id"
        class="bg-white shadow-md hover:shadow-xl rounded-2xl p-4 sm:p-5 transition duration-300 flex flex-col">
        <!-- Product Image -->
        <div class="relative">
          <img
            :src="item.image || 'https://png.pngtree.com/png-vector/20230803/ourmid/pngtree-household-items-png-image_6878515.png'"
            alt="Household Product" class="w-full h-40 sm:h-48 object-cover rounded-lg mb-3" />
        </div>

        <!-- Product Details -->
        <div class="flex-1">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">
            {{ item.item || 'N/A' }}
          </h3>
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
  name: "HouseholdProducts",
  data() {
    return {
      products: [],
      isLoading: false,
      cart: {
        userId: '',
        productId: '',
        productCategory: 'HOUSEHOLD',
        quantity: 1,
      },
      user: useUserData(),
      userObj: '',
    };
  },
  components: {
    ClipLoader, LoopingRhombusesSpinner
  },
  methods: {
    async addToCart(item) {
      this.isLoading = true
      try {
        this.cart.userId = this.userObj.body.id
        this.cart.productId = item.id
        const response = await axios.post(`https://ecommerce-hjlr.onrender.com/user-service/cart/add`, this.cart, {
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

    },
    async getAllHouseHolds() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://ecommerce-hjlr.onrender.com/household/getall", {
          headers: {
            Authorization: 'Bearer ' + this.userObj.token
          }
        }); // Your Household API
        this.products = response.data;
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching household products:", error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  async mounted() {
    this.userObj = this.user.getUser();
    console.log(this.userObj);
    this.getAllHouseHolds();

  }
};
</script>
