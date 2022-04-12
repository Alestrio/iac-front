<template>
        <div class="w-full md:w-1/6 md:h-full shadow-xl" id='nav'>
        <nav class="flex flex-col gap-2 p-5">
          <router-link to="/dashboard" class="text-xl hover:bg-gray-200 rounded p-1">Dashboard</router-link>
          <router-link to="/editeur" class="text-xl hover:bg-gray-200 rounded p-1">Editeur</router-link>
          <router-link to="/logs" class="text-xl hover:bg-gray-200 rounded p-1">Logs</router-link>
        </nav>
      </div>
</template>

<script>
export default {
    name: "Sidenav"
    //compiler options
}
</script>

<style>

</style>
