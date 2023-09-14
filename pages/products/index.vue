<template>
    <ul class="products mt-[200px] w-[60%] mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <li v-for="product in products.data" :key="product._id" class="aspect-square border border-gray-300 dark:text-white dark:border-gray-600 shadow-lg shadow-gray-400 dark:shadow-gray-900 p-6">
            <NuxtLink :to="'/products/' + product?._id">
                <img class="mx-auto w-[100%] aspect-square" :src="'images/' + product._id + '.jpg'" alt="">
                <p class="w-[96%] h-[50px] my-6">{{ product?.title }}</p>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { url } from '../../api';

const { data: products, pending, error, refresh } = await useFetch(url + "/products",{ server: false })


</script>