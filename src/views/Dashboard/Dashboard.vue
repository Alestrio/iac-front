<template>
    <div class="w-full flex flex-col gap-2 p-8">
      <div class="w-full">
        <div class="flex justify-between">
          <div class="text-2xl font-semibold ml-2">
            VMs
          </div>
          <div class="flex flex-row">
            <input type="text" name="name" class="border-b-2 border-gray-600 bg-violet-50 outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-nowrap overflow-x-scroll gap-5 p-2 shadow-xl bg-white">
        <div>
          0111111111AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      </div>

      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-12">
        <div class="col-span-2">
          <div class="flex justify-between">
            <div class="text-2xl font-semibold ml-2">
              Réseaux
            </div>
            <div class="flex flex-row">
              <input type="text" name="name" class="border-b-2 border-gray-600 bg-violet-50 outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="flex flex-nowrap overflow-x-scroll gap-5 p-2 shadow-xl bg-white">
            <div>
              0111111111AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
          </div>
        </div>

        <div>
          <div class="flex justify-between">
            <div class="text-2xl font-semibold ml-2">
              Hébergeurs
            </div>
          </div>
          <div class="flex flex-nowrap overflow-x-scroll gap-5 p-2 shadow-xl bg-white">
            <div>
              0111111111AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
          </div>
        </div>
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
