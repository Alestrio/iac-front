<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <label
        class="form-check-label inline-block underline text-gray-800 cursor-pointer"
        for="flexCheckChecked"
        @click="isOpen = true"
        >Personnalisé</label
      >

      <div
        v-show="isOpen"
        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  TCP
                </label>
              </div>
              <div class="mb-3 w-4/5">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-left text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="name"
                  placeholder="Exemple : 20, 50-60"
                  v-model="tcpPorts"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="form-check float-left mb-3 mr-10 w-1/5 mt-2">
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  UDP
                </label>
              </div>
              <div class="mb-3 w-4/5">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-left text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="name"
                  v-model="udpPorts"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="sendFirewall"
              >
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
        let rule = {
          id:0,
          protocol: "tcp",
          from_ports: [22],
          to_ports: [22],
          source_networks: ["0.0.0.0/0"],
        };
        let rules = []

        if (this.tcpPorts) {
          let r = JSON.parse(JSON.stringify(rule));
          r.protocol = "tcp";
          r.from_ports = this.tcpPorts.split(",").map(Number);
          r.to_ports = this.tcpPorts.split(",").map(Number);
          rules.push(r);
        }
        if (this.udpPorts) {
          let r = JSON.parse(JSON.stringify(rule));
          r.protocol = "udp";
          r.from_ports = this.udpPorts.split(",").map(Number);
          r.to_ports = this.udpPorts.split(",").map(Number);
          rules.push(r);
        }

        for (let i = 0; i < rules.length; i++) {
          rule.id = i;
        }

        this.$emit("send-firewall", rules);
        this.isOpen = false;

      },
    },
  };
</script>
