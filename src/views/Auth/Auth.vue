<template>
  <div>
    <div class="w-full h-screen p-4 flex justify-center items-center">
      <main class="w-full md:w-2/6 xl:w-2/6 h-9/10 flex items-center bg-purple-200 rounded-lg font-mono">
          <div class="w-full sm:w-2/2 md:w-3/3 p-5 grid grid-cols-1 space-y-6">
              <span class="font-bold text-2xl text-purple-500">Access your account</span>
              <div class="space-y-3">
                  <input class="w-full rounded-md text-purple-500" type="text" placeholder="Username">
                  <input class="w-full rounded-md text-purple-500" type="password" placeholder="Password">
                  <button class="w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg">Login</button>
              </div>
          </div>
      </main>
    </div>
  </div>
</template>
<script>

export default {
  components: {

  },
  mounted() {

  },
};
</script>
<style scoped>

</style>
