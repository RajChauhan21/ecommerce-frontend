<template>
    <div class="home-page font-sans text-gray-900">
        <!-- Navbar -->
        <nav class="bg-white shadow-md py-3 px-4 sm:py-4 sm:px-6 flex justify-between lg:justify-end items-center">
            <!-- Mobile menu button (optional) -->
            <!-- <button class="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button> -->

            <div class="flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-6 space-y-2">
                <router-link to="/history"
                    class="flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 hover:text-pink-600 text-gray-700 text-sm sm:text-base font-semibold lg:font-bold"
                    active-class="bg-pink-100 text-pink-600 font-semibold"
                    exact-active-class="bg-pink-100 text-pink-600 font-semibold">
                    📦 <span class="ml-2 lg:ml-3">History</span>
                </router-link>

                <router-link to="/category"
                    class="flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 hover:text-pink-600 text-gray-700 text-sm sm:text-base font-semibold lg:font-bold"
                    active-class="bg-pink-100 text-pink-600 font-semibold">
                    🏷️ <span class="ml-2 lg:ml-3">Shop</span>
                </router-link>

                <router-link to="/profile"
                    class="flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 hover:text-pink-600 text-gray-700 text-sm sm:text-base font-semibold lg:font-bold"
                    active-class="bg-pink-100 text-pink-600 font-semibold">
                    👤 <span class="ml-2 lg:ml-3">Profile</span>
                </router-link>

                <div class="relative mt-2 lg:mt-0">
                    <img :src="bagIcon" @click="goToCart" alt="Cart" class="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                    <span
                        class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs">
                        {{ cartCount || 0 }}
                    </span>
                </div>
            </div>
        </nav>

        <!-- Loading Spinner -->
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
        </div>

        <!-- Welcome Section -->
        <section class="bg-gradient-to-br from-pink-50 to-purple-50 py-12 sm:py-16 lg:py-20 text-center relative overflow-hidden">
            <!-- Decorative elements -->
            <div
                class="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-pink-200 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16 opacity-40">
            </div>
            <div
                class="absolute bottom-0 right-0 w-24 h-24 sm:w-48 sm:h-48 bg-purple-200 rounded-full translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24 opacity-40">
            </div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-3xl mx-auto">
                    <h1 v-if="user.name" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
                        Welcome to
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 relative">
                            <img :src="bagIconpink" alt="Shopping Bag"
                                class="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-1 sm:mx-2 transform transition-transform hover:scale-110">
                            ShopRi
                        </span>
                        <div class="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 animate-pulse">
                            {{ user.name }}!
                        </div>
                    </h1>

                    <h1 v-else class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
                        Welcome to
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                            <img :src="bagIconpink" alt="Shopping Bag"
                                class="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-1 sm:mx-2 transform transition-transform hover:scale-110">
                            ShopRi
                        </span>
                        <div class="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600">
                            User!
                        </div>
                    </h1>

                    <!-- Description -->
                    <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                        Discover amazing products and exclusive deals crafted especially for you.
                        Start your shopping journey today! 🛍️
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8">
                        <router-link to="/category"
                            class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                            Start Shopping
                        </router-link>
                        <button
                            class="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                            Explore Deals
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cards Section -->
        <div class="container mx-auto px-4 sm:px-6 my-8 sm:my-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-9 text-gray-600">Best Deals for You</h2>

            <div class="card bg-dark text-white border-0 overflow-hidden shadow transition-all rounded-lg mx-auto max-w-4xl"
                style="transition: all 0.3s ease;">
                <img src="https://www.lg.com/content/dam/lge/in/migration/offers/images/tp_main-up.jpg"
                    class="card-img transition-all w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                    style="transition: all 0.3s ease;" alt="LG Deals">
                <div class="card-img-overlay d-flex flex-column justify-content-end p-3 sm:p-4"
                    style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)">
                    <h5 class="card-title fw-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2">
                        Grab the <strike>Best</strike> Beast Deals from LG :)
                    </h5>
                    <p class="card-text mb-2 sm:mb-3 opacity-0 transition-all text-sm sm:text-base" 
                       style="transition: all 0.3s ease;">
                        Don't miss out on these amazing offers!
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <router-link to="/appliancesnew" 
                                   class="btn btn-outline-light btn-sm opacity-0 text-xs sm:text-sm">
                            View More
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Special Offers Section -->
        <div class="container mx-auto px-4 sm:px-6 my-8 sm:my-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-gray-700">This Week Special Offer's</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div v-for="(card, index) in cards" :key="index"
                    class="card bg-dark text-white custom-card rounded-xl overflow-hidden">
                    <img :src="card.image" class="card-img w-full h-48 sm:h-56 md:h-64 object-cover" :alt="card.title">
                    <div class="card-img-overlay d-flex flex-column justify-content-end p-3 sm:p-4 overlay-content">
                        <h5 class="card-title text-sm sm:text-base md:text-lg font-semibold mb-1">{{ card.title }}</h5>
                        <p class="card-text text-xs sm:text-sm mb-2">{{ card.description }}</p>
                        <p class="card-text text-xs"><small>{{ card.updated }}</small></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Carousel Section -->
        <section class="hero-carousel-section px-4 sm:px-6 my-8 sm:my-12">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-gray-500">Checkout some limited offers</h2>

            <div id="carouselExampleCaptions" class="carousel slide hero-carousel shadow-lg rounded-xl overflow-hidden" 
                 data-bs-ride="carousel" data-bs-interval="4000">
                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button v-for="(slide, index) in slides" :key="index" type="button"
                        data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index"
                        :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : undefined"
                        :aria-label="`Slide ${index + 1}`"></button>
                </div>

                <!-- Slides -->
                <div class="carousel-inner">
                    <div v-for="(slide, index) in slides" :key="index"
                        :class="['carousel-item', { active: index === 0 }]">
                        <img :src="slide.image" class="d-block w-100 hero-img object-cover" :alt="slide.alt" />
                    </div>
                </div>

                <!-- Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="py-12 sm:py-16 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6">
                <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Recommended for You</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div v-for="(product, i) in products" :key="product.id"
                        class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                        <img :src="product.image" :alt="product.name"
                            class="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-110" />
                        <div class="p-4 sm:p-6 text-center">
                            <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ product.name }}</h3>
                            <p class="text-gray-600 text-sm sm:text-base mb-4">{{ product.desc }}</p>
                            <router-link to="/category"
                                class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition text-sm sm:text-base inline-block">
                                See more
                            </router-link>
                        </div>
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

<script>
import bagIcon from '@/assets/icons8-shopping-bag-30.png'
import bagIconpink from '@/assets/icons8-shopping-bag-pink.png'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import { getCartItems } from '@/service/api';
import Swal from 'sweetalert2';
import { useUserData } from '@/localstorage';

export default {
    name: 'LoggedInHome',
    components: {
        ClipLoader, LoopingRhombusesSpinner
    },
    data() {
        return {
            user: '',
            defaultAvatar: "https://i.pravatar.cc/150?img=3",
            cartCount: '',
            slides: [
                {
                    image: "https://techaeris.com/wp-content/uploads/2024/01/Hisense-ULED-TV-Mini-LED-hero.jpg",
                    alt: "Smart TV Image",
                    title: "Smart Entertainment at Home",
                    desc: "Explore the latest range of 4K Smart TVs for immersive viewing.",
                },
                {
                    image: "https://www.lg.com/content/dam/channel/wcms/in/images/about-lg/press-release/REF-SBS---Because-Nothing-Else-Can-Match_Table-Top_2x1-Ratio-01.jpg",
                    alt: "Fridge Image",
                    title: "Keep It Fresh, Keep It Cool",
                    desc: "Upgrade your kitchen with energy-efficient smart refrigerators.",
                },
                {
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/May24/latv-BAU-main-PC-1500XH.jpg",
                    alt: "Oven Image",
                    title: "Bake with Perfection",
                    desc: "Shop premium ovens and microwaves for the modern home.",
                },
            ],
            products: [
                { id: 1, name: 'Trendy Sneakers', desc: 'Stylish everyday comfort', image: 'https://hips.hearstapps.com/hmg-prod/images/index-denim-64495f26d4e9a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=640:*' },
                { id: 2, name: 'Classic Watch', desc: 'Luxury and precision', image: 'https://images-cdn.ubuy.co.in/669c05f6d13b6c689427a096-led-tv-stand-modern-entertainment-center.jpg' },
                { id: 3, name: 'Designer Bag', desc: 'Elegant and spacious', image: 'https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg' },
            ],
            bagIcon,
            bagIconpink,
            isLoading: false,
            useUser: useUserData(),
            cards: [
                {
                    image: "https://images.samsung.com/is/image/samsung/p6pim/in/feature/165516277/in-feature--542989115?$720_N_JPG$",
                    title: "Samsung's Next Gen Fridges",
                    description: "High-performance fridges with sleek design.",
                    updated: "Last updated 5 mins ago"
                },
                {
                    image: "https://d2ki7eiqd260sq.cloudfront.net/EBO-microsite-Mobile-_-525x5207e9d01ae-2a68-4f4c-832c-6ca9507d6ab6.png",
                    title: "Appliances from godrej",
                    description: "Cool and luxurious appliances.",
                    updated: "Last updated 10 mins ago"
                },
                {
                    image: "https://img.global.news.samsung.com/global/wp-content/uploads/2024/09/Samsung-TVs-and-Displays-1-in-TVs-and-Home-Appliances-by-ACSI%C2%AE_dl1.jpg",
                    title: "Best Deals on TV's",
                    description: "Classic model with modern engineering.",
                    updated: "Last updated 20 mins ago"
                },
                {
                    image: "https://www.lg.com/content/dam/channel/wcms/in/2025_ms_lg-com/category-banner/TV-Soundbar/gp1/features/category/Main_Mobile_720x960-px--opt-02-copy-4-1.jpg",
                    title: "Combo Offers",
                    description: "Luxury Offers with state-of-the-art features.",
                    updated: "Last updated 30 mins ago"
                }
            ]
        }
    },
    methods: {
        goToCart() {
            this.$router.push({ name: "cart" });
        },
        async getCartsCount() {
            try {
                const response = await getCartItems(this.user)
                this.cartCount = response.data.length
            } catch (error) {
                console.error("Error fetching cart count:", error);
            }
        },
        logout() {
            this.isLoading = true;
            setTimeout(() => {
                if (this.user) {
                    this.useUser.clearUser();
                    this.user = null;
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Logged Out Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.$router.push({ name: "land" });
                } else {
                    this.$router.push({ name: "login" });
                }
                this.isLoading = false;
            }, 1500);
        },
    },
    mounted() {
        this.user = this.useUser.getUser();
        console.log(this.user)
        this.getCartsCount();
    }
}
</script>

<style scoped>
/* Responsive carousel fixes */
.hero-carousel-section {
    position: relative;
    overflow: hidden;
    background-color: #f8f9fa;
}

.hero-img {
    height: 40vh;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.85);
    transition: transform 1.5s ease;
}

@media (min-width: 640px) {
    .hero-img {
        height: 50vh;
    }
}

@media (min-width: 768px) {
    .hero-img {
        height: 60vh;
    }
}

@media (min-width: 1024px) {
    .hero-img {
        height: 70vh;
    }
}

/* Card hover effects */
.card:hover img {
    transform: scale(1.05);
}

.card:hover .card-text,
.card:hover .btn {
    opacity: 1 !important;
}

/* Custom card styling */
.custom-card {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.custom-card .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.custom-card .card-img-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
    padding: 1rem;
    border-radius: 1rem;
}

.custom-card .card-title {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.custom-card .card-text {
    font-size: 0.875rem;
    line-height: 1.4;
}

.custom-card .card-text small {
    color: rgba(255, 255, 255, 0.7);
}

/* Responsive text sizes */
@media (max-width: 640px) {
    .custom-card .card-title {
        font-size: 1rem;
    }
    
    .custom-card .card-text {
        font-size: 0.75rem;
    }
}

/* Carousel indicators */
.carousel-indicators [data-bs-target] {
    background-color: rgba(255, 255, 255, 0.7);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 4px;
}

.carousel-indicators .active {
    background-color: #fbbf24;
}

/* Mobile navigation improvements */
@media (max-width: 1023px) {
    nav .flex-col {
        width: 100%;
        align-items: flex-end;
    }
}

/* Ensure proper spacing on mobile */
.container {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 640px) {
    .container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}
</style>