<template>
    <header>
        <HeaderView @toggleTheme="toggleTheme" @toggleSearchModal="toggleSearchModal" />
    </header>

    <main>
        <NuxtPage />
        <SearchModal @toggleSearchModal="toggleSearchModal" />
    </main>

    <footer>
        <FooterView />
    </footer>
</template>

<script setup>
onMounted(() => {
  if("theme" in localStorage) {
    if(localStorage.getItem("theme") == "light") {
      document.documentElement.classList.remove("dark");
      document.getElementById("themeToggleBtnIcon").classList.remove("fa-sun-o");
    document.getElementById("themeToggleBtnIcon").classList.add("fa-moon-o");
    } else if(localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
      document.getElementById("themeToggleBtnIcon").classList.remove("fa-moon-o");
    document.getElementById("themeToggleBtnIcon").classList.add("fa-sun-o");
    }
  } else {
    localStorage.setItem("theme", "light");
    document.getElementById("themeToggleBtnIcon").classList.remove("fa-sun-o");
    document.getElementById("themeToggleBtnIcon").classList.add("fa-moon-o");
  }
})

const toggleTheme = () => {
  if(document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.getElementById("themeToggleBtnIcon").classList.remove("fa-sun-o");
    document.getElementById("themeToggleBtnIcon").classList.add("fa-moon-o");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.getElementById("themeToggleBtnIcon").classList.remove("fa-moon-o");
    document.getElementById("themeToggleBtnIcon").classList.add("fa-sun-o");
  }
}

const toggleSearchModal = () => {
    if(document.getElementById("searchBox").classList.contains("hidden")) {
        document.getElementById("searchBox").classList.remove("hidden");
        document.querySelector("body").classList.add("overflow-hidden");
    } else {
        document.getElementById("searchBox").classList.add("hidden");
        document.querySelector("body").classList.remove("overflow-hidden");
    }
}
</script>

<style>

</style>