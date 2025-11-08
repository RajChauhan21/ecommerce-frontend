<template>
  <div class="min-h-screen flex items-center justify-center bg-pink-50 p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 transition transform hover:scale-105 duration-300">
      <!-- Heading -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-pink-600">Welcome Back!</h1>
        <p class="text-gray-500 mt-2">Login to continue your shopping journey</p>
      </div>
      <!-- <button @click="push.success('Hello from your first notification!')">Push</button> -->
      <Notivue v-slot="item">
        <Notification :item="item" :theme="pastelTheme" />
      </Notivue>
      <div v-if="isLoading" class="flex justify-center items-center h-screen">
        <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
        <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
      </div>

      <!-- Login Form -->
      <form v-else>
        <!-- Name -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" v-model="user.email" required placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" v-model="user.password" required placeholder="Enter your password"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex justify-between items-center mb-6 text-sm">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="rememberMe">
            <label class="form-check-label" for="rememberMe">
              Remember me
            </label>
          </div>
          <router-link to="/forgotpassword" class="text-pink-600 hover:underline">Forgot password?</router-link>
        </div>

        <!-- Login Button -->
        <button type="button" @click="handleLogin"
          class="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg">
          Login
        </button>
      </form>

      <!-- Divider -->
      <div class="my-6 flex items-center">
        <hr class="flex-grow border-gray-300" />
        <span class="px-3 text-gray-400">OR</span>
        <hr class="flex-grow border-gray-300" />
      </div>

      <!-- Social Login Buttons (Styled Same as Theme) -->
      <!-- <div class="flex flex-col space-y-3">
        <button
          class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Continue with Google
        </button>
        <button
          class="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Continue with GitHub
        </button>
      </div> -->

      <!-- Sign Up Link -->
      <p class="text-center text-gray-600 mt-6">
        Don't have an account?
        <router-link to="/signup" class="text-pink-600 hover:underline">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import { LoopingRhombusesSpinner } from 'epic-spinners'
import { Notification, Notivue, push } from "notivue";
import { lightTheme, pastelTheme, materialTheme, darkTheme, slateTheme } from "notivue"
import Swal from "sweetalert2";
import { useUserData } from "@/localstorage";



export default {
  components: { ClipLoader, LoopingRhombusesSpinner, Notification, Notivue },
  data() {
    return {
      lightTheme,
      pastelTheme,
      materialTheme,
      darkTheme,
      slateTheme,
      push,
      user: {
        email: '',
        password: '',
      },
      rememberMe: false,
      isLoading: false,
      userData: useUserData()
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true;
      try {
        const response = await axios.post('https://ecommerce-hjlr.onrender.com/user/signIn', this.user)
        console.log(response)
        console.log(response.data)
        if (response.data.statusCode == 'ACCEPTED') {
          this.userData.setUser(response.data.body);
          console.log(JSON.stringify(response.data.body))
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push({ name: 'HomePage' })
        }
        else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response.data.body,
            showConfirmButton: false,
            timer: 1500
          });
        }
        // localStorage.setItem('user', JSON.stringify(response.data.body))


      } catch (error) {
        console.log(error)
        push.error('Login failed please try again')
      }
      finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style>
.flexi {
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
