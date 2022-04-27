<template>
  <div class="h-full mx-auto">
    <div class="flex justify-center">
      
      <i class="fas fa-edit text-lg ml-2 m-auto align-middle cursor-pointer" @click="isOpen = true"></i>

      <div
        v-show="isOpen"
        class="
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-black bg-opacity-50
          p-4"
      >
        <div class="max-w-2xl h-3/4 overflow-auto p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl">Amazon VPC</h3>
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
          <div class="flex justify-center">
              <div class="form-check float-left mr-10">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="netType" id="netType1">
                <label class="form-check-label inline-block text-black" for="netType1">
                  Nouveau
                </label>
              </div>
              <div class="form-check float-left">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="netType" id="netType2" checked>
                <label class="form-check-label inline-block text-black" for="netType2">
                  Existant
                </label>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="form-check float-left mr-10 mt-8">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="netType" id="netType1">
                <label class="form-check-label inline-block text-black" for="netType1">
                  VPC uniquement
                </label>
              </div>
              <div class="form-check float-left mt-8">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="netType" id="netType2" checked>
                <label class="form-check-label inline-block text-black" for="netType2">
                  VPC et sous-réseaux
                </label>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="form-check mt-2">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="netType" id="netType2" checked>
                <label class="form-check-label inline-block text-black" for="netType2">
                  Automatique
                </label>
              </div>
          </div>
          <div class="mt-3">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label for="name" class="form-label inline-block mb-0.5 text-black">Nom</label>
                </div>
                <input type="text" class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-2 xl:w-96">
                <div class="text-right">
                  <label for="desc" class="form-label inline-block mb-0.5 text-black">Plage d'adresses IP</label>
                </div>
                <input type="text" class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="desc" placeholder="10.0.0.0/16"/>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5">Zone de disponibilité</span>
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <div class="border cursor-pointer border-gray-300">1</div>
            <div class="border cursor-pointer border-gray-300">2</div>
            <div class="border cursor-pointer border-gray-300">3</div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5">Sous-réseaux publics</span>
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5">
            <div class="border cursor-pointer border-gray-300">0</div>
            <div class="border cursor-pointer border-gray-300">2</div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5">Sous-réseaux privés</span>
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <div class="border cursor-pointer border-gray-300">0</div>
            <div class="border cursor-pointer border-gray-300">2</div>
            <div class="border cursor-pointer border-gray-300">4</div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5">Passerelles NAT</span>
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <div class="border cursor-pointer border-gray-300">Aucune</div>
            <div class="border cursor-pointer border-gray-300">Dans une zone</div>
            <div class="border cursor-pointer border-gray-300">Une par zone</div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5">Point de terminaison d'un VPC</span>
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5">
            <div class="border cursor-pointer border-gray-300">Aucune</div>
            <div class="border cursor-pointer border-gray-300">Passerelle S3</div>
          </div>
          <div class="flex justify-center">
            <div class="text-center mb-3">
              <label for="region" class="form-label inline-block text-xl mb-0.5 text-black mt-6">Options DNS</label>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="form-check float-left mr-10">
              <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="routing" id="routing1">
              <label class="form-check-label inline-block text-black" for="netType1">
                Noms d'hôtes DNS
              </label>
            </div>
            <div class="form-check float-left">
              <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="routing" id="routing2" checked>
              <label class="form-check-label inline-block text-black" for="netType2">
                Résolution DNS
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Firewall from "./Firewall.vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: ['network'],
  components: {
      Firewall
  }
};
</script>
