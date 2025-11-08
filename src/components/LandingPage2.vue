<template>
    <div class="landing-page font-sans text-gray-900">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-pink-500 position-sticky w-100 top-0 z-50">
            <div class="container-fluid px-3 px-sm-4">
                <div class="navbar-brand text-lg sm:text-xl font-bold flex items-center">
                    <span><img :src="bagIcon" alt="ShopRi" class="w-6 h-6 sm:w-8 sm:h-8"></span>
                    <span class="ml-2 text-white">ShopRi</span>
                </div>

                <!-- Mobile Toggle Button -->
                <button class="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>

                <div class="collapse navbar-collapse font-bold" id="navbarNav">
                    <ul
                        class="navbar-nav ms-auto d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 gap-md-4 py-3 py-md-0">
                        <li class="nav-item">
                            <router-link class="nav-link text-white hover:text-pink-200 transition-colors text-lg"
                                to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white hover:text-pink-200 transition-colors text-lg"
                                to="#">Features</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white hover:text-pink-200 transition-colors text-lg"
                                to="#">Pricing</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
            <!-- Main Background Image -->
            <img :src="heroImage1" alt="Main Hero Background" class="absolute inset-0 w-full h-full object-cover" />

            <!-- Overlay for better text readability -->
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>

            <!-- Floating Product Images - Responsive Positioning -->
            <div class="relative z-20 w-full h-full max-w-7xl mx-auto">
                <!-- Top Left - Baby Product -->
                <div
                    class="absolute top-4 left-2 sm:top-8 sm:left-6 lg:top-16 lg:left-16 transform hover:scale-105 transition-transform duration-300">
                    <img :src="heroImage2" alt="Baby Product"
                        class="w-20 h-24 sm:w-32 sm:h-40 lg:w-48 lg:h-56 rounded-lg shadow-2xl object-cover border-2 border-white" />
                    <div
                        class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-800 shadow-lg">
                        Kids
                    </div>
                </div>

                <!-- Top Right - Sneaker -->
                <div
                    class="absolute top-4 right-2 sm:top-8 sm:right-6 lg:top-16 lg:right-16 transform hover:scale-105 transition-transform duration-300">
                    <img :src="heroImage3" alt="Sneaker Product"
                        class="w-20 h-24 sm:w-32 sm:h-40 lg:w-48 lg:h-56 rounded-lg shadow-2xl object-cover border-2 border-white" />
                    <div
                        class="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-800 shadow-lg">
                        Shoes
                    </div>
                </div>

                <!-- Bottom Right - Product -->
                <div
                    class="absolute bottom-4 right-2 sm:bottom-8 sm:right-6 lg:bottom-16 lg:right-16 transform hover:scale-105 transition-transform duration-300">
                    <img :src="heroImage5" alt="Featured Product"
                        class="w-20 h-16 sm:w-32 sm:h-24 lg:w-48 lg:h-36 rounded-lg shadow-2xl object-cover border-2 border-white" />
                    <div
                        class="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-800 shadow-lg">
                        New
                    </div>
                </div>

                <!-- Bottom Left - Product -->
                <div
                    class="absolute bottom-4 left-2 sm:bottom-8 sm:left-6 lg:bottom-16 lg:left-16 transform hover:scale-105 transition-transform duration-300">
                    <img :src="heroImage6" alt="Featured Product"
                        class="w-20 h-16 sm:w-32 sm:h-24 lg:w-48 lg:h-36 rounded-lg shadow-2xl object-cover border-2 border-white" />
                    <div
                        class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-800 shadow-lg">
                        Sale
                    </div>
                </div>
            </div>

            <!-- Main Content Center -->
            <div class="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <!-- Main Heading -->
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
                    Discover the Future of
                    <span class="text-pink-400">Shopping</span>
                </h1>

                <!-- Subtitle -->
                <p
                    class="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    Trendy, Stylish, and Delivered to Your Doorstep. Experience shopping like never before.
                </p>

                <!-- CTA Buttons -->
                <div
                    class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-400">
                    <router-link to="/category"
                        class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                        <span>Shop Now</span>
                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </router-link>

                    <router-link to="/category"
                        class="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
                        View Sales
                    </router-link>
                </div>

                <!-- Additional Info -->
                <div
                    class="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-300 animate-fade-in-up delay-600">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>Free Shipping</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>Secure Payment</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
                    <div class="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>

        <!-- Marquee Section -->
        <section class="banking-partners-section position-relative overflow-hidden">
            <!-- Floating Gradient Blobs -->
            <div class="floating-shape shape-1"></div>
            <div class="floating-shape shape-2"></div>
            <div class="floating-shape shape-3"></div>

            <div class="container position-relative">
                <!-- Title -->
                <div class="text-center mb-5">
                    <h2 class="section-title mb-3">
                        <i class="fas fa-handshake me-2"></i> Our Trusted Banking Partners
                    </h2>
                    <div class="text-muted fs-5">
                        Powering seamless and secure payments across the globe
                    </div>
                    <!-- <div class="security-badge">
                        <i class="fas fa-shield-alt me-2"></i>Bank Grade Security
                    </div> -->
                </div>

                <!-- Marquee Container -->
                <div class="marquee-container shadow-sm rounded-4 position-relative">
                    <!-- Gradient Edges -->
                    <div class="gradient-start position-absolute start-0 top-0 h-100 z-2"></div>
                    <div class="gradient-end position-absolute end-0 top-0 h-100 z-2"></div>

                    <!-- Moving Track -->
                    <div class="marquee-wrapper">
                        <div class="marquee-track">
                            <!-- Duplicate sets for infinite scroll -->
                            <div v-for="(set, i) in 2" :key="i" class="d-flex align-items-center">
                                <div v-for="(partner, index) in features" :key="`${i}-${index}`"
                                    class="marquee-item d-flex align-items-center justify-content-center">
                                    <img class="bank-logo me-3" :src="partner.icon" :alt="partner.name" />
                                    <span class="partner-text fw-bold" :class="partner.textClass">
                                        {{ partner.text }}
                                    </span>
                                </div>
                            </div>
                            <div v-for="(set, i) in 2" :key="i" class="d-flex align-items-center">
                                <div v-for="(partner, index) in features" :key="`${i}-${index}`"
                                    class="marquee-item d-flex align-items-center justify-content-center">
                                    <img class="bank-logo me-3" :src="partner.icon" :alt="partner.name" />
                                    <span class="partner-text fw-bold" :class="partner.textClass">
                                        {{ partner.text }}
                                    </span>
                                </div>
                            </div>
                            <div v-for="(set, i) in 2" :key="i" class="d-flex align-items-center">
                                <div v-for="(partner, index) in features" :key="`${i}-${index}`"
                                    class="marquee-item d-flex align-items-center justify-content-center">
                                    <img class="bank-logo me-3" :src="partner.icon" :alt="partner.name" />
                                    <span class="partner-text fw-bold" :class="partner.textClass">
                                        {{ partner.text }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="text-center mt-5">
                    <p class="text-secondary mb-3">
                        We collaborate with world-class financial networks to ensure every transaction is encrypted and
                        protected.
                    </p>
                </div>
            </div>
        </section>


        <!-- Featured Products -->
        <section class="py-8 sm:py-12 bg-gray-50">
            <div class="container px-4 sm:px-6">
                <h2 class="text-center fw-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-800">Featured
                    Products</h2>

                <div class="row g-3 sm:g-4 justify-content-center">
                    <div v-for="(product, i) in products" :key="product.id"
                        class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                        <!-- Card -->
                        <div
                            class="card border-0 rounded-3 shadow-sm flex-fill d-flex flex-column h-100 transition-all duration-300 hover-shadow-lg">
                            <a href="#" class="text-decoration-none">
                                <img :src="product.image" class="card-img-top rounded-top-3" alt="Product image"
                                    style="object-fit: contain; height: 200px; padding: 1rem;" />
                            </a>

                            <div class="card-body d-flex flex-column pb-3 px-3">
                                <a href="#" class="text-decoration-none mb-2 flex-grow-1">
                                    <h5
                                        class="card-title fw-semibold text-dark mb-2 text-truncate text-sm sm:text-base">
                                        {{ product.name }}
                                    </h5>
                                </a>

                                <div class="d-flex align-items-center mb-3 flex-wrap gap-1">
                                    <div class="d-flex align-items-center me-2">
                                        <i class="bi bi-star-fill text-warning small"></i>
                                        <i class="bi bi-star-fill text-warning small"></i>
                                        <i class="bi bi-star-fill text-warning small"></i>
                                        <i class="bi bi-star-fill text-warning small"></i>
                                        <i class="bi bi-star text-muted small"></i>
                                    </div>
                                    <span class="badge bg-primary-subtle text-primary text-wrap small">{{ product.desc
                                    }}</span>
                                </div>

                                <div class="mt-auto d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold text-dark">Rs.599</span>
                                    <router-link to="/login" class="btn btn-primary px-3 py-2 fw-medium text-sm"
                                        @click="addToCart(product)">
                                        Add to cart
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Carousel Section -->

        <!-- <section class="py-8 sm:py-12 bg-white">
            <div class="container-fluid px-3 sm:px-4">
                <h2 class="text-center fw-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-800">Crazy Deals
                </h2>

                <div id="featuredCarousel" class="carousel slide" data-bs-ride="carousel">
                    
                    <div class="carousel-indicators">
                        <button v-for="(slide, index) in carouselSlides" :key="index" type="button"
                            data-bs-target="#featuredCarousel" :data-bs-slide-to="index"
                            :class="{ 'active': index === 0 }" aria-current="true"
                            :aria-label="'Slide ' + (index + 1)"></button>
                    </div>

                    <div class="carousel-inner">
                        <div v-for="(slide, slideIndex) in carouselSlides" :key="slideIndex" class="carousel-item"
                            :class="{ 'active': slideIndex === 0 }" :data-bs-interval="slideInterval">
                            <div class="d-flex justify-content-center px-2">
                                <div class="row g-3 g-sm-4 justify-content-center w-100" style="max-width: 1400px;">
                                    <div v-for="(item, itemIndex) in slide.items" :key="itemIndex"
                                        class="col-6 col-sm-4 col-md-3 col-lg">
                                        <div class="product-card observe bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 opacity-0 in-view h-full flex flex-col mx-auto"
                                            style="transition-delay: 0ms; max-width: 280px;">
                                            <img :src="item.image" :alt="item.title"
                                                class="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 hover:scale-110">
                                            <div class="p-3 sm:p-4 text-center flex flex-col flex-grow">
                                                <h3
                                                    class="text-sm sm:text-base lg:text-lg font-semibold mb-2 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
                                                    {{
                                                        item.title }}</h3>
                                                <p
                                                    class="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                                                    {{
                                                        item.description }}</p>
                                                <div class="mt-auto">
                                                    <h6
                                                        class="bg-pink-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-pink-600 transition text-xs sm:text-sm line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                                                        {{ item.offer }}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev d-none d-md-flex" type="button"
                        data-bs-target="#featuredCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next d-none d-md-flex" type="button"
                        data-bs-target="#featuredCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section> -->

        <!-- Carousel Section -->
        <section class="py-5 bg-white">
            <div class="container-fluid px-3">
                <h2 class="text-center fw-bold text-3xl mb-6 text-gray-800">Crazy Deals</h2>

                <div id="featuredCarousel" class="carousel slide" data-bs-ride="carousel">
                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators">
                        <button v-for="(slide, index) in carouselSlides" :key="index" type="button"
                            data-bs-target="#featuredCarousel" :data-bs-slide-to="index"
                            :class="{ 'active': index === 0 }" aria-current="true"
                            :aria-label="'Slide ' + (index + 1)"></button>
                    </div>

                    <!-- Carousel Inner -->
                    <div class="carousel-inner">
                        <div v-for="(slide, slideIndex) in carouselSlides" :key="slideIndex" class="carousel-item"
                            :class="{ 'active': slideIndex === 0 }" data-bs-interval="3000">
                            <div class="d-flex justify-content-center px-2">
                                <div class="row g-3 justify-content-center w-100">
                                    <div v-for="(item, itemIndex) in slide.items" :key="itemIndex"
                                        class="col-6 col-sm-4 col-md-3 col-lg">
                                        <div class="card product-card h-100 mx-auto border-0 shadow-sm">
                                            <img :src="item.image" :alt="item.title" class="card-img-top w-100"
                                                style="height: 200px; object-fit: cover;">
                                            <div class="card-body text-center d-flex flex-column">
                                                <h5 class="card-title fw-semibold">{{ item.title }}</h5>
                                                <p class="card-text text-muted small flex-grow-1">{{ item.description }}
                                                </p>
                                                <div class="mt-auto">
                                                    <span class="badge bg-danger p-2">{{ item.offer }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>


        <!-- Shop by Category -->
        <section class="shop-by-category py-8 sm:py-12 bg-gray-50">
            <div class="container px-4 sm:px-6">
                <h2 class="text-center fw-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-800">Shop by
                    Category</h2>

                <div class="row g-3 sm:g-4 justify-content-center">
                    <div class="col-12 col-sm-6 col-lg-4" v-for="(category, index) in categories" :key="index">
                        <div
                            class="category-card border rounded-3 m-1 sm:m-2 bg-gradient-to-r from-gray-100 to-pink-200 hover:from-pink-200 hover:to-gray-100 transition-all duration-300 h-full">
                            <div class="d-flex justify-content-between align-items-center p-3 sm:p-4 h-full">
                                <div class="flex-grow-1">
                                    <h4 class="fw-bold mb-1 text-dark text-sm sm:text-base lg:text-lg">{{ category.title
                                    }}</h4>
                                    <p class="text-muted small mb-0 text-xs sm:text-sm">{{ category.subtitle }}</p>
                                </div>
                                <img :src="category.image" :alt="category.title"
                                    class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="py-12 sm:py-16 bg-pink-500 text-white text-center">
            <div class="container mx-auto px-4 sm:px-6">
                <div class="observe inline-block w-full max-w-xl mx-auto opacity-0" :style="{ transitionDelay: '0ms' }">
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Join Our Newsletter</h2>
                    <p class="mb-4 sm:mb-6 text-sm sm:text-base">Get the latest updates and exclusive offers.</p>
                    <div class="join flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
                        <input type="text"
                            class="bg-white px-4 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none w-full text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Enter your email" />
                        <button
                            class="bg-white text-pink-500 px-6 py-3 rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-gray-100 hover:text-pink-600 transition-colors font-semibold text-sm sm:text-base whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-6 bg-gray-900 text-gray-300 text-center">
            <p class="text-sm sm:text-base">© 2025 ShopRi. All rights reserved.</p>
        </footer>
    </div>
</template>

<!-- <script>
// ... (keep your existing script section exactly the same) ...
import video from '@/assets/videos/video.mp4'
import bagIcon from '@/assets/icons8-shopping-bag-30.png'
import { ref } from 'vue';
import heroImage1 from '@/assets/hero_page_1.png';
import heroImage2 from '@/assets/hero_page_2.png';
import heroImage3 from '@/assets/hero_page_3.png';
import heroImage4 from '@/assets/hero_page_4.png';
import heroImage5 from '@/assets/hero_page_5.png';
import heroImage6 from '@/assets/hero_page_6.png';
import dress from '@/assets/long-sleeves-dress.png'
import suit from '@/assets/suit.png'
import mactivewear from '@/assets/active_wear_mens.png'
import wactivewear from '@/assets/wactivewear.png'
import homeappliances from '@/assets/appliances.png'
import household from '@/assets/shelf.png'

export default {
    data() {
        return {
            // ... (keep all your existing data properties exactly the same) ...
            household,
            homeappliances,
            mactivewear,
            wactivewear,
            dress,
            suit,
            heroImage1,
            heroImage2,
            heroImage3,
            heroImage4,
            heroImage5,
            heroImage6,
            video,
            bagIcon,
            categories: [
                {
                    title: "Ethnic Wear for Womens",
                    subtitle: "Get Upto 50% Off",
                    image: dress,
                    bgClass: "bg-gradient-pink",
                },
                // ... (rest of your categories array)
            ],
            products: [
                // ... (your products array)
            ],
            features: ref([
                // ... (your features array)
            ]),
            carouselSlides: ref([
                // ... (your carouselSlides array)
            ]),
            // ... (rest of your data properties)
        };
    },
    mounted() {
        // ... (keep your existing mounted logic exactly the same)
    },
    methods: {
        // ... (keep your existing methods exactly the same)
    },
    computed: {
        // ... (keep your existing computed properties exactly the same)
    },
};
</script> -->

<script>
import video from '@/assets/videos/video.mp4'
import bagIcon from '@/assets/icons8-shopping-bag-30.png'
import { ref } from 'vue';
import heroImage1 from '@/assets/hero_page_1.png';
import heroImage2 from '@/assets/hero_page_2.png';
import heroImage3 from '@/assets/hero_page_3.png';
import heroImage4 from '@/assets/hero_page_4.png';
import heroImage5 from '@/assets/hero_page_5.png';
import heroImage6 from '@/assets/hero_page_6.png';
import dress from '@/assets/long-sleeves-dress.png'
import suit from '@/assets/suit.png'
import mactivewear from '@/assets/active_wear_mens.png'
import wactivewear from '@/assets/wactivewear.png'
import homeappliances from '@/assets/appliances.png'
import household from '@/assets/shelf.png'

export default {
    data() {
        return {
            household,
            homeappliances,
            mactivewear,
            wactivewear,
            dress,
            suit,
            heroImage1,
            heroImage2,
            heroImage3,
            heroImage4,
            heroImage5,
            heroImage6,
            video,
            bagIcon,
            categories: [
                {
                    title: "Ethnic Wear for Womens",
                    subtitle: "Get Upto 50% Off",
                    image: dress,
                    bgClass: "bg-gradient-pink",
                },
                {
                    title: "Ethnic Wear for Mens",
                    subtitle: "Flat 300rs Cashback",
                    image: suit,
                    bgClass: "bg-gradient-purple",
                },
                {
                    title: "Active Wear for Mens",
                    subtitle: "Discounts upto 40%",
                    image: mactivewear,
                    bgClass: "bg-gradient-lavender",
                },
                {
                    title: "Active Wear for Womens",
                    subtitle: "Exclusive Offers on above 1000rs purchases",
                    image: wactivewear,
                    bgClass: "bg-gradient-gray",
                },
                {
                    title: "Get top brands home appliances",
                    subtitle: "Exclusive Offers on above 20000rs purchases",
                    image: homeappliances,
                    bgClass: "bg-gradient-gray",
                },
                {
                    title: "Household Products",
                    subtitle: "Get 60% off on all products",
                    image: household,
                    bgClass: "bg-gradient-gray",
                },
            ],
            products: [
                { id: 1, name: "Trendy Sneakers", desc: "Stylish everyday comfort", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/u/h/s/6-sneekers-6-rgy-blue-brown-original-imahdp283x9ycazk.jpeg?q=90" },
                { id: 2, name: "Classic MicroWaves", desc: "Luxury and Cooking", image: "https://static.toiimg.com/thumb/msid-86477471,width-1280,height-1280,resizemode-4/86477471.jpg" },
                { id: 3, name: "Stlyish Denims", desc: "Elegant and comfort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e5WSujD7opuY4ZLrASBXp75nlgaCEu42ig&s" },
                { id: 4, name: "House Hold's", desc: "Perfect for houshold vibes", image: "https://image.made-in-china.com/202f0j00GjNlWuqnMygK/24-Pieces-Home-Starter-Set-Kitchen-Supplies-Accessories-Kitchen-Equipment-Tools-Cooking-Stainless-Steel-Cookware-Sets-Need-Revised.jpg" },
            ],
            io: null, // IntersectionObserver instance

            features: ref([
                {
                    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH613aL1c5KmYk-VzjkCg1Tvj_s_GaWkoGA&s',
                    text: 'Bank of Baroda',
                    textClass: 'text-dark'
                },
                {
                    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_mp1wdykNjkg1nhv461ryHKBQRPKyzwNxw&s',
                    text: 'Indian Overseas Bank',
                    textClass: 'text-dark'
                },
                {
                    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvNqDdQbEkjr2x3yZufxc2Els49_z5U2B6A&s',
                    text: 'Bank of India',
                    textClass: 'text-dark'
                },
                {
                    icon: 'https://i.pinimg.com/474x/41/8d/ef/418defb46ac1d73ff28ddcd49414dd17.jpg',
                    text: 'Axis Bank',
                    textClass: 'text-dark'
                },
                {
                    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_cp5WORyJiSK-vLRlGA7Qbsq_lCKIX_BIg&s',
                    text: 'HDFC Bank',
                    textClass: 'text-dark'
                },
                {
                    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4YDhyrc5NhhsfW5xL42Q5GxuCGuxgESgcA&s',
                    text: 'Punjab National Bank',
                    textClass: 'text-dark'
                }
            ]),
            interval: 1000, // ms for auto slide
            images: [
                // list of image URLs, you can put many, will chunk into slides
                "https://picsum.photos/seed/1/600",
                "https://picsum.photos/seed/2/600",
                "https://picsum.photos/seed/3/600",
                "https://picsum.photos/seed/4/600",
                "https://picsum.photos/seed/5/600",
                "https://picsum.photos/seed/6/600",
                "https://picsum.photos/seed/7/600",
                "https://picsum.photos/seed/8/600",
                "https://picsum.photos/seed/9/600",
                "https://picsum.photos/seed/10/600",
                "https://picsum.photos/seed/11/600",
                "https://picsum.photos/seed/12/600",
                "https://picsum.photos/seed/13/600",
                "https://picsum.photos/seed/14/600",
                "https://picsum.photos/seed/15/600",
                "https://picsum.photos/seed/16/600",
                "https://picsum.photos/seed/17/600",
                "https://picsum.photos/seed/18/600",
                "https://picsum.photos/seed/19/600",
                "https://picsum.photos/seed/20/600"
            ],
            slideInterval: 1000,
            slides: [],
            carouselSlides: ref([
                {
                    items: [
                        {
                            image: 'https://imagescdn.peterengland.com/img/app/product/9/925603-11684987.jpg?auto=format&w=390',
                            title: 'Mens Wear',
                            description: 'Get the best quality mens wear',
                            offer: 'Get ₹500 Cashback'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiYtMob8H93bkYszF5kjLOioXnMeX7SDApA_VQoSrTmwjjQCNgGkZ4hgvveXpzB8G3lk&usqp=CAU',
                            title: 'Shirts for Her',
                            description: 'Get the best quality fabric for her',
                            offer: 'Get Flat 50% off'
                        },
                        {
                            image: 'https://cdn.accentuate.io/449121288496/-1693547503122/MA-(1)-v1695280791449.png?860x1016',
                            title: 'Microwaves',
                            description: 'High performance microwaves',
                            offer: 'Get ₹1000 Amazon Voucher'
                        },
                        {
                            image: 'https://static.godrejenterprises.com/Refcard1_Aipowered_6527db30c3.jpg',
                            title: 'Next-Gen  Refrigerators',
                            description: 'Experience high performance refrigerators',
                            offer: 'Buy One Get One Free'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbHIo4nnrBQK5MGfRsj0w92yweiPBD2Yy5w&s',
                            title: 'Mens Kurta',
                            description: 'Get the best festive season experience',
                            offer: 'Min 40% off'
                        }
                    ]
                },
                {
                    items: [
                        {
                            image: 'https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43.webp?v=1675162397',
                            title: 'Ethnic Wear',
                            description: 'Exclusive ethnic wear collection for womens',
                            offer: '5% Cashback on All Purchases'
                        },
                        {
                            image: 'https://www.libas.in/cdn/shop/files/27810_e0805b2b-0963-4a41-8478-f1edb66c1ce5.webp?v=1755945369&width=1080',
                            title: 'Traditional Wear for Womens',
                            description: 'Celebrate festivals in style',
                            offer: 'Min 40% off'
                        },
                        {
                            image: 'https://bulkmro.com/wp-content/uploads/2023/08/Household-Items-Kitchenware-1.jpg',
                            title: 'Stainless Steel utensils',
                            description: 'Professional kitchenware for your home',
                            offer: 'Get Flat 60% off'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhti_JTMfIK9xAy6ilG2-GWNyaX8LfmImZxA&s',
                            title: 'Winter Jackets for mens',
                            description: 'Shop best in class winter jackets',
                            offer: 'Upto 10% off on UPI Transactions'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo0-dBZ6dtPa6STNVAQg3hvdGLxq966H6hA&s',
                            title: 'Sports Wear for womens',
                            description: 'Comfortable and stylish sports wear',
                            offer: 'Min 50% off'
                        }
                    ]
                },
                {
                    items: [
                        {
                            image: 'https://orpatgroup.com/wp-content/uploads/2021/12/KITCHEN-BOT-FRONT-MAJESTIC-YELLOW-BLACK-04-12-2020_White.jpg',
                            title: 'Get Best mixer grinders for your kitchen',
                            description: 'High-performance mixer grinders',
                            offer: 'Min 30% off'
                        },
                        {
                            image: 'https://assets.ajio.com/medias/sys_master/root/20241230/NfRe/677237a6c148fa1b30688d8a/-473Wx593H-700994249-white-MODEL.jpg',
                            title: 'Dresses for womens',
                            description: 'High- Quality Dresses for womens',
                            offer: 'Get Cashback Upto ₹1500'
                        },
                        {
                            image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/pop-up-toaster/k/q/v/amber-electric-toaster-930-w-red-hafele-original-imahesbfvcdznenw.jpeg?q=90',
                            title: 'Toasters for your kitchen',
                            description: 'Add more crisp to your breakfast',
                            offer: 'Min 50% off'
                        },
                        {
                            image: 'https://5.imimg.com/data5/FC/GN/HC/SELLER-54637430/mens-sportswear-tracksuit.jpg',
                            title: 'Track Suits for mens',
                            description: 'Comfortable and stylish sports wear',
                            offer: 'Get ₹200 Instant Cashback on UPI'
                        },
                        {
                            image: 'https://gunjfashion.com/cdn/shop/files/beige-sequins-embroidered-party-wear-saree-in-organza_2.jpg?v=1709022790',
                            title: 'Traditional Sarees',
                            description: 'Every Occasion demands a traditional saree',
                            offer: 'Win Scratch Cards upto 5000'
                        }
                    ]
                },
                {
                    items: [
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrnEFjTml8tsIChvuxBxWPpRbRN-mv41P-OIqZkt4JG8OwlKX_vloKz2ypStEq6gvamI&usqp=CAU',
                            title: 'Branded Kadhai on your way',
                            description: 'Shop the best kadhai for your kitchen',
                            offer: 'Buy 2 Get one free'
                        },
                        {
                            image: 'https://varanga.in/cdn/shop/files/A_ea1aab36-ab4e-472d-b50c-bcf1569ebd4b.jpg?v=1707213340',
                            title: 'Shop premium kurta for her',
                            description: 'Wide range of stylish kurta for womens',
                            offer: 'Min 10% off'
                        },
                        {
                            image: 'https://m.media-amazon.com/images/I/81fMDxmn8bL._UY1100_.jpg',
                            title: 'Frocks for Womens',
                            description: 'Fresh and Light collection of frock for womens',
                            offer: 'Min 40% off'
                        },
                        {
                            image: 'https://apnidukaan.com/cdn/shop/files/71JsrWB5KkL._SL1500.jpg?v=1745569533&width=1214',
                            title: 'Washing Machine',
                            description: 'Get fully automatic washing machines',
                            offer: 'Upto 3000 cashback on UPI Transactions'
                        },
                        {
                            image: 'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/2/829mw35-2235.jpg',
                            title: 'Wedding Season Special',
                            description: 'Smart and stylish outfits for men\'s wedding season',
                            offer: 'Min 20% off on all brands'
                        }
                    ]
                }
            ]),

            slides: ref([
                [
                    {
                        image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/007bff/ffffff?text=B",
                            "https://via.placeholder.com/30/28a745/ffffff?text=C"
                        ],
                        discount: "MIN. 45% OFF",
                        title: "Digital Banking"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/dc3545/ffffff?text=S",
                            "https://via.placeholder.com/30/6c757d/ffffff?text=A"
                        ],
                        discount: "UP TO 50% OFF",
                        title: "Secure Transactions"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/ffc107/000000?text=M",
                            "https://via.placeholder.com/30/17a2b8/ffffff?text=B"
                        ],
                        discount: "MIN. 40% OFF",
                        title: "Mobile Banking"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/6610f2/ffffff?text=I",
                            "https://via.placeholder.com/30/20c997/ffffff?text=P"
                        ],
                        discount: "UP TO 55% OFF",
                        title: "Investment Plans"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/fd7e14/ffffff?text=L",
                            "https://via.placeholder.com/30/e83e8c/ffffff?text=F"
                        ],
                        discount: "MIN. 35% OFF",
                        title: "Loan Services"
                    }
                ],
                [
                    {
                        image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/007bff/ffffff?text=C",
                            "https://via.placeholder.com/30/28a745/ffffff?text=C"
                        ],
                        discount: "MIN. 50% OFF",
                        title: "Credit Cards"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/dc3545/ffffff?text=I",
                            "https://via.placeholder.com/30/6c757d/ffffff?text=N"
                        ],
                        discount: "UP TO 45% OFF",
                        title: "Insurance"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/ffc107/000000?text=W",
                            "https://via.placeholder.com/30/17a2b8/ffffff?text=M"
                        ],
                        discount: "MIN. 40% OFF",
                        title: "Wealth Management"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1551833726-c10db7e60e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/6610f2/ffffff?text=O",
                            "https://via.placeholder.com/30/20c997/ffffff?text=P"
                        ],
                        discount: "UP TO 60% OFF",
                        title: "Online Payments"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1551135049-8a33b4273818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/fd7e14/ffffff?text=S",
                            "https://via.placeholder.com/30/e83e8c/ffffff?text=U"
                        ],
                        discount: "MIN. 30% OFF",
                        title: "Customer Support"
                    }
                ],
                [
                    {
                        image: "https://images.unsplash.com/photo-1551833726-5d42e27ee6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/007bff/ffffff?text=B",
                            "https://via.placeholder.com/30/28a745/ffffff?text=B"
                        ],
                        discount: "MIN. 55% OFF",
                        title: "Business Banking"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1551135049-8a33b4273818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/dc3545/ffffff?text=S",
                            "https://via.placeholder.com/30/6c757d/ffffff?text=A"
                        ],
                        discount: "UP TO 50% OFF",
                        title: "Savings Account"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/ffc107/000000?text=F",
                            "https://via.placeholder.com/30/17a2b8/ffffff?text=D"
                        ],
                        discount: "MIN. 45% OFF",
                        title: "Fixed Deposits"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/6610f2/ffffff?text=M",
                            "https://via.placeholder.com/30/20c997/ffffff?text=W"
                        ],
                        discount: "UP TO 65% OFF",
                        title: "Mobile Wallet"
                    },
                    {
                        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
                        logos: [
                            "https://via.placeholder.com/30/fd7e14/ffffff?text=I",
                            "https://via.placeholder.com/30/e83e8c/ffffff?text=A"
                        ],
                        discount: "MIN. 40% OFF",
                        title: "Investment Advice"
                    }
                ]
            ])
        };
    },
    mounted() {
        // create observer once
        this.io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        // if you want the animation only once, unobserve after seen
                        this.io.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.12, // tune when elements should animate
            }
        );

        // observe all .observe elements
        // use nextTick to ensure the template is rendered
        this.$nextTick(() => {
            const els = document.querySelectorAll(".observe");
            els.forEach((el) => this.io.observe(el));
        });

        this.buildSlides();
    },
    methods: {
        buildSlides() {
            const perSlide = 5;
            this.slides = [];
            for (let i = 0; i < this.images.length; i += perSlide) {
                this.slides.push(this.images.slice(i, i + perSlide));
            }
            // If you want exactly 4–5 slides only, you can trim or loop images accordingly
        }
    },
    beforeUnmount() {
        if (this.io) this.io.disconnect();
    },
    computed: {
        stars() {
            const starsArray = []
            const totalStars = this.product.totalStars
            const filledStars = this.product.filledStars

            for (let i = 0; i < totalStars; i++) {
                starsArray.push({
                    class: i < filledStars ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'
                })
            }

            return starsArray
        }
    },
};
</script>

<style>
/* Base responsive styles */
.landing-page {
    overflow-x: hidden;
}

/* Hero section responsive improvements */
@media (max-width: 640px) {
    .hero-section h1 {
        font-size: 1.75rem !important;
    }

    .hero-section p {
        font-size: 0.9rem !important;
    }
}

/* Navbar responsive fixes */
.navbar-toggler {
    border: none !important;
    box-shadow: none !important;
}

.navbar-toggler:focus {
    box-shadow: none !important;
}

.navbar-collapse {
    background: rgba(236, 72, 153, 0.95);
    border-radius: 0.5rem;
    margin-top: 0.5rem;
}

@media (min-width: 768px) {
    .navbar-collapse {
        background: transparent;
        margin-top: 0;
    }
}

/* Card responsive improvements */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.hover-shadow-lg:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Category card responsive fixes */
.category-card {
    min-height: 120px;
    transition: all 0.3s ease;
}

@media (min-width: 640px) {
    .category-card {
        min-height: 140px;
    }
}

@media (min-width: 1024px) {
    .category-card {
        min-height: 160px;
    }
}

/* Product card responsive sizing */
.product-card {
    min-height: 320px;
}

@media (min-width: 640px) {
    .product-card {
        min-height: 360px;
    }
}

@media (min-width: 1024px) {
    .product-card {
        min-height: 400px;
    }
}

/* Marquee responsive improvements */
@media (max-width: 768px) {
    .marquee-item {
        padding: 0.5rem 1rem !important;
        margin: 0 0.5rem !important;
    }

    .bank-logo {
        width: 40px !important;
        height: 40px !important;
    }

    .gradient-start,
    .gradient-end {
        width: 60px !important;
    }
}

/* Carousel responsive controls */
@media (max-width: 767px) {

    .carousel-control-prev,
    .carousel-control-next {
        display: none !important;
    }
}

/* Newsletter form responsive */
.join input {
    min-width: 0;
}

/* Floating shapes responsive sizing */
@media (max-width: 768px) {
    .shape-1 {
        width: 120px !important;
        height: 120px !important;
    }

    .shape-2 {
        width: 90px !important;
        height: 90px !important;
    }

    .shape-3 {
        width: 60px !important;
        height: 60px !important;
    }
}

/* Text truncation and line clamping */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.min-h-\[2\.5rem\] {
    min-height: 2.5rem;
}

.min-h-\[3rem\] {
    min-height: 3rem;
}

.min-h-\[3\.5rem\] {
    min-height: 3.5rem;
}

/* Animation keyframes */
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-400 {
    animation-delay: 0.4s;
}

.delay-600 {
    animation-delay: 0.6s;
}

/* Keep all your existing CSS styles below, they will work with the responsive improvements */
/* ... (all your existing CSS styles remain exactly the same) ...

/* Banking partners section styles */
.banking-partners-section {
    background: radial-gradient(circle at 20% 30%, #fff0f6 0%, #fde4ef 40%, #ffffff 100%);
    padding: 5rem 0;
}

/* Title */
.section-title {
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ec4899, #db2777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Marquee Container */
.marquee-container {
    background: rgba(255, 255, 255, 0.75);
    border-radius: 1.5rem;
    backdrop-filter: blur(10px);
    padding: 1.5rem 0;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(236, 72, 153, 0.1);
}

/* Marquee Animation */
.marquee-wrapper {
    overflow: hidden;
    width: 100%;
}

.marquee-track {
    display: inline-flex;
    white-space: nowrap;
    width: max-content;
    animation: scroll 40s linear infinite;
}

.marquee-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* Each Logo Item */
.marquee-item {
    background: white;
    border-radius: 1rem;
    padding: 0.8rem 2rem;
    margin: 0 1rem;
    box-shadow: 0 4px 12px rgba(236, 72, 153, 0.1);
    transition: all 0.3s ease;
    border: 1px solid rgba(236, 72, 153, 0.15);
    flex-shrink: 0;
}

.marquee-item:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.25);
}

.bank-logo {
    width: 55px;
    height: 55px;
    object-fit: contain;
    background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    border-radius: 12px;
    padding: 8px;
}

.partner-text {
    font-size: 1.1rem;
    letter-spacing: 0.3px;
}

/* Gradient Fade Edges */
.gradient-start,
.gradient-end {
    width: 120px;
    z-index: 3;
    pointer-events: none;
}

.gradient-start {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, transparent 100%);
}

.gradient-end {
    background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, transparent 100%);
}

/* Floating Background Blobs */
.floating-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    filter: blur(30px);
}

.shape-1 {
    width: 200px;
    height: 200px;
    background: #ec4899;
    top: 5%;
    left: 8%;
    animation: float 8s ease-in-out infinite;
}

.shape-2 {
    width: 150px;
    height: 150px;
    background: #db2777;
    bottom: 15%;
    right: 10%;
    animation: float 10s ease-in-out infinite reverse;
}

.shape-3 {
    width: 100px;
    height: 100px;
    background: #f9a8d4;
    top: 60%;
    left: 40%;
    animation: float 12s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Security Badge */
.security-badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: linear-gradient(135deg, #ec4899, #db2777);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0 0 12px 12px;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(236, 72, 153, 0.25);
}

/* Gradient Button */
.btn-gradient {
    background: linear-gradient(135deg, #ec4899, #db2777);
    color: #fff;
    border: none;
    transition: all 0.3s ease;
}

.btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(236, 72, 153, 0.3);
}

/* Custom Colors */
.text-purple {
    color: #8b5cf6 !important;
}

.text-rose {
    color: #f43f5e !important;
}

/* Responsive Tweaks */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .bank-logo {
        width: 45px;
        height: 45px;
    }

    .marquee-item {
        padding: 0.6rem 1rem;
    }

    .shop-by-category {
        background: #f8f9fc;
    }

    .bank-logo {
        width: 45px;
        height: 45px;
        object-fit: contain;
        background: linear-gradient(135deg, #fdf2f8, #fce7f3);
        border-radius: 10px;
        padding: 6px;
    }

    @media (min-width: 768px) {
        .bank-logo {
            width: 55px;
            height: 55px;
            border-radius: 12px;
            padding: 8px;
        }
    }

    /* Gradient Fade Edges */
    .gradient-start,
    .gradient-end {
        width: 80px;
        z-index: 3;
        pointer-events: none;
    }

    @media (min-width: 768px) {

        .gradient-start,
        .gradient-end {
            width: 120px;
        }
    }

    .gradient-start {
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, transparent 100%);
    }

    .gradient-end {
        background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, transparent 100%);
    }

    /* Floating Background Blobs */
    .floating-shape {
        position: absolute;
        border-radius: 50%;
        opacity: 0.15;
        filter: blur(30px);
    }

    .shape-1 {
        width: 150px;
        height: 150px;
        background: #ec4899;
        top: 5%;
        left: 5%;
        animation: float 8s ease-in-out infinite;
    }

    .shape-2 {
        width: 120px;
        height: 120px;
        background: #db2777;
        bottom: 10%;
        right: 8%;
        animation: float 10s ease-in-out infinite reverse;
    }

    .shape-3 {
        width: 80px;
        height: 80px;
        background: #f9a8d4;
        top: 60%;
        left: 40%;
        animation: float 12s ease-in-out infinite;
    }

    @keyframes float {

        0%,
        100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-15px);
        }
    }

    /* Observer animations */
    .observe {
        opacity: 0;
        transform: translateY(24px);
        transition-property: opacity, transform;
        transition-duration: 700ms;
        transition-timing-function: cubic-bezier(.2, .9, .3, 1);
        will-change: opacity, transform;
    }

    .observe.in-view {
        opacity: 1;
        transform: translateY(0);
    }

    /* Small accessibility fallback for reduced motion */
    @media (prefers-reduced-motion: reduce) {

        .observe,
        .observe.in-view,
        /* .marquee-track, */
        .floating-shape {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
            animation: none !important;
        }
    }
}
</style>