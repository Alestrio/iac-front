<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      
      <label class="form-check-label inline-block underline text-gray-800 cursor-pointer" for="flexCheckChecked" @click="isOpen = true">Personnalisé</label>

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
            <h3 class="text-2xl">Pare-feu</h3>
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
                <div class="form-check float-left mb-3 mr-10 w-1/5 mt-2">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                   type="checkbox" value="" id="flexCheckDefault"
                   v-model="tcpPorts">
                  <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    TCP
                  </label>
                </div>
                <div class="mb-3 w-4/5">
                    <input type="text" class="form-control block w-full px-3 py-1.5 text-left text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name"  placeholder="Exemple : 20, 50-60"/>
              </div>
            </div>
            <div class="flex justify-center">
                <div class="form-check float-left mb-3 mr-10 w-1/5 mt-2">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                   type="checkbox" value="" id="flexCheckDefault" v-model="udpPorts">
                  <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    UDP
                  </label>
                </div>
                <div class="mb-3 w-4/5">
                    <input type="text" class="form-control block w-full px-3 py-1.5 text-left text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="form-check float-left mb-3 mr-10 w-2/5 mt-2">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                   type="checkbox" value="" id="flexCheckDefault" v-model="protocols">
                  <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    Protocoles
                  </label>
                </div>
                <div class="mb-3 w-3/5">
                    <input type="text" class="form-control block w-full px-3 py-1.5 text-left text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" placeholder="Exemple : ah, sctp"/>
                </div>
            </div>
            <div class="flex justify-center">
              <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="sendFirewall">
                Valider le pare-feu
              </button>
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
  methods: {
    sendFirewall() {
      this.$emit('send-firewall', {
        tcp: this.tcpPorts,
        udp: this.udpPorts,
        protocols: this.protocols,
      });
    },
  },
};
</script>
