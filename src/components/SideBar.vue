<template>
    <div v-if="userObj" class="relative">
        <!-- Hamburger Button -->
        <button @click="toggleSidebar"
            class="p-3 focus:outline-none fixed top-5 left-5 z-50 bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Overlay -->
        <div v-if="isOpen" @click="toggleSidebar" class="fixed inset-0 bg-black bg-opacity-10 transition-opacity z-40">
        </div>

        <div v-if="isLoading" class="flex justify-center items-center h-screen">
            <!-- <clip-loader :loading="isLoading" color="#4CAF50" size="50px"></clip-loader> -->
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
        </div>

        <!-- Sidebar -->
        <transition name="slide">


            <aside v-if="isOpen"
                class="fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-50 flex flex-col py-8 px-4 overflow-y-auto">
                <div class="flex flex-col items-center space-x-3 px-4 py-3 hover:bg-pink-50 rounded-lg transition">
                    <div class="relative">
                        <img :src="userObj.avatar || defaultAvatar" alt="User Avatar"
                            class="w-20 h-20 rounded-full object-cover border-2 border-pink-300 shadow-sm hover:scale-105 transition-transform duration-200" />
                        <!-- Online indicator (optional) -->
                        <!-- <span
                            class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span> -->
                    </div>

                    <div class="flex flex-col">
                        <span class="text-gray-800 font-semibold text-sm">
                            {{ userObj.name || "Guest User" }}
                        </span>
                        <span class="text-gray-500 text-xs">View Profile</span>
                    </div>
                </div>

                <!-- <h2 class="text-2xl font-bold text-gray-800 mb-8 px-4">ShopEase</h2> -->
                <div class="text-2xl font-bold text-pink-500 flex text-center justify-center mb-8">
                    <span><img :src="bagIconpink" alt="" class="m-1"></span>
                    <span>ShopRi</span>
                </div>

                <nav class="flex-1 space-y-3">
                    <router-link to="/cart"
                        class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                        @click="closeSidebar">
                        🛒 <span class="ml-3 font-medium">My Cart</span>
                    </router-link>
                    <router-link to="/history"
                        class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                        @click="closeSidebar">
                        📦 <span class="ml-3 font-medium">Order History</span>
                    </router-link>
                    <router-link to="/category"
                        class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                        @click="closeSidebar">
                        🏷️ <span class="ml-3 font-medium">Categories</span>
                    </router-link>
                    <router-link to="/profile"
                        class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                        @click="closeSidebar">
                        👤<span class="ml-3 font-medium">Profile</span>
                    </router-link>
                    <router-link to="/home"
                        class="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                        @click="closeSidebar">
                        🏡 <span class="ml-3 font-medium">Home</span>
                    </router-link>
                </nav>

                <div class="border-t mt-8 pt-4 px-4 text-sm text-gray-500">
                    <p>&copy; 2025 ShopRi</p>
                    <p>All rights reserved</p>
                </div>

                <button @click="logout"
                    class="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                    Logout
                </button>
            </aside>
        </transition>


    </div>
</template>

<script>
import { useUserData } from '@/localstorage';
import Swal from 'sweetalert2';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import bagIconpink from '@/assets/icons8-shopping-bag-pink.png'


export default {
    name: "SidebarMenu",
    data() {
        return {
            bagIconpink,
            isOpen: false,
            user: '',
            userObj: {},
            isLoading: false,
            defaultAvatar: "https://i.pravatar.cc/150?img=3",
        };

    },
    components: {
        LoopingRhombusesSpinner,
    },
    methods: {
        logout() {
            this.closeSidebar();
            this.isLoading = true; // Start loader

            setTimeout(() => {
                if (this.userObj) {
                    // Logout logic
                    // localStorage.removeItem("token");
                    // localStorage.removeItem("user")
                    this.user.clearUser();
                    this.userObj = null;
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Logged Out Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.$router.push({ name: "land" });
                } else {
                    // Login redirect
                    this.$router.push({ name: "login" });
                }
                this.isLoading = false; // Stop loader after actions
            }, 1500);
        },
        toggleSidebar() {
            this.isOpen = !this.isOpen;

            // 🚫 Disable body scroll when sidebar is open
            if (this.isOpen) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        },
        closeSidebar() {
            this.isOpen = false;
            document.body.classList.remove("no-scroll");
        },
    },
    mounted() {
        this.user = useUserData();
        this.userObj = this.user.getUser();
    },
    beforeUnmount() {
        // Clean up in case user navigates mid-open
        document.body.classList.remove("no-scroll");
    },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* Prevent scroll when sidebar open */
:global(body.no-scroll) {
    overflow: hidden;
}
</style>
