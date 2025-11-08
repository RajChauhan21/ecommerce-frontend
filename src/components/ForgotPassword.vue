<template>
    <div class="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div
            class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 transition transform hover:scale-105 duration-300">
            <!-- Heading -->
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-blue-600">Reset Password</h1>
                <p class="text-gray-500 mt-2">Enter your email to receive reset instructions</p>
            </div>

            <div v-if="isLoading" class="flex justify-center items-center py-6">
                <div class="spinner-border text-blue-600" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success mb-4" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i> {{ successMessage }}
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger mb-4" role="alert">
                <i class="bi bi-exclamation-circle-fill me-2"></i> {{ errorMessage }}
            </div>

            <!-- Reset Form -->
            <form @submit.prevent="handleReset" v-if="!successMessage">
                <!-- Email -->
                <div class="mb-4">
                    <label class="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input type="email" v-model="email" required placeholder="Enter your email address"
                        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                    Send Reset Instructions
                </button>
            </form>

            <!-- Back to Login -->
            <div class="text-center mt-6">
                <router-link to="/login" class="text-blue-600 hover:underline flex items-center justify-center">
                    <i class="bi bi-arrow-left me-2"></i> Back to Login
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            isLoading: false,
            successMessage: '',
            errorMessage: '',
            cc: 'chavanshivam998@gmail.com',
            userObj:null
        }
    },
    methods: {
        async handleReset() {
            this.isLoading = true;
            this.errorMessage = '';

            // Simulate API call
            setTimeout(() => {
                this.isLoading = false;
                try {
                    const response = axios.get(`https://ecommerce-hjlr.onrender.com/email/send/${this.email}/${this.cc}`,{
                        headers:{
                            Authorization: 'Bearer ' + this.userObj.token
                        }
                    })
                    console.log(response);
                } catch (error) {
                    this.errorMessage = 'An error occurred while sending reset instructions. Please try again.';
                    return;
                }
                // Simulate successful response
                if (this.email && this.email.includes('@')) {
                    this.successMessage = `Password reset instructions have been sent to ${this.email}`;
                } else {
                    this.errorMessage = 'Please enter a valid email address';
                }
            }, 1500);
        }
    },
    mounted() {
        this.userObj = JSON.parse(localStorage.getItem('user'))
        console.log(this.userObj);
    }   
}
</script>

<style scoped>
/* Custom styles to match your login page */
.alert {
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
}

.alert-success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
}

.alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
}

.spinner-border {
    width: 2rem;
    height: 2rem;
    border-width: 0.2em;
}

/* Bootstrap icons fallback */
.bi::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-family: "Bootstrap Icons";
}

.bi-check-circle-fill::before {
    content: "\F26A";
}

.bi-exclamation-circle-fill::before {
    content: "\F336";
}

.bi-arrow-left::before {
    content: "\F12A";
}

/* If Bootstrap Icons font is not available, use text fallbacks */
@font-face {
    font-family: "Bootstrap Icons";
    src: url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/fonts/bootstrap-icons.woff2") format("woff2"),
        url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/fonts/bootstrap-icons.woff") format("woff");
}
</style>