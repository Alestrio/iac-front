<template>
  <div class="container mx-auto">
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
        "
      >
        <div class="max-w-2xl h-3/4 p-6 overflow-auto bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl">Instance de VM</h3>
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
                  <label for="name" class="form-label inline-block mb-0.5 text-black">Nom</label>
                </div>
                <input v-model="this.gcp_instance.name" type="text" class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label for="region" class="form-label inline-block mb-0.5 text-black">Zone</label>
                </div>
                <select v-model="this.gcp_instance.zone" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option v-for="zone in gcp_zones" :value="zone" :key="zone">{{ zone }}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="text-center mb-3">
                <label for="region" class="form-label inline-block text-xl mb-0.5 text-black">Instance</label>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-1/5">
                <div class="text-right">
                  <label for="region" class="form-label inline-block mb-0.5 text-black">Type</label>
                </div>
                <select v-model="this.gcp_instance.profile" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3 xl:w-4/5">
                <div class="text-right">
                  <label for="region" class="form-label inline-block mb-0.5 text-black">Profil</label>
                </div>
                <select v-model="this.gcp_instance.vmType" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label for="region" class="form-label inline-block mb-0.5 text-black">OS</label>
                </div>
                <select v-model="this.gcp_instance.gcp_machine_image" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option selected></option>
                    <option value="1">Debian 10</option>
                    <option value="2">Debian 11</option>
                    <option value="3">Windows 10</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-center">
                  <label for="region" class="form-label inline-block text-xl mb-0.5 text-black">Stockage</label>
                </div>
              </div>
            </div>
            <div :key="disk.key" v-for="disk in this.gcp_instance.disks" class="flex justify-center">
              <div class="mb-3 xl:w-1/4">
                <div class="text-right">
                  <label for="region" class="form-label inline-block mb-0.5 text-black">Type</label>
                </div>
                <select v-model="disk.diskType" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                    <option selected></option>
                    <option value="1">SSD</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3 xl:w-3/4">
                <div class="text-right">
                  <label for="name" class="form-label inline-block mb-0.5 text-black">Capacité du disque {{ disk. id }} </label>
                </div>
                <input v-model="disk.diskCapacity" type="text" class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none" id="name" />
              </div>
            </div>
            <div class="flex justify-center">
              <i @click='this.gcp_instance.disks.pop()' class="fa-solid fa-minus mr-6 fa fa-2x text-purple-600 hover:text-purple-700 cursor-pointer mb-4"></i>
              <i @click='this.gcp_instance.disks.push({ id: this.gcp_instance.disks.length })' class="fa-solid fa-plus fa fa-2x text-purple-600 hover:text-purple-700 cursor-pointer mb-4"></i>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-center">
                  <label for="region" class="form-label inline-block text-xl mb-0.5 text-black">Services</label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <Nginx :services="this.gcp_instance.services" class="w-10 m-auto" />
              <Traefik :services="this.gcp_instance.services" class="w-10 m-auto" />
              <Git :services="this.gcp_instance.services" class="w-10 m-auto" />
              <Nodejs :services="this.gcp_instance.services" class="w-10 m-auto" />
              <StartupScript :services="this.gcp_instance.services" class="w-10 m-auto" />
            </div>
            <div class="flex justify-center">
              <div class="text-center mb-3 mt-4">
                <label for="region" class="form-label inline-block text-xl mb-0.5 text-black">Pare-feu</label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
              <div>
                <div class="form-check float-left mr-10">
                  <input v-model='this.gcp_instance.ports.http' class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="opened" id="http">
                  <label class="form-check-label inline-block text-gray-800" for="http">
                    HTTP
                  </label>
                </div>
                <div class="form-check float-left">
                  <input v-model='this.gcp_instance.ports.https' class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="opened" id="https">
                  <label class="form-check-label inline-block text-gray-800" for="https">
                    HTTPS
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="text-center mb-3 mt-4">
                <label for="region" class="form-label inline-block text-xl mb-0.5 text-black">Réseau</label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
              <div class="form-check float-left mr-10">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="default" v-model="this.gcp_instance.netType">
                <label class="form-check-label inline-block text-black" for="netType1">
                  Par défaut
                </label>
              </div>
              <div class="form-check float-left">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="custom" v-model="this.gcp_instance.netType">
                <label class="form-check-label inline-block text-black" for="netType2">
                  Personnalisé
                </label>
              </div>
            </div>
            <div v-if="this.gcp_instance.netType == 'custom'">
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div class="text-right">
                    <label for="name" class="form-label inline-block mb-0.5 text-black">Réseau</label>
                  </div>
                  <select v-model="this.gcp_instance.network" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                      <option selected></option>
                      <option value="1">pimahtic-network</option>
                      <option value="2">net</option>
                      <option value="3">work</option>
                  </select>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div class="text-right">
                    <label for="name" class="form-label inline-block mb-0.5 text-black">Sous-réseau</label>
                  </div>
                  <select v-model="this.gcp_instance.subnetwork" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                      <option selected></option>
                      <option value="1">pimahtic-network-one</option>
                      <option value="2">net</option>
                      <option value="3">work</option>
                  </select>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div class="text-right">
                    <label for="name" class="form-label inline-block mb-0.5 text-black">Adresse IP interne principale</label>
                  </div>
                  <select v-model="this.gcp_instance.intAddress" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                      <option selected></option>
                      <option value="1">Éphèmère (automatique)</option>
                      <option value="2">net</option>
                      <option value="3">work</option>
                  </select>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div class="text-right">
                    <label for="name" class="form-label inline-block mb-0.5 text-black">Adresse IP externe</label>
                  </div>
                  <select v-model="this.gcp_instance.extAddress" class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none">
                      <option selected></option>
                      <option value="1">Éphèmère</option>
                      <option value="2">net</option>
                      <option value="3">work</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="text-center mt-4 mb-1">
                <label for="region" class="form-label inline-block mb-0.5 text-black">Niveau de service réseau</label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
              <div class="form-check float-left mr-10">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" v-model="this.gcp_instance.serviceType" value="premium">
                <label class="form-check-label inline-block text-black" for="serviceType1">
                  Premium
                </label>
              </div>
              <div class="form-check float-left">
                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" v-model="this.gcp_instance.serviceType" value="standard">
                <label class="form-check-label inline-block text-black" for="serviceType2">
                  Standard
                </label>
              </div>
            </div>
            <div class="flex justify-center mt-6">
              <button
                class="bg-purple-600 text-white rounded p-2 font-bold"
                @click="sendVm"
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";
import Nodejs from "../Modals/Nodejs.vue";
import Nginx from "../Modals/Nginx.vue";
import Traefik from "../Modals/Traefik.vue";
import Git from "../Modals/Git.vue";
import StartupScript from "../Modals/StartupScript.vue";

export default {
  data() {
    return {
      isOpen: false,
      nginxAdd: false,
      traefikAdd: false,
      gitAdd: false,
      nodeAdd: false,
      startupScriptAdd: false,
      gcp_zones: []
    };
  },
  props: ["instance"],
  components: {
      //Nodejs,
      //Nginx,
      //Traefik,
      //Git,
      //StartupScript
  },
  setup() {
    const gcp_instance = reactive({
        id: '',
        name: '',
        providers: ['gcp'],
        profile: '',
        vmType: '',
        cpu: '',
        ports: {"http": false, "https": false},
        gcp_machine_image: '',
        disks: [],
        netType: '',
        network: '',
        subnetwork: '',
        intAddress: '',
        extAddress: '',
        serviceType: ''
    })
    return {
      gcp_instance
    }
  },
  mounted() {
      let api_addr = import.meta.env.VITE_APP_API_ADDR;
      axios.get(api_addr + "/settings/zones/gcp").then((response) => {
        this.gcp_zones = response.data.zones;
        for (let i = 0; i < this.gcp_zones.length; i++) {
          if (this.gcp_zones[i] === this.selected_gcp_zone) {
            this.gcp_zones.splice(i, 1);
            break;
          }
        }
      });
      axios.get(api_addr + "/settings/zone/gcp").then((response) => {
        this.gcp_instance.zone = response.data.zone;
      });
      axios.get(api_addr + "/settings/zones/gcp").then((response) => {
        this.gcp_zones = response.data.zones;
        for (let i = 0; i < this.gcp_zones.length; i++) {
          if (this.gcp_zones[i] === this.selected_gcp_zone) {
            this.gcp_zones.splice(i, 1);
            break;
          }
        }
      });
  },
  methods: {
    sendVm() {
      this.$emit("send-instance", this.gcp_instance);
      this.isOpen = false;
    }
  }
};
</script>
