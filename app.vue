<template>
  <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Head>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
import './assets/css/main.css'

useSeoMeta({
  title: 'Clothing Store',
  ogTitle: 'Clothing Store',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>