<template>
    <div>
        <ul>
            <li v-for="d in data.data">
                {{ d.title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Action, url } from "../api/index";

const { data } = await useFetch(url + "/products")

</script>