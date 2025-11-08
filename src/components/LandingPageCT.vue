<template>
  <div class="bg-gray-50 min-h-screen text-gray-800">
    <!-- Navbar -->
    <header class="flex justify-between items-center p-6 shadow-md bg-white">
      <h1 class="text-2xl font-bold text-blue-600">ShopRI</h1>
      <nav class="space-x-6">
        <router-link to="/" class="hover:text-blue-600">Home</router-link>
        <router-link v-if="user" to="/category" class="hover:text-blue-600">Categories</router-link>
        <router-link v-if="user" to="/cart" class="hover:text-blue-600">Cart</router-link>
      </nav>
      <div v-if="isLoading" class="flexi justify-center items-center h-screen">
        <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader>
      </div>
      <button @click="handleActions" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        {{ user ? 'Logout' : 'Login' }}
      </button>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-blue-50 flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
      <div class="max-w-xl">
        <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
          Experience the Joy of Shopping with <span class="text-blue-600">ShopEase</span>
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Explore household essentials, trendy clothes, and the latest home appliances — all in one place!
        </p>
        <router-link class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" to="/category">
          Start Shopping
        </router-link>
        <WeatherCard :location="weatherData.location.name" :temperature="weatherData.current.temperature"
          :feelsLike="weatherData.current.feelslike" :image="weatherData.current.weather_icons[0]"
          :description="weatherData.current.weather_descriptions[0]" :humidity="weatherData.current.humidity"
          :windSpeed="weatherData.current.wind_speed" position="top-left" />
      </div>
      <img src="https://img.freepik.com/free-vector/shopping-concept-illustration_114360-2149.jpg" alt="Shopping"
        class="w-full md:w-1/2 mt-10 md:mt-0 rounded-xl shadow-lg" />
    </section>

    <!-- Categories Section -->
    <section class="py-16 px-8 bg-white text-center">
      <h3 class="text-3xl font-bold mb-10 text-gray-800">Our Categories</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/color/96/kitchen.png" alt="Household" class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">Household Essentials</h4>
          <p class="text-gray-600">Everything you need for your home, from kitchen tools to cleaning supplies.</p>
        </div>
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/color/96/t-shirt.png" alt="Clothes" class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">Fashion & Clothes</h4>
          <p class="text-gray-600">Trendy and stylish clothing for all ages at affordable prices.</p>
        </div>
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/color/96/appliances.png" alt="Appliances" class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">Home Appliances</h4>
          <p class="text-gray-600">Latest technology appliances to make your life easier and smarter.</p>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="bg-gray-100 py-16 px-8">
      <h3 class="text-3xl font-bold mb-10 text-center text-gray-800">Your Shopping Journey</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/color/96/online-store.png" alt="Visit Store" class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">1. Visit Store</h4>
          <p class="text-gray-600">Step into our store online or offline with ease.</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/color/96/add-shopping-cart.png" alt="Choose Products" class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">2. Choose Products</h4>
          <p class="text-gray-600">Browse categories and pick your favorite items.</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img src="https://img.icons8.com/?size=100&id=pt5RU2ksbVFL&format=png&color=000000" alt="Get Delivery"
            class="mx-auto mb-4" />
          <h4 class="text-xl font-semibold mb-2">3. Get Fast Delivery</h4>
          <p class="text-gray-600">Enjoy quick and hassle-free delivery at your doorstep.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 text-center bg-blue-600 text-white">
      <h3 class="text-3xl font-bold mb-4">Ready to Shop?</h3>
      <p class="mb-6 text-lg">Join thousands of happy customers today!</p>
      <button class="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
        Shop Now
      </button>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6 mt-10">
      <p>&copy; 2025 ShopRI. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

import { DadJokes, V2Jokes } from '@/jokesApi';
import axios from 'axios';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import WeatherCard from '@/WeatherCard.vue';

export default {
  components: { ClipLoader, WeatherCard },
  data() {
    return {
      user: '',
      isLoading: false,
      joke: '',
      location: 'Delhi',
      weatherData: {
        location: {
          name: "Mumbai",
          country: "India",
          region: "Maharashtra",
          lat: "18.975",
          lon: "72.826",
          timezone_id: "Asia/Kolkata",
          localtime: "2025-09-21 12:17",
          localtime_epoch: 1758457020,
          utc_offset: "5.50"
        },
        current: {
          observation_time: "06:47 AM",
          temperature: 29,
          weather_code: 143,
          weather_icons: [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"
          ],
          weather_descriptions: [
            "Mist"
          ],
          wind_speed: 15,
          wind_degree: 266,
          wind_dir: "W",
          pressure: 1009,
          precip: 0.1,
          humidity: 84,
          cloudcover: 75,
          feelslike: 34,
          uv_index: 12,
          visibility: 3,
          is_day: "yes"
        }
      },
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
    this.getWeather();
  },
  methods: {
    handleActions() {
      this.isLoading = true; // Start loader

      setTimeout(() => {
        if (this.user) {
          // Logout logic
          // localStorage.removeItem("token");
          localStorage.removeItem("user")
          this.user = null;
          alert("Logged out successfully!");
          this.$router.push({ name: "home" });
        } else {
          // Login redirect
          this.$router.push({ name: "login" });
        }
        this.isLoading = false; // Stop loader after actions
      }, 1500);
    },
    async getJokes() {
      const response = await DadJokes();
      this.joke = response.joke
      const category = 'programming'
      await V2Jokes(category);
    },
    async getWeather() {
      try {
        const response = await axios.get(`https://ecommerce-hjlr.onrender.com/data/get/${this.location}`)
        this.weatherData = response.data
        console.log(response.data);
        console.log(this.weatherData);
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
/* Additional custom styles can go here if needed */
.flexi {
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
