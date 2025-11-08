<template>
    <div class="max-w-6xl mx-auto p-4 sm:p-6">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 text-center sm:text-left">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Shopping Cart</h1>
            <div class="text-xl sm:text-2xl font-semibold text-blue-600">
                Total: ₹{{ cartTotal }}
            </div>
        </div>

        <!-- Loader -->
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
        </div>

        <!-- Empty Cart Message -->
        <div v-else-if="localCartItems.length === 0" class="text-center py-12">
            <div class="text-6xl mb-4">🛒</div>
            <h2 class="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p class="text-gray-500 text-sm sm:text-base">Start shopping to add items to your cart</p>
        </div>

        <!-- Cart Items -->
        <div v-else class="space-y-6">
            <div v-for="item in localCartItems" :key="item.id"
                class="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start hover:shadow-lg transition-shadow">
                <!-- Product Image / Carousel -->
                <div
                    class="w-full sm:w-28 md:w-32 h-40 sm:h-28 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                    <img v-if="item.image" :src="item.image" :alt="item.productName"
                        class="w-full h-full object-cover" />
                    <div v-else :id="'carousel-' + item.id" class="carousel slide w-full h-full" data-bs-ride="carousel"
                        data-bs-interval="2000">
                        <div class="carousel-inner h-full">
                            <div v-for="(img, index) in getImages(item)" :key="index"
                                :class="['carousel-item', { active: index === 0 }]">
                                <img :src="img" class="d-block w-100 h-full object-cover" alt="Product" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Details -->
                <div class="flex-1 text-center sm:text-left">
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{{ item.productName }}</h3>
                    <p class="text-gray-600 text-sm sm:text-base mb-1">{{ item.productCategory }}</p>
                    <p class="text-lg font-bold text-blue-600">₹{{ item.price }}</p>
                </div>

                <!-- Quantity and Actions -->
                <div class="flex items-center justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
                    <div class="flex items-center space-x-2">
                        <button @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1"
                            class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50">−</button>
                        <span class="text-lg font-semibold w-8 text-center">{{ item.quantity }}</span>
                        <button @click="updateQuantity(item.id, item.quantity + 1)"
                            class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">+</button>
                    </div>

                    <div class="text-lg sm:text-xl font-bold text-gray-800">
                        ₹{{ (item.price * item.quantity).toFixed(2) }}
                    </div>

                    <button @click="removeFromCart(item.id)"
                        class="p-2 text-red-500 hover:bg-red-50 rounded-full transition" title="Remove item">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="bg-white rounded-lg shadow-md p-6 mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Order Summary -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Order Summary</h3>
                        <div class="space-y-2 text-sm sm:text-base">
                            <div class="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{{ cartTotal }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Shipping</span>
                                <span>₹5.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Tax</span>
                                <span>₹{{ (cartTotal * 0.08).toFixed(2) }}</span>
                            </div>
                            <hr class="my-3" />
                            <div class="flex justify-between text-lg sm:text-xl font-bold">
                                <span>Total</span>
                                <span>₹{{ (cartTotal + 5 + cartTotal * 0.08).toFixed(2) }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Checkout Actions -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Checkout</h3>
                        <router-link to="/billing"
                            class="block w-full bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 mb-4">
                            Proceed to Checkout
                        </router-link>
                        <router-link to="/category"
                            class="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-center hover:bg-gray-50">
                            Continue Shopping
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { EventBus, cartItems, updateQuantity, removeFromCart, updatePrice } from '@/eventBus'
import { useUserData } from '@/localstorage';
import { getCartItems } from '@/service/api';
import axios from 'axios'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import { LoopingRhombusesSpinner } from 'epic-spinners'


export default {
    name: 'ShoppingCart',
    data() {
        return {
            loading:false,
            localCartItems: [],
            user: useUserData(),
            userObj: {},
            isLoading: false,
        }
    },
    components: {
        ClipLoader,
        LoopingRhombusesSpinner
    },
    computed: {
        cartTotal() {
            return this.localCartItems.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        },
    },
    methods: {
        updateQuantity(productId, newQuantity) {
            // this.localCartItems[index].quantity = newQuantity
            updateQuantity(productId, newQuantity)
        },
        async removeFromCart(productId) {
            this.isLoading = true
            try {
                const response = await axios.delete(`https://ecommerce-hjlr.onrender.com/cart/delete/${productId}`, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                removeFromCart(productId)
                console.log(response)

            } catch (error) {
                console.log(error)
            }
            finally {
                this.isLoading = false;
            }

        },
        updatePrice(productId, totalPrice) {
            updatePrice(productId, totalPrice)
            this.UpdateCart();
        },
        getImages(item) {
            return [
                item.upperImage,
                item.lowerImage,
                item.shoesImage
            ];
        },
        async getAllCartItems() {
            this.loading = true
            try {
                const response = await getCartItems(this.userObj);
                console.log(response)
                console.log(response.data)
                cartItems.value = response.data
                this.localCartItems = [...cartItems.value]
            } catch (error) {
                console.log(error)
                this.loading = false
            }
            this.loading = false
        },
        async UpdateCart() {
            try {
                this.isLoading = true;
                this.localCartItems = [...cartItems.value]
                const response = await axios.post('https://ecommerce-hjlr.onrender.com/cart/update', this.localCartItems, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
            finally {
                this.isLoading = false;
            }

            console.log(this.localCartItems)
        }
    },
    mounted() {
        this.userObj = this.user.getUser()
        this.getAllCartItems();
        console.log(this.userObj)
        // Initialize with current cart items


        console.log(this.localCartItems);

        // Listen for cart updates
        EventBus.on('cart-updated', (updatedCart) => {
            this.localCartItems = [...updatedCart]
        })
    }
}
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>