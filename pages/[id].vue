<template>
    <div class="home">
        <ul v-if="status == 'success' ? true : false"
            class="products mt-[200px] max-sm:w-[81%] sm:w-[69%] md:w-[72%] lg:w-[60%] mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <li v-for="product in categoryProducts?.data.slice(paginationStartId, paginationFinishId).reverse()"
                :key="product._id"
                class="aspect-square border border-gray-400 dark:text-white dark:border-gray-600 shadow-lg shadow-gray-400 dark:shadow-gray-900 p-4">
                <NuxtLink :to="'/products/' + product?._id">
                    <img class="mx-auto w-[100%] aspect-square" :src="'images/' + product._id + '.jpg'" alt="">
                    <p class="w-[96%] h-[50px] mt-5">{{ product?.title }}</p>
                </NuxtLink>
            </li>
        </ul>

        <ul v-if="status == 'pending' ? true : false"
            class="products mt-[200px] max-sm:w-[81%] sm:w-[69%] md:w-[72%] lg:w-[60%] mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <li role="status" v-for="num in nums" :key="num"
                class="p-4 border border-gray-400 animate-pulse md:p-6 dark:border-gray-600 shadow-lg shadow-gray-400 dark:shadow-gray-900">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path
                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <span class="sr-only">Loading...</span>
            </li>
        </ul>

        <ul class="w-36 mt-[100px] mx-auto dark:text-white text-center grid grid-cols-3">
            <li v-if="parseInt(id) - 1 <= 0 ? false : true" class="w-12 h-12 border border-gray-400 mx-auto grid justify-center items-center"><NuxtLink :to="`/${parseInt(id) - 1}`">{{ parseInt(id) - 1 }}</NuxtLink></li>
            <li class="w-12 h-12 border border-gray-400 mx-auto grid justify-center items-center"><NuxtLink :to="'/' + parseInt(id)">{{ parseInt(id) }}</NuxtLink></li>
            <li v-if="((-6) * parseInt(id)) + 20 < 0 ? false : true" class="w-12 h-12 border border-gray-400 mx-auto grid justify-center items-center"><NuxtLink :to="`/${parseInt(id) + 1}`">{{ parseInt(id) + 1 }}</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
const route = useRoute();

const { id } = route.params;

const paginationStartId = ref(((-6) * parseInt(id)) + 20);
const paginationFinishId = ref(((-6) * parseInt(id)) + 26);

if(paginationStartId.value > 0) {
    paginationStartId.value = ((-6) * parseInt(id)) + 20;
} else {
    paginationStartId.value = 0;
}

if(paginationFinishId.value < 0) {
    paginationFinishId.value = 0;
}

import { url } from '../api';

const nums = [1, 2, 3, 4, 5, 6];

const { data: products, pending, error, refresh, status } = await useFetch(url + "/products", { server: false });

const categoryProducts = ref(products);
</script>