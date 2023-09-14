<template>
    <div class="home">
        <Latest />
        <ul class="w-60 mt-[100px] mx-auto text-center grid grid-cols-1">
            <NuxtLink to="/1">            <button @click="search" type="button"
                    class=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start Discovering Our Products</button></NuxtLink>
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
</script>