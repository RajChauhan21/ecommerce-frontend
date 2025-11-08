<template>
    <div class="container min-h-screen bg-gray-50">
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-indigo-600">HomeStyle</span>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#" class="text-gray-700 hover:text-indigo-600">Home</a>
                        <a href="#" class="text-gray-700 hover:text-indigo-600">Products</a>
                        <a href="#" class="text-gray-700 hover:text-indigo-600">About</a>
                        <a href="#" class="text-gray-700 hover:text-indigo-600">Contact</a>
                        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Transform Your Home with Style</h1>
                        <p class="text-xl mb-8">Discover premium household items, fashionable clothes, and
                            state-of-the-art appliances for your home.</p>
                        <div class="flex space-x-4">
                            <button
                                class="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                                Shop Collection
                            </button>
                            <button
                                class="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="Modern living room" class="rounded-lg shadow-xl">
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Household -->
                    <div class="relative group overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="Household items"
                            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div class="text-center text-white">
                                <h3 class="text-2xl font-bold mb-2">Household</h3>
                                <button class="px-4 py-2 bg-white text-indigo-600 rounded-md font-semibold">Shop
                                    Now</button>
                            </div>
                        </div>
                    </div>

                    <!-- Clothes -->
                    <div class="relative group overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="Clothes"
                            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div class="text-center text-white">
                                <h3 class="text-2xl font-bold mb-2">Clothing</h3>
                                <button class="px-4 py-2 bg-white text-indigo-600 rounded-md font-semibold">Shop
                                    Now</button>
                            </div>
                        </div>
                    </div>

                    <!-- Appliances -->
                    <div class="relative group overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="Home appliances"
                            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div class="text-center text-white">
                                <h3 class="text-2xl font-bold mb-2">Appliances</h3>
                                <button class="px-4 py-2 bg-white text-indigo-600 rounded-md font-semibold">Shop
                                    Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="py-16 bg-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="product in featuredProducts" :key="product.id"
                        class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
                            <p class="text-gray-600 mb-4">{{ product.description }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-indigo-600 font-bold">${{ product.price }}</span>
                                <button
                                    class="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="testimonial in testimonials" :key="testimonial.id"
                        class="bg-gray-50 p-6 rounded-lg shadow">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                                {{ testimonial.initials }}
                            </div>
                            <div class="ml-4">
                                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                                <p class="text-gray-600 text-sm">{{ testimonial.location }}</p>
                            </div>
                        </div>
                        <p class="text-gray-700">"{{ testimonial.content }}"</p>
                        <div class="flex mt-4">
                            <span v-for="star in 5" :key="star" class="text-yellow-400">★</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="py-16 bg-indigo-600 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
                <p class="text-xl mb-8">Subscribe to our newsletter for new products, promotions and special offers.</p>
                <div class="max-w-md mx-auto flex">
                    <input type="email" placeholder="Your email address"
                        class="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none">
                    <button
                        class="bg-indigo-800 px-6 py-3 rounded-r-md font-semibold hover:bg-indigo-900">Subscribe</button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">HomeStyle</h3>
                        <p class="text-gray-400">Your one-stop shop for household items, clothing, and appliances.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Shop</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Household</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Clothing</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Appliances</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">New Arrivals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Company</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Stores</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Contact</h4>
                        <address class="text-gray-400 not-italic">
                            123 Shopping Street<br>
                            Retail City, RC 10001<br>
                            (555) 123-4567<br>
                            info@homestyle.com
                        </address>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2023 HomeStyle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'StoreLandingPage',
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    name: "Modern Coffee Maker",
                    description: "Brew perfect coffee every morning",
                    price: 89.99,
                    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: 2,
                    name: "Cotton T-Shirt",
                    description: "100% premium cotton comfort",
                    price: 24.99,
                    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: 3,
                    name: "Smart Vacuum Cleaner",
                    description: "Effortless cleaning with smart features",
                    price: 249.99,
                    image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: 4,
                    name: "Ceramic Dinner Set",
                    description: "Elegant dining for 4 people",
                    price: 79.99,
                    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    initials: "SJ",
                    location: "New York, NY",
                    content: "The quality of their household items is exceptional. I've been shopping here for years and have never been disappointed."
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    initials: "MC",
                    location: "San Francisco, CA",
                    content: "Their clothing line combines style with comfort perfectly. The customer service is also top-notch!"
                },
                {
                    id: 3,
                    name: "Emma Rodriguez",
                    initials: "ER",
                    location: "Miami, FL",
                    content: "I purchased a new refrigerator from their appliance section, and it has transformed my kitchen. Great selection and prices!"
                }
            ]
        }
    }
}
</script>

<style scoped>
/* Custom styles can be added here if needed */
.container{
    width: 100%;
    margin: 0%;
}
</style>