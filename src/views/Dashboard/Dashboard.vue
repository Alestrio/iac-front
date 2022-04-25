<template>
    <div class="w-full gap-2 p-8">
      <div class="w-full mb-2">
        <div class="flex justify-between">
          <div class="text-2xl font-semibold ml-2">
            VMs
          </div>
          <div class="flex flex-row">
            <input type="text" name="name" class="border-b-2 border-gray-600 focus:border-purple-600 border-l-0 border-r-0 border-t-0 bg-violet-50 outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto gap-5 p-2 shadow-xl bg-white">
        <div class="gap-1 mt-2">
          <div class="flex-row">
            <img class="w-1/2 m-auto" src="../../assets/vm-icon.png">
          </div>
          <div class="flex-row text-center">
            <span class="text-xl font-semibold">
              iac-vm-1
            </span>
          </div>
          <div class="flex-row text-center">
            <span class="text-xl font-semibold">
              europe-west-1b
            </span>
          </div>
          <div class="flex-row text-center">
            <span class="text-lg">
              2 vCPUs
            </span>
            <span class="text-lg">
              8GO RAM
            </span>
          </div>
          <div class="flex-row text-center">
            <span class="text-lg">
              3 disques
            </span>
            <span class="text-lg">
              Debian
            </span>
          </div>
        </div>
      </div>

      <div class="md:grid md:grid-flow-row-dense grid-cols-4 mt-12">
        <div class="md:col-span-3 mb-12">
          <div class="flex justify-between mb-2">
            <div class="text-2xl font-semibold ml-2">
              Réseaux
            </div>
            <div class="flex flex-row">
              <input type="text" name="name" class="border-b-2 focus:border-purple-600 border-l-0 border-r-0 border-t-0 border-gray-600 bg-violet-50 outline-0 outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="flex flex-nowrap overflow-x-auto gap-5 p-2 shadow-xl bg-white">
            <div class="grid grid-cols-2 gap-1 mt-2">
              <div>
                <img class="w-1/2 m-auto" src="../../assets/network-icon.png">
              </div>
              <div>
                <span class="md:text-xl text-sm text-left font-semibold block">
                  iac-net-1
                </span>
                <span class="md:text-base text-xs text-left font-normal block">
                  europe-west-1
                </span>
                <span class="md:text-xl text-sm md:mt-6 text-left font-semibold block ">
                  10.128.0.0/24
                </span>
                <span class="md:text-xl text-sm md:mt-6 text-left font-normal block ">
                  Description courte du réseau...
                </span>
                <span class="md:text-xl text-sm md:mt-6 text-left font-semibold block ">
                  Règles de pare feu
                </span>
                <span class="md:text-base text-xs text-left font-normal block">
                  Routage mondial | régional
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="md:ml-8">
          <div class="flex justify-between mb-2">
            <div class="text-2xl font-semibold ml-2">
              Hébergeurs
            </div>
          </div>
          <div class="grid grid-cols-4 p-2 gap-4 shadow-xl bg-white">
            <div>
              <img src="../../assets/gcp-icon.png">
            </div>
            <span class="col-span-3 text-xl">
              Google Cloud Platform
            </span>
            <div>
              <img src="../../assets/aws-icon.png">
            </div>
            <span class="col-span-3 text-xl">
              Amazon Web Services
            </span>
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
