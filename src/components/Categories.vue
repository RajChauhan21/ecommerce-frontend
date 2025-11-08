<template>
    <div class="p-4 sm:p-6 bg-gray-100 min-h-screen sm:pl-[260px]">
        <div class="flex md:flex-row-reverse flex-wrap">
            <router-link to="/home" class="text-blue-600 hover:underline mb-4 inline-block my-5">← Back to
                Home</router-link>

        </div>
        <h1 class="text-4xl font-bold text-center text-blue-600 mb-10">Explore Our Categories</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Clothes -->
            <router-link to="/clothesnew"
                class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6 text-center">
                <img src="https://img.icons8.com/color/128/t-shirt.png" alt="Clothes" class="mx-auto mb-4" />
                <h2 class="text-2xl font-semibold text-gray-800">Clothes</h2>
                <p class="text-gray-600 mt-2">Discover trendy fashion for all seasons.</p>
            </router-link>

            <!-- Household -->
            <router-link to="/householdnew"
                class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6 text-center">
                <img src="https://img.icons8.com/color/128/kitchen.png" alt="Household" class="mx-auto mb-4" />
                <h2 class="text-2xl font-semibold text-gray-800">Household</h2>
                <p class="text-gray-600 mt-2">Essential items to make your home complete.</p>
            </router-link>

            <!-- Home Appliances -->
            <router-link to="/appliancesnew"
                class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6 text-center">
                <img src="https://img.icons8.com/color/128/appliances.png" alt="Appliances" class="mx-auto mb-4" />
                <h2 class="text-2xl font-semibold text-gray-800">Home Appliances</h2>
                <p class="text-gray-600 mt-2">Modern appliances for a smarter lifestyle.</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
// no extra logic yet
</script>
