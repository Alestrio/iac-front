<template>
  <div v-if="route.path !== '/'">
    <Nav />
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
  import Nav from "./components/Nav.vue";

  import { useRoute } from "vue-router";

  export default {
    name: "App",
    component: {
      Nav
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
  padding: 2rem;
  font-weight: normal;
  
}
</style>
