<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      
      <img class="cursor-pointer" src="../../assets/traefik-icon.png" @click="isOpen = true">

      <div
        v-show="isOpen"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl">Nginx</h3>
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-3">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label for="name" class="form-label inline-block mb-0.5 text-black">Conteneur</label>
                </div>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option selected></option>
                    <option value="1">nginx-1</option>
                    <option value="2">nginx-2</option>
                    <option value="3">mongodb-1</option>
                </select>
                </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label for="name" class="form-label inline-block mb-0.5 text-black">Nom de domaine</label>
                </div>
                <input type="text" class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" placeholder="mondomaine.com" />
              </div>
            </div>
            <div class="flex justify-center">
              <i class="fa-solid fa-plus fa fa-2x text-purple-600 hover:text-purple-700 cursor-pointer mb-4"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
