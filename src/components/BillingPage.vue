<template>
    <div class="billing-container">
        <div v-if="isLoading || isRazorpayLoading" class="flex justify-center items-center h-screen loading-overlay">
            <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
        </div>
        <div v-else class="row" :class="{ 'opacity-40': isRazorpayLoading }">
            <!-- Order Summary -->
            <div class="col-lg-6">
                <div class="card order-summary">
                    <div class="card-header bg-primary text-white">
                        <h4 class="mb-0"><i class="bi bi-cart-check"></i> Order Summary</h4>
                    </div>
                    <div class="card-body">
                        <div v-for="(item, index) in localCartItems" :key="index"
                            class="order-item d-flex justify-content-between align-items-center mb-3">
                            <div class="item-info">
                                <h6 class="mb-0">{{ item.productName }}</h6>
                                <small class="text-muted">Quantity: {{ item.quantity }}</small>
                            </div>
                            <div class="item-price">
                                {{ formatCurrency(item.price * item.quantity) }}
                            </div>
                        </div>

                        <hr>

                        <div class="order-totals">
                            <div class="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>{{ cartTotal }}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Tax ({{ 5 }}%):</span>
                                <span>{{ (cartTotal * 0.05).toFixed(2) }}</span>
                            </div>
                            <div v-if="order.totals.discount > 0"
                                class="d-flex justify-content-between mb-2 text-success">
                                <span>Discount:</span>
                                <span>-{{ 100 }}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Shipping:</span>
                                <span>₹{{ 5 }}</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between fw-bold fs-5">
                                <span>Total:</span>
                                <span>₹{{ ((cartTotal + 5 + cartTotal * 0.08).toFixed(2)) - 100 }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shipping Information -->
                <div class="card mt-4">
                    <div class="card-header bg-light">
                        <h5 class="mb-0"><i class="bi bi-truck"></i> Shipping Information</h5>
                    </div>
                    <div class="card-body">
                        <p class="mb-1">{{ shipping.name }}</p>
                        <p class="mb-1">{{ shipping.address }}</p>
                        <p class="mb-1">{{ shipping.city }}, {{ shipping.state }} {{ shipping.zip }}</p>
                        <p class="mb-0">{{ shipping.country }}</p>
                    </div>
                </div>

                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-lg" :disabled="processing" @click="makePayment">
                        <span v-if="processing" class="spinner-border spinner-border-sm me-2" role="status"></span>
                        Pay Now {{ formatCurrency(((cartTotal + 5 + cartTotal * 0.08).toFixed(2)) - 100) }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserData } from '@/localstorage';
import axios from 'axios';
import Swal from 'sweetalert2';
import { LoopingRhombusesSpinner } from 'epic-spinners'

export default {
    name: 'BillingPage',
    components: { LoopingRhombusesSpinner },
    data() {
        return {
            isLoading: false,
            processing: false,
            order: {
                id: 'ORD-123456',
                status: 'pending',
                items: [
                    { id: 1, name: 'Product A', price: 49.99, quantity: 2 },
                    { id: 2, name: 'Product B', price: 29.99, quantity: 1 },
                    { id: 3, name: 'Product C', price: 19.99, quantity: 3 }
                ],
                totals: {
                    subtotal: 169.95,
                    tax: 20.39,
                    taxRate: 12,
                    discount: 10.00,
                    shipping: 5.99,
                    total: 186.33
                }
            },
            customer: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '(555) 123-4567'
            },
            shipping: {
                name: 'John Doe',
                address: '123 Main Street',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'United States'
            },
            payment: {
                cardNumber: '',
                expiry: '',
                cvv: '',
                name: '',
                saveCard: false
            },
            localCartItems: [],
            user: useUserData(),
            userObj: '',
            paymentPayload: [],
            orderPayload: [],
            event: '',
            // historyObj: [{
            //     userId: '',
            //     productCategory: '',
            //     productName: '',
            //     price: '',
            //     image: '',
            //     upperImage: '',
            //     lowerImage: '',
            //     shoesImage: '',
            //     quantity: '',
            //     totalPrice: '',
            // }],
            historyObj: [],
            paymentData: {
                status: '',
                orderId: '',
                paymentId: '',
                paymentMethod: '',
                createdAt: ''
            },
            razorpayLoaded: false,
            loadingRazorpay: false,
            isRazorpayLoading: false
        };
    },
    methods: {
        handlePaymentSuccess(paymentResponse) {
            console.log('Payment successful:', paymentResponse);

            // Send payment success to backend
            // this.verifyPaymentWithBackend(paymentResponse)
            // .then(() => {
            // this.$router.push({ name: 'HomePage' });
            // Optional: Show success message
            // alert('Payment completed successfully!');
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment completed successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            // })
            // .catch(error => {
            //     console.error('Payment verification failed:', error);
            //     this.$toast.error('Payment verification failed. Please contact support.');
            // });
        },
        handlePaymentCancellation(reason, orderData) {
            console.log('Payment cancelled by user. Reason:', reason);
            console.log('Order data:', orderData);

            // Send cancellation to backend
            // this.notifyBackendOfCancellation(orderData.id, reason)
            //     .then(() => {
            // Show cancellation message to user
            // alert('Payment was cancelled. You can try again whenever you\'re ready.');
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'Payment was cancelled. You can try again whenever you\'re ready.',
                showConfirmButton: true
            });
            // Optional: Redirect to cart or keep on same page
            // this.$router.push({ name: 'CartPage' });
            // })
            // .catch(error => {
            //     console.error('Failed to notify backend of cancellation:', error);
            // });
        },

        async loadRazorpay() {
            if (this.razorpayLoaded) return true; // Already loaded
            if (this.loadingRazorpay) return; // Already loading

            this.loadingRazorpay = true;

            return new Promise((resolve, reject) => {
                if (window.Razorpay) {
                    this.razorpayLoaded = true;
                    this.loadingRazorpay = false;
                    resolve(true);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;

                script.onload = () => {
                    this.razorpayLoaded = true;
                    this.loadingRazorpay = false;
                    console.log('Razorpay loaded successfully');
                    resolve(true);
                };

                script.onerror = () => {
                    this.loadingRazorpay = false;
                    console.error('Failed to load Razorpay');
                    reject(new Error('Failed to load Razorpay'));
                };

                document.head.appendChild(script);
            });
        },

        async makePayment() {
            this.isRazorpayLoading = true;
            await this.loadRazorpay();
            try {
                const rawAmount = Number(((this.cartTotal + 5 + this.cartTotal * 0.08) - 100).toFixed(2));
                console.log('Raw amount for API:', rawAmount);
                const response = await axios.post(`https://ecommerce-hjlr.onrender.com/pay/create?amount=${rawAmount}&currency=INR`, null, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })


                console.log(response)
                console.log(response.data)
                const orderData = response.data;

                // 3. Initialize Razorpay checkout
                const options = {
                    key: 'rzp_test_RMzB4GcEECupG8', // Your Dummy Razorpay Key ID
                    amount: orderData.amount, // Use amount from backend
                    currency: orderData.currency,
                    order_id: orderData.id, // Order ID from backend
                    name: 'CRX Solutions',
                    description: 'Paying for grocery and clothes',
                    handler: async (response) => {
                        // This function runs after successful payment
                        console.log('Payment successful:', response);
                        this.handlePaymentSuccess(response);
                        console.log('Payment successfully done getting webhook data');
                        await this.getWebHookData();
                        this.$router.push({ name: 'HomePage' });
                    },
                    prefill: {
                        name: 'Raj Chauhan',
                        email: 'craj47577@gmail.com',
                        contact: '9321834217'
                    },
                    theme: {
                        color: '#3399cc'
                    },
                    modal: {
                        // This function runs when modal is closed
                        ondismiss: async (reason) => {
                            console.log('Payment modal closed:', reason);
                            this.handlePaymentCancellation(reason, orderData);
                            console.log('Payment modal closed getting webhook data');
                            await this.getWebHookData();
                            this.$router.push({ name: 'HomePage' });

                        }
                    }
                };

                // 4. Open Razorpay checkout
                const rzp = new window.Razorpay(options);
                this.isRazorpayLoading = false
                rzp.open();

                // // Add immediate cancellation for testing
                // setTimeout(() => {
                //     rzp.close();
                //     alert('Payment cancelled for testing purposes.');
                // },1000);

            } catch (error) {
                console.log('Error creating payment:', error);
                this.isRazorpayLoading = false
                // this.handlePaymentError(error);
            }
            this.isRazorpayLoading = false
        },

        // async makeRPayment() {
        //     try {
        //         // 1. First load Razorpay
        //         await this.loadRazorpay();
        //         const finalAmount = this.formatCurrency(((this.cartTotal + 5 + this.cartTotal * 0.08).toFixed(2)) - 100);
        //         //  const rawAmount = ((this.cartTotal + 5 + this.cartTotal * 0.08) - 100).toFixed(2);
        //         const rawAmount = Number(((this.cartTotal + 5 + this.cartTotal * 0.08) - 100).toFixed(2));
        //         console.log('Raw amount for API:', rawAmount);
        //         // 2. Then create order with backend
        //         const response = await axios.post(`https://ecommerce-hjlr.onrender.com/pay/create?amount=${rawAmount}&currency=INR`, null, {
        //             headers: {
        //                 Authorization: 'Bearer ' + this.userObj.token
        //             }
        //         });

        //         console.log(response);
        //         console.log(response.data);
        //         const orderData = response.data;

        //         // 3. Initialize Razorpay checkout
        //         const options = {
        //             key: 'rzp_test_RMzB4GcEECupG8',
        //             amount: orderData.amount,
        //             currency: orderData.currency,
        //             order_id: orderData.id,
        //             name: 'CRX Solutions',
        //             description: 'Paying for grocery and clothes',
        //             handler: (response) => {
        //                 console.log('Payment successful:', response);
        //                 this.handlePaymentSuccess(response);
        //                 console.log('Payment successfully done getting webhook data');
        //                 this.getWebHookData();
        //                 this.$router.push({ name: 'HomePage' });
        //             },
        //             prefill: {
        //                 name: 'Raj Chauhan',
        //                 email: 'craj47577@gmail.com',
        //                 contact: '9321834217'
        //             },
        //             theme: {
        //                 color: '#3399cc'
        //             },
        //             modal: {
        //                 ondismiss: (reason) => {
        //                     console.log('Payment modal closed:', reason);
        //                     this.handlePaymentCancellation(reason, orderData);

        //                     this.getWebHookData();
        //                     this.$router.push({ name: 'HomePage' });
        //                 }
        //             }
        //         };

        //         // 4. Open Razorpay checkout
        //         const rzp = new window.Razorpay(options);
        //         rzp.open();

        //     } catch (error) {
        //         console.log('Error in payment process:', error);
        //         if (error.message.includes('Failed to load Razorpay')) {
        //             alert('Payment service is temporarily unavailable. Please try again later.');
        //         } else {
        //             // Handle other errors
        //             // this.handlePaymentError(error);
        //         }
        //     }
        // },
        // async getWebHookData() {
        //     try {
        //         const response = await axios.get('https://ecommerce-hjlr.onrender.com/pay/get/webhook-response', {
        //             headers: {
        //                 Authorization: 'Bearer ' + this.userObj.token
        //             }
        //         })
        //         console.log(response)
        //         if (response.data.body.event === 'order.paid' || 'payment.captured') {
        //             this.orderPayload = response.data.body.payload.order.entity
        //             this.paymentPayload = response.data.body.payload.payment.entity
        //             this.paymentData.status = 'SUCCESS'
        //             this.paymentData.orderId = this.paymentPayload.order_id
        //             this.paymentData.paymentId = this.paymentPayload.id
        //             this.paymentData.paymentMethod = this.paymentPayload.method
        //             this.paymentData.createdAt = new Date().toISOString();
        //             console.log(this.orderPayload)
        //             console.log(this.paymentPayload)
        //         }
        //         else if (response.data.body.event === 'payment.failed') {
        //             this.paymentPayload = response.data.body.payload.payment.entity
        //             this.paymentData.status = 'FAILED'
        //             this.paymentData.orderId = this.paymentPayload.order_id
        //             this.paymentData.paymentId = this.paymentPayload.id
        //             this.paymentData.paymentMethod = this.paymentPayload.method
        //             this.paymentData.createdAt = new Date().toISOString();
        //             console.log(this.paymentPayload)
        //         }
        //         console.log(response.data.body.event)
        //         this.event = response.data.body.event;
        //         this.saveHistory();
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },

        async getWebHookData() {
            try {
                const response = await axios.get('https://ecommerce-hjlr.onrender.com/pay/get/webhook-response', {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                });

                console.log(response);

                const event = response.data.body.event;
                const payload = response.data.body.payload;

                // Store event for later use
                this.event = event;

                // Handle different event types with proper null checks
                if (event === 'order.paid') {
                    // Add null checks for payload structure
                    if (payload && payload.order && payload.order.entity) {
                        this.orderPayload = payload.order.entity;
                        this.paymentPayload = payload.order.entity;
                        this.paymentData.status = 'SUCCESS';
                        this.paymentData.orderId = this.paymentPayload.order_id;
                        this.paymentData.paymentId = this.paymentPayload.id;
                        this.paymentData.paymentMethod = this.paymentPayload.method;
                        this.paymentData.createdAt = new Date().toISOString();
                        console.log(this.orderPayload);
                        console.log(this.paymentPayload);
                    } else {
                        console.warn('Missing required payload data for event:', event);
                        // Handle incomplete data scenario if needed
                    }
                }
                else if(event === 'payment.captured'){
                    // Add null checks for payment payload
                    if (payload && payload.payment && payload.payment.entity) {
                        this.paymentPayload = payload.payment.entity;
                        this.paymentData.status = 'SUCCESS';
                        this.paymentData.orderId = this.paymentPayload.order_id || this.paymentPayload.id;
                        this.paymentData.paymentId = this.paymentPayload.id;
                        this.paymentData.paymentMethod = this.paymentPayload.method;
                        this.paymentData.createdAt = new Date().toISOString();
                        console.log(this.paymentPayload);
                    } else {
                        console.warn('Missing payment payload data for captured payment event');
                        // Handle incomplete data scenario if needed
                    }
                }
                else if (event === 'payment.failed') {
                    // Add null checks for payment payload
                    if (payload && payload.payment && payload.payment.entity) {
                        this.paymentPayload = payload.payment.entity;
                        this.paymentData.status = 'FAILED';
                        this.paymentData.orderId = this.paymentPayload.order_id  || this.paymentPayload.id;
                        this.paymentData.paymentId = this.paymentPayload.id;
                        this.paymentData.paymentMethod = this.paymentPayload.method;
                        this.paymentData.createdAt = new Date().toISOString();
                        console.log(this.paymentPayload);
                    } else {
                        console.warn('Missing payment payload data for failed payment event');
                        // Handle incomplete data scenario if needed
                    }
                }
                else {
                    console.log('Unhandled event type:', event);
                }

                console.log(event);
                this.saveHistory();

            } catch (error) {
                console.log('Error in getWebHookData:', error);
                // You might want to add additional error handling here
                // such as showing a user-friendly message or retry logic
            }
        },

        async saveHistory() {
            console.log('Saving order history with payment data...');
            const finalAmount = this.formatCurrency(((this.cartTotal + 5 + this.cartTotal * 0.08).toFixed(2)) - 100);
            this.historyObj = this.localCartItems.map(item => ({
                ...item, ...this.paymentData, userId: this.userObj.id, finalAmount: finalAmount
            }))
            console.log(this.historyObj)
            const response = await axios.post('https://ecommerce-hjlr.onrender.com/history/add', this.historyObj, {
                headers: {
                    Authorization: 'Bearer ' + this.userObj.token
                }
            })
            console.log(response)

        },
        formatCurrency(amount) {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(amount);
        },
        processPayment() {
            this.processing = true;

            // Simulate payment processing
            setTimeout(() => {
                this.order.status = 'completed';
                this.processing = false;
                this.$emit('payment-completed', this.order);
            }, 2000);
        },
        async getAllOrderItems() {
            this.isLoading = true;
            try {
                const response = await axios.get(`https://ecommerce-hjlr.onrender.com/cart/getAll/${this.userObj.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                console.log(response)
                console.log(response.data)
                this.localCartItems = response.data
            } catch (error) {
                this.isLoading = false
                console.log(error)
            }
            this.isLoading = false
        },
        continueShopping() {
            this.$router.push({ name: 'category' });
        }
    },
    mounted() {
        this.userObj = this.user.getUser();
        console.log(this.userObj.id)
        this.getAllOrderItems();
    },
    computed: {
        cartTotal() {
            return this.localCartItems.reduce((total, item) => {
                return total + (item.price * item.quantity)
            }, 0)
        },
    }
};
</script>

<style scoped>
.billing-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.order-summary {
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card {
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-header {
    border-radius: 0.5rem 0.5rem 0 0 !important;
}

.order-item {
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.order-item:last-child {
    border-bottom: none;
}

.btn-success {
    background-color: #28a745;
    border-color: #28a745;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
}

.btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
}

.form-control:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.input-group-text {
    background-color: #f8f9fa;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .billing-container {
        padding: 15px;
    }
}

@media (max-width: 768px) {
    .order-item {
        flex-direction: column;
        align-items: flex-start !important;
    }

    .item-price {
        margin-top: 0.5rem;
        font-weight: bold;
    }

    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        /* Semi-transparent white */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
}
</style>