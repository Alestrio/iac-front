<template>
  <div class="h-screen">
    <Header />
    <div class="w-full flex flex-col md:flex-row h-full">
      <div class="w-full md:w-1/5 md:h-full shadow-xl">
        <nav class="flex flex-col gap-2 p-5">
          <router-link to="/dashboard" class="text-xl hover:bg-gray-200 rounded p-1">Dashboard</router-link>
          <router-link to="/editeur" class="text-xl hover:bg-gray-200 rounded p-1">Editeur</router-link>
          <router-link to="/auth" class="text-xl hover:bg-gray-200 rounded p-1">Auth</router-link>
        </nav>
      </div>

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
