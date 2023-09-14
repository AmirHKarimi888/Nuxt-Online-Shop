<template>
    <nav class="w-full p-4 border-b border-gray-400 shadow-lg flex lg:gap-[36%] md:gap-[33%] sm:gap-[27%] max-sm:gap-[18%] grid-cols-3 justify-center items-center dark:bg-[#000000] dark:text-white dark:border-gray-600">
        <button @click="emit('toggleTheme')">
            <i id="themeToggleBtnIcon" class="fa"></i>
        </button>
        <ul class="flex justify-center items-center gap-5">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
            <!-- <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </li> -->
        </ul>
        <button @click="emit('toggleSearchModal')">
            <i id="searchBtnIcon" class="fa fa-search"></i>
        </button>
    </nav>

</template>

<script setup>
const emit = defineEmits(["toggleTheme", "toggleSearchModal"]);
</script>
