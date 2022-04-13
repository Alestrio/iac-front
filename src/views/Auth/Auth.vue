<template>
  <div class="w-full h-screen md:p-4 flex justify-center items-center">
    <main
      class="w-full md:w-2/6 xl:w-2/6 h-9/10 flex items-center shadow-xl bg-gray-100 rounded-lg font-mono"
    >
      <div class="w-full md:w-3/3 p-5 grid grid-cols-1 space-y-6 text-center">
        <span class="font-bold text-2xl text-purple-500"
          >Projet IaC</span
        >
        <div class="space-y-3">
          <input
            class="w-1/2 p-1 m-1 rounded-md text-purple-500 text-center"
            type="text"
            placeholder="Nom d'utilisateur"
          />
          <input
            class="w-1/2 p-1 m-1 rounded-md text-purple-500 text-center"
            type="password"
            placeholder="Mot de passe"
          />
          <button
            class="w-1/2 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg"
          >
            Connexion
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
};
</script>
<style scoped></style>
