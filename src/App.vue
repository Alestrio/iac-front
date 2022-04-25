<template>
  <div class="h-screen">
    <Header v-if="route.path !== '/'" />
    <div class="w-full flex flex-col md:flex-row h-full">
      <div v-if="route.path !== '/'" class="bg-white z-50 fixed w-full md:w-1/6 md:h-full shadow-xl hidden" id='nav'>
        <nav class="flex flex-col gap-2 p-5">
          <div class="flex flex-row">
            <router-link to="/dashboard" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> </svg>
              Dashboard
            </router-link>
          </div>
          <div class="flex flex-row">
            <router-link to="/editeur" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> </svg>
              Editeur
            </router-link>
          </div>
          <div class="flex flex-row">
            <router-link to="/logs" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>
              Logs
            </router-link>
          </div>
        </nav>
      </div>

      <div class="w-full h-full p-4 flex justify-center bg-violet-50">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  import { useRoute } from "vue-router";

  export default {
    name: "App",
    component: {
      Header
    },
    setup() {
      const route = useRoute();
      return { route };
    }
  }
</script>

<style>
#app {
  margin: 0 auto;
  font-weight: normal;
}
</style>
