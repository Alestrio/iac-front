<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <i
        class="fas fa-edit text-lg ml-2 m-auto align-middle cursor-pointer"
        @click="isOpen = true"
      ></i>

      <div
        v-show="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div
          class="max-w-2xl h-3/4 p-6 overflow-auto bg-white rounded-md shadow-xl"
        >
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
                  <label
                    for="name"
                    class="form-label inline-block mb-0.5 text-black"
                    >Nom</label
                  >
                </div>
                <input
                  v-model="this.sample_instance.name"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="name"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="region"
                    class="form-label inline-block mb-0.5 text-black"
                    >Zone</label
                  >
                </div>
                <select
                  v-model="this.sample_instance.zone"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                >
                  <option v-for="zone in gcp_zones" :value="zone" :key="zone">
                    {{ zone }}
                  </option>
                </select>
              </div>
            </div>
            <hr class="my-4" />
            <div class="flex justify-center">
              <div class="text-center">
                <label
                  for="region"
                  class="form-label inline-block text-xl mb-0.5 text-black"
                  >Général</label
                >
              </div>
            </div>
            <div class="mb-3 xl:w-full">
              <div class="text-right">
                <label
                  for="region"
                  class="form-label inline-block mb-0.5 text-black"
                  >Profil</label
                >
                <v-select
                  :options="this.machine_types"
                  class="w-full"
                  v-model="this.sample_instance.type"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="text-right">
                <label
                  for="region"
                  class="form-label inline-block mb-0.5 text-black"
                  >OS</label
                >
              </div>
              <v-select
                :options="this.machine_images"
                :label="name"
                :reduce="
                  (option) => {
                    // if item is dictonary, return only the value
                    if (typeof option === 'object') {
                      return option.id;
                    }
                    return option;
                  }
                "
                class="w-full"
                v-model="this.sample_instance.machine_image"
              ></v-select>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="text-center">
                <label
                  for="region"
                  class="form-label inline-block text-xl mb-0.5 text-black"
                  >Stockage</label
                >
              </div>
            </div>
          </div>
          <div
            :key="disk.key"
            v-for="disk in this.sample_instance.disks"
            class="flex justify-center"
          >
            <div class="mb-3 flex flex-row w-full gap-2">
              <div class="text-right w-4/5">
                <label
                  for="region"
                  class="form-label inline-block mb-0.5 text-black"
                  >Type</label
                >
                <v-select
                  :options="this.disk_types"
                  class="w-full"
                  v-model="disk.type"
                ></v-select>
              </div>
              <div class="text-right w-2/5 h-5">
                <label
                  for="name"
                  class="form-label inline-block mb-0.5 text-black"
                  >Taille disque {{ disk.id }}
                </label>
                <input
                  v-model="disk.diskCapacity"
                  type="text"
                  class="h-12 form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="name"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <i
              @click="this.sample_instance.disks.pop()"
              class="fa-solid fa-minus mr-6 fa fa-2x text-purple-600 hover:text-purple-700 cursor-pointer mb-4"
            ></i>
            <i
              @click="
                this.sample_instance.disks.push({
                  id: this.sample_instance.disks.length,
                })
              "
              class="fa-solid fa-plus fa fa-2x text-purple-600 hover:text-purple-700 cursor-pointer mb-4"
            ></i>
          </div>
          <!-- <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="text-center">
                <label
                  for="region"
                  class="form-label inline-block text-xl mb-0.5 text-black"
                  >Services</label
                >
              </div>
            </div>
          </div> -->
          <!-- <div class="flex justify-center">
            <Nginx :services="this.sample_instance.services" class="w-10 m-auto" />
            <Traefik
              :services="this.sample_instance.services"
              class="w-10 m-auto"
            />
            <Git :services="this.sample_instance.services" class="w-10 m-auto" />
            <Nodejs
              :services="this.sample_instance.services"
              class="w-10 m-auto"
            />
            <StartupScript
              :services="this.sample_instance.services"
              class="w-10 m-auto"
            />
          </div> -->
          <div class="flex justify-center">
            <div class="text-center mb-3 mt-4">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black"
                >Pare-feu</label
              >
            </div>
          </div>
          <div class="flex justify-center mb-4">
            <div>
              <div class="form-check float-left mr-10">
                <input
                  v-model="this.sample_instance.http_access"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="opened"
                  id="http"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="http"
                >
                  HTTP
                </label>
              </div>
              <div class="form-check float-left">
                <input
                  v-model="this.sample_instance.https_access"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value="opened"
                  id="https"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="https"
                >
                  HTTPS
                </label>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="text-center mb-3 mt-4">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black"
                >Réseau</label
              >
            </div>
          </div>
          <div class="flex justify-center mb-4">
            <div class="form-check float-left mr-10">
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                value="default"
                v-model="this.sample_instance.netType"
              />
              <label
                class="form-check-label inline-block text-black"
                for="netType1"
              >
                Par défaut
              </label>
            </div>
            <div class="form-check float-left">
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                value="custom"
                v-model="this.sample_instance.netType"
              />
              <label
                class="form-check-label inline-block text-black"
                for="netType2"
              >
                Personnalisé
              </label>
            </div>
          </div>
          <div v-if="this.sample_instance.netType == 'custom'">
            <!--<div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="name"
                    class="form-label inline-block mb-0.5 text-black"
                    >Réseau</label
                  >
                </div>
                <select
                  v-model="this.sample_instance.network"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                >
                  <option selected></option>
                  <option value="1">pimahtic-network</option>
                  <option value="2">net</option>
                  <option value="3">work</option>
                </select>
              </div>
            </div> -->
            <!-- <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="name"
                    class="form-label inline-block mb-0.5 text-black"
                    >Sous-réseau</label
                  >
                </div>
                <select
                  v-model="this.sample_instance.subnetwork"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                >
                  <option selected></option>
                  <option value="1">pimahtic-network-one</option>
                  <option value="2">net</option>
                  <option value="3">work</option>
                </select>
              </div>
            </div> -->
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="name"
                    class="form-label inline-block mb-0.5 text-black"
                    >Adresse IP interne principale</label
                  >
                </div>
                <!-- <select
                  v-model="this.sample_instance.intAddress"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                >
                  <option selected></option>
                  <option value="1">Éphèmère (automatique)</option>
                  <option value="2">net</option>
                  <option value="3">work</option>
                </select> -->
                <div class="flex flex-row gap-2 w-full">
                  <label
                    class="border-gray-300 border cursor-pointer rounded w-2/5"
                  >
                    <input
                      type="radio"
                      name="internal_ip"
                      value="true"
                      class="hidden peer"
                    />
                    <div
                      class="peer-checked:bg-purple-600 peer-checked:text-white rounded w-full h-full p-2"
                    >
                      Passerelle S3
                    </div>
                  </label>
                  <label class="border-gray-300 border cursor-pointer rounded">
                    <input
                      type="radio"
                      name="internal_ip"
                      value="true"
                      class="hidden peer"
                    />
                    <!-- When there is content, check the checkbox -->
                    <div
                      class="peer-checked:bg-purple-600 peer-checked:text-white rounded inline-block"
                    >
                      Perso.
                      <input
                        class="text-black rounded inline-block w-4/5"
                        type="text"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="name"
                    class="form-label inline-block mb-0.5 text-black"
                    >Adresse IP externe</label
                  >
                </div>
                <div
                  class="grid col-span-2 grid-flow-col gap-4 mt-0.5"
                >
                  <label class="border-gray-300 border cursor-pointer rounded">
                    <input
                      type="radio"
                      name="external_ip"
                      value="false"
                      class="hidden peer"
                    />
                    <div
                      class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
                    >
                      Ephémère
                    </div>
                  </label>
                  <label class="border-gray-300 border cursor-pointer rounded">
                    <input
                      type="radio"
                      name="external_ip"
                      value="true"
                      class="hidden peer"
                    />
                    <div
                      class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
                    >
                      Statique (auto)
                    </div>
                  </label>
                </div>
              </div>
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
</template>
<script>
  import { reactive } from "vue";
  import axios from "axios";
  import "../../../assets/css/vue-select.css";
  import vSelect from "vue-select";

  export default {
    data() {
      return {
        isOpen: false,
        gcp_zones: [],
        machine_types: [],
        machine_images: [],
        disk_types: [],
      };
    },
    props: ["sample_instance", "network"],
    components: {
      "v-select": vSelect,
    },
    setup() {
      const sample_instance = reactive({
        id: "",
        name: "",
        provider: "",
        type: "",
        machine_image: "",
        disks: [],
        network: "",
        subnetwork: "",
        addresses: [],
        zone: "",
        has_public_ip: false,
        custom_public_ip: "",
        custom_private_ip: "",
        http_access: false,
        https_access: false,
      });
      return {
        sample_instance,
      };
    },
    mounted() {
      let api_addr = import.meta.env.VITE_APP_API_ADDR;
      axios
        .get(api_addr + "/settings/zone/" + this.network.provider.name)
        .then((response) => {
          this.sample_instance.zone = response.data.zone;
        });
      axios
        .get(api_addr + "/settings/zones/" + this.network.provider.name)
        .then((response) => {
          this.gcp_zones = response.data.zones;
          for (let i = 0; i < this.gcp_zones.length; i++) {
            if (this.gcp_zones[i] === this.selected_gcp_zone) {
              this.gcp_zones.splice(i, 1);
              break;
            }
          }
        });
      axios
        .get(api_addr + "/settings/machine_types/" + this.network.provider.name)
        .then((response) => {
          this.machine_types = response.data.machine_types;
        });
      axios
        .get(api_addr + "/settings/disk_types/" + this.network.provider.name)
        .then((response) => {
          this.disk_types = response.data.disk_types;
        });
      axios
        .get(
          api_addr + "/settings/machine_images/" + this.network.provider.name
        )
        .then((response) => {
          // this dict contains the machine_images sorted into categories
          /*
        * like : {
          'debian': [
            debian-9-x64-standard-hd-v20200318.iso,
            debian-9-x64-standard-hd-v20200318.iso,
          ],
          'ubuntu': [
            ...
          ],
          ...
        }
        * we will use extract the images from the categories and add them to the machine_images array
        */
          // for each category
          try {
            for (let category in response.data.machine_images) {
              // for each image in the category
              for (let image of response.data.machine_images[category]) {
                // add the image to the machine_images array
                this.machine_images.push(image);
              }
            }
          } catch (e) {
            // it means that the machine_images dict is not iterable... at least not in that way
            for (let category in response.data.machine_images) {
              // in each category, we have a dict of pairs (ami_id, ami_name)
              for (let image in response.data.machine_images[category]) {
                // add the value to the machine_images array
                this.machine_images.push({
                  label: response.data.machine_images[category][image],
                  id: image,
                });
              }
            }
          }
        });
    },
    methods: {
      sendVm() {
        this.$emit("send-instance", this.sample_instance);
        this.isOpen = false;
      },
    },
  };
</script>
