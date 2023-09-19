<template>
    <div class="mt-[200px] lg:w-[60%] md:w-[70%] sm:w-[80%] max-sm:w-[87%] mx-auto border border-gray-400 p-6 shadow-lg shadow-gray-300 dark:shadow-gray-900 dark:text-white">
        <img :src="'/images/' + product._id + '.jpg'" alt="" class="w-[90%] aspect-square mx-auto my-5">
        <ul class="grid grid-cols-1 text-center gap-1">
            <li class="">{{ product.title }}</li>
            <li class="">Price : {{ product.price }} $</li>
        </ul>
    </div>
</template>

<script setup>
import { url } from '~/api';

const { id } = useRoute().params;

const products = ref([]);
const product = ref({});

const { data, pending, error, refresh, status } = await useFetch(url + "/products")

products.value = data.value.data;

products.value.filter((p) => {
    if(p._id == id) {
        product.value = p;
    }
})
</script>