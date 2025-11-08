<template>
  <section class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Page Header -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Order History</h1>
        <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
          Track your past purchases, download invoices, and reorder your favorite items.
        </p>
        <div class="flex justify-end">
          <router-link to="/home"
            class="text-decoration-none text-dark mb-3 ms-3 mt-3 d-inline-flex align-items-center my-3">
            <i class="fas fa-arrow-left me-2 sm:my-4"></i> Back to Home
          </router-link>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center h-screen">
        <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
        <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
      </div>

      <!-- Orders List -->
      <div v-for="order in orderGroups" :key="order.id"
        class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 mb-10">
        <!-- Order Header -->
        <div
          class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-gray-200 px-6 py-5 bg-gray-50 rounded-t-2xl">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 w-full lg:w-auto">
            <div>
              <p class="font-semibold text-gray-900">Order Number</p>
              <p class="truncate">{{ order.orderId }}</p>
            </div>
            <div>
              <p class="font-semibold text-gray-900">Date Placed</p>
              <p>{{ formatDate(order.createdAt) }}</p>
            </div>
            <div>
              <p class="font-semibold text-gray-900">Total Amount</p>
              <p class="font-medium text-indigo-600">{{ order.finalAmount }}</p>
            </div>
            <!-- <div>
              <p class="font-semibold text-gray-900">Status</p>
              <p class="font-medium text-indigo-600">{{ order.status }}</p>
            </div> -->
            <!-- <p class="flex items-center text-sm" :class="{
              'text-green-600': order.status === 'SUCCESS',
              'text-yellow-600': order.status === 'PENDING',
              'text-red-600': order.status === 'FAILED',
            }">
              <svg v-if="order.status === 'SUCCESS'" class="w-5 h-5 mr-1 text-green-500" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else-if="order.status === 'FAILED'" class="w-5 h-5 mr-1 text-red-500" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <svg v-else class="w-5 h-5 mr-1 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01" />
              </svg>
              Status: {{ order.status }}
            </p> -->
            <span class="badge" :class="{
              'bg-warning': order.status === 'PENDING',
              // 'bg-secondary': order.status === 'SUCCESS',
              'bg-success': order.status === 'SUCCESS',
              'bg-danger': order.status === 'FAILED',
            }">
              {{ order.status }}
            </span>
          </div>

          <div class="flex flex-wrap gap-3 mt-3 lg:mt-0">
            <button
              class="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 active:scale-95 transition">
              View Order
            </button>
            <button
              class="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 active:scale-95 transition">
              View Invoice
            </button>
          </div>
        </div>

        <!-- Order Items -->
        <div class="divide-y divide-gray-100 px-6 py-4">
          <div v-for="item in order.items" :key="item.id" class="flex flex-col md:flex-row gap-6 py-6">
            <!-- Product Image / Carousel -->
            <div class="w-full md:w-40 flex-shrink-0">
              <template v-if="item.image">
                <img :src="item.image" alt="Product image"
                  class="w-full h-40 object-cover rounded-xl border border-gray-200" />
              </template>
              <template v-else>
                <div :id="'carousel-' + item.id" class="carousel slide relative" data-bs-ride="carousel"
                  data-bs-interval="2000">
                  <div class="carousel-inner rounded-xl overflow-hidden border border-gray-200">
                    <div v-for="(img, index) in getImages(item)" :key="index"
                      :class="['carousel-item', { active: index === 0 }]">
                      <img :src="img" class="d-block w-full h-40 object-cover" alt="Product" />
                    </div>
                  </div>

                  <!-- Controls -->
                  <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + item.id"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + item.id"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
              </template>
            </div>

            <!-- Product Details -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap justify-between items-start gap-2">
                  <h3 class="text-lg font-semibold text-gray-900">{{ item.productName }}</h3>
                  <p class="text-gray-800 font-medium">{{ item.totalPrice }} ₨.</p>
                </div>

                <p class="text-gray-600 text-sm mt-1">{{ item.productCategory }}</p>

                <div class="mt-2 text-sm text-gray-700 flex gap-4">
                  <span>Qty: <strong>{{ item.quantity }}</strong></span>
                  <span>Price: {{ item.price }} ₨.</span>
                </div>
              </div>

              <div
                class="mt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-t border-gray-100 pt-3">
                <!-- <p class="flex items-center text-sm" :class="{
                  'text-green-600': item.status === 'SUCCESS',
                  'text-yellow-600': item.status === 'PENDING',
                  'text-red-600': item.status === 'FAILED',
                }">
                  <svg v-if="item.status === 'SUCCESS'" class="w-5 h-5 mr-1 text-green-500" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else-if="item.status === 'FAILED'" class="w-5 h-5 mr-1 text-red-500" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <svg v-else class="w-5 h-5 mr-1 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01" />
                  </svg>
                  Status: {{ item.status }}
                </p> -->

                <div class="flex gap-4">
                  <button class="text-indigo-600 hover:underline font-medium">View Product</button>
                  <button class="text-indigo-600 hover:underline font-medium">Buy Again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!orderGroups.length" class="text-center text-gray-500 py-20">
        <p class="text-lg">No orders found.</p>
        <button class="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Start Shopping
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserData } from '@/localstorage';
import axios from 'axios';
import { LoopingRhombusesSpinner } from 'epic-spinners'

export default {
  name: "OrderHistory",
  components: {
    LoopingRhombusesSpinner
  },
  data() {
    return {
      userObj: '',
      loading: false,
      useUser: useUserData(),
      orders: [
        {
          id: 2,
          number: "HBFHVB6743",
          date: "Jun 18, 2022",
          total: "1829.00",
          items: [
            {
              id: 1,
              name: "Brown Leather Slingbag",
              price: "70.00",
              delivered: "June 16, 2022",
              image:
                "https://images.unsplash.com/photo-1616628188502-1c9d95b0e5f2?auto=format&fit=crop&w=400&q=80",
              description:
                "Move around easily and in style with your ergonomic accessories. The Leather Slingbag 2021 Premium design allows you freedom at all times.",
            },
            {
              id: 2,
              name: "SL Backpack",
              price: "50.00",
              delivered: "June 18, 2022",
              image:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
              description:
                "For easy mobilization with your gadgets and other items, the SL Backpack is designed with a perfect space and sleek interior aesthetic.",
            },
            {
              id: 3,
              name: "Leather Wallet",
              price: "62.00",
              delivered: "June 20, 2022",
              image:
                "https://images.unsplash.com/photo-1599058917212-d750089bc07b?auto=format&fit=crop&w=400&q=80",
              description:
                "Crafted with precision, this leather wallet offers premium design and long-lasting durability in a compact form.",
            },
          ],
        },
        {
          id: 1,
          number: "RQS23567",
          date: "Jun 08, 2022",
          total: "182.00",
          items: [
            {
              id: 1,
              name: "Brown Leather Slingbag",
              price: "70.00",
              delivered: "June 16, 2022",
              image:
                "https://images.unsplash.com/photo-1616628188502-1c9d95b0e5f2?auto=format&fit=crop&w=400&q=80",
              description:
                "Move around easily and in style with your ergonomic accessories. The Leather Slingbag 2021 Premium design allows you freedom at all times.",
            },
            {
              id: 2,
              name: "SL Backpack",
              price: "50.00",
              delivered: "June 18, 2022",
              image:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
              description:
                "For easy mobilization with your gadgets and other items, the SL Backpack is designed with a perfect space and sleek interior aesthetic.",
            },
            {
              id: 3,
              name: "Leather Wallet",
              price: "62.00",
              delivered: "June 20, 2022",
              image:
                "https://images.unsplash.com/photo-1599058917212-d750089bc07b?auto=format&fit=crop&w=400&q=80",
              description:
                "Crafted with precision, this leather wallet offers premium design and long-lasting durability in a compact form.",
            },
          ],
        },
      ],
      orderHistory: []
    };
  },
  methods: {
    // formatDate(localDateTimeString) {
    //   // LocalDateTime format: "2025-10-21T22:47:37.358255"
    //   // const [datePart] = dateTimeString.split('T');
    //   // const [year, month, day] = datePart.split('-');
    //   // return `${day}-${month}-${year}`;
    //   // return localDateTimeString.substring(8, 10) + '-' +
    //   //   localDateTimeString.substring(5, 7) + '-' +
    //   //   localDateTimeString.substring(0, 4);
    // },
    formatDate(localDateTimeObj) {
      if (!localDateTimeObj) return '-';

      // Convert to string first, then format
      const dateString = String(localDateTimeObj);
      console.log('Converted string:', dateString);

      // Now format the string
      if (dateString.includes('T')) {
        return dateString.substring(8, 10) + '-' +
          dateString.substring(5, 7) + '-' +
          dateString.substring(0, 4);
      }

      return '-';
    },
    getImages(item) {
      return [
        item.upperImage,
        item.lowerImage,
        item.shoesImage
      ];
    },
    async getOrderHistory() {
      this.loading = true
      try {
        const response = await axios.get(`https://ecommerce-hjlr.onrender.com/history/get/${this.userObj.id}`, {
          headers: {
            Authorization: 'Bearer ' + this.userObj.token
          }
        })
        this.orderHistory = response.data;
        console.log(response)
        console.log(this.orderHistory)
      } catch (error) {
        console.log(error)
        this.loading = false
      }
      this.loading = false
    },
    formatDateTime(isoString) {
      const date = new Date(isoString)
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      // Returns: "Nov 7, 2025, 06:29 PM"
    }
  },
  mounted() {
    this.userObj = this.useUser.getUser();
    this.getOrderHistory();
  },
  computed: {
    orderGroups() {
      const groups = {}

      this.orderHistory.forEach(order => {
        // Use orderId + a truncated timestamp (to minute precision)
        const timeKey = order.createdAt.substring(0, 16) // "2025-11-07T18:29"
        const groupKey = `${order.orderId}_${timeKey}`

        if (!groups[groupKey]) {
          groups[groupKey] = {
            orderId: order.orderId,
            items: [],
            createdAt: order.createdAt,
            finalAmount: order.finalAmount,
            status: order.status,
            displayTime: this.formatDateTime(order.createdAt)
          }
        }
        groups[groupKey].items.push(order)
      })

      return Object.values(groups)
    }
  }
};
</script>

<style scoped>
button:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
</style>
