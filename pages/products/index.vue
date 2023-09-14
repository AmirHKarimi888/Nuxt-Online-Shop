<template>
    <ul
        class="max-sm:w-[81%] sm:w-[69%] md:w-[72%] lg:w-[60%] md: mt-[150px] mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 p-4">
        <li @click="setAll"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="all">
            All Products
        </li>
        <li @click="setMF"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="mf">
            Men's Fashion
        </li>
        <li @click="setWF"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="wf">
            Women's Fashion
        </li>
        <li @click="setBS"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="bs">
            Bags and Shoes
        </li>
        <li @click="setJW"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="jw">
            Jewlary and Watches
        </li>
        <li @click="setComputers"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="computers">
            Computers
        </li>
        <li @click="setPT"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="pt">
            Phone and Tablets
        </li>
        <li @click="setHF"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="hf">
            Home and Furniture
        </li>
        <li @click="setTH"
            class="types text-black text-center dark:text-white p-2 border border-gray-600 rounded-xl cursor-pointer grid justify-center items-center"
            id="th">
            Tools and Hardware
        </li>
    </ul>

    <ul v-if="status == 'success' ? true : false"
        class="products mt-[100px] max-sm:w-[81%] sm:w-[69%] md:w-[72%] lg:w-[60%] mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <li v-for="product in categoryProducts?.data.reverse()" :key="product._id"
            class="aspect-square border border-gray-400 dark:text-white dark:border-gray-600 shadow-lg shadow-gray-400 dark:shadow-gray-900 p-4">
            <NuxtLink :to="'/products/' + product?._id">
                <img class="mx-auto w-[100%] aspect-square" :src="'images/' + product._id + '.jpg'" alt="">
                <p class="w-[96%] h-[50px] mt-5">{{ product?.title }}</p>
            </NuxtLink>
        </li>
    </ul>

    <ul v-if="status == 'pending' ? true : false"
        class="products mt-[100px] max-sm:w-[81%] sm:w-[69%] md:w-[72%] lg:w-[60%] mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
</template>

<script setup>
import { url } from '../../api';

const nums = [1, 2, 3, 4, 5, 6];

const { data: products, pending, error, refresh, status } = await useFetch(url + "/products");

const categoryProducts = ref(products);

const setAll = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("all").classList.add("type-active");

    refresh();
}

const setMF = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("mf").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "mens-fashion") {
                    return product;
                }
            })
        })
}

const setWF = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("wf").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "womens-fashion") {
                    return product;
                }
            })
        })
}

const setBS = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("bs").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "bags-and-shoes") {
                    return product;
                }
            })
        })
}

const setJW = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("jw").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "jewlary-and-watches") {
                    return product;
                }
            })
        })
}

const setComputers = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("computers").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "computers") {
                    return product;
                }
            })
        })
}

const setPT = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("pt").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "phone-and-tablets") {
                    return product;
                }
            })
        })
}

const setHF = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("hf").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "home-and-furniture") {
                    return product;
                }
            })
        })
}

const setTH = () => {
    document.querySelectorAll(".types").forEach((type) => {
        type.classList.remove("type-active");
    })
    document.getElementById("th").classList.add("type-active");

    refresh()
        .then(() => {
            categoryProducts.value.data = products.value.data.filter((product) => {
                if (product.category.slug == "tools-and-hardware") {
                    return product;
                }
            })
        })
}
</script>