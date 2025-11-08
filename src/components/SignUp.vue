<template>
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
        <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
            <!-- Title -->
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
            <p class="text-center text-gray-500 mb-6">Sign up to get started</p>

            <div v-if="isLoading" class="flex justify-center items-center h-screen">
                <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
                <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
            </div>

            <!-- Signup Form -->
            <form @submit.prevent="handleSignUp" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input v-model="form.name" type="text" placeholder="Enter your name"
                        class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="form.email" type="email" placeholder="Enter your email"
                        class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="form.password" type="password" placeholder="Enter your password"
                        class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input v-model="confirmPassword" type="password" placeholder="Confirm your password"
                        class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                <!-- Sign Up Button -->
                <button type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300">
                    Sign Up
                </button>
            </form>

            <!-- Login Redirect -->
            <p class="text-center text-gray-600 mt-6">
                Already have an account?
                <router-link to="/login" class="text-blue-500 hover:underline">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import Swal from 'sweetalert2';

export default {
    components: {
        LoopingRhombusesSpinner
    },
    name: "SignUpPage",
    data() {
        return {
            isLoading: false,
            form: {
                name: '',
                email: "",
                password: "",
            },
            confirmPassword: "",
        };
    },
    methods: {
        async handleSignUp() {
            if (this.form.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            this.isLoading = true
            try {
                const response = await axios.post('https://ecommerce-hjlr.onrender.com/user/signUp', this.form)
                console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "sign up successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (error) {
                console.log(error)
                // alert('sign up unsuccessful')
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "sign up unsuccessful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            finally {
                this.isLoading = false;
            }
            this.$router.push({ name: "HomePage" });
        },
    },
};
</script>
