<template>
        <header class="sticky top-0 z-50 bg-purple-600 p-3 shadow-xl flex flex-row gap-10 w-full">
            <!--- Accordeon button --->
            <button class="inline-block align-middle w-2" onclick='{
                const nav = document.getElementById("nav");
                nav.classList.toggle("hidden");
            }'>
            <svg
                class="fill-current h-8 w-8 text-white m-1 p-1 rounded inline-block align-middle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            </button>
            <router-link to="/dashboard" class="text-2xl p-1 align-middle text-white">Projet IaC</router-link>
        </header>
</template>

<script>
export default {
    name: "Header"
    //compiler options
}
</script>

<style>

</style>
