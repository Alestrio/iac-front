<template>
  <div class="h-full mx-auto">
    <div class="flex justify-center">
      <i
        class="fas fa-edit text-lg ml-2 m-auto align-middle cursor-pointer"
        @click="isOpen = true"
      ></i>

      <div
        v-show="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
      >
        <div
          class="max-w-2xl h-3/4 overflow-auto p-6 bg-white rounded-md shadow-xl"
        >
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
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  value="new"
                  v-model="netType"
                />
                Nouveau
              </label>
            </div>
            <div class="form-check float-left">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  checked
                  value="existing"
                  v-model="netType"
                />
                Existant
              </label>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="form-check float-left mr-10 mt-8">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="creationType"
                  value="vpc_only"
                  v-model="creationType"
                />
                VPC uniquement
              </label>
            </div>
            <div class="form-check float-left mt-8">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="creationType"
                  value="vpc_and_subnet"
                  v-model="creationType"
                />
                VPC et sous-réseaux
              </label>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="form-check mt-2">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="creationType"
                  checked
                  value="auto"
                  v-model="creationType"
                />
                Automatique
              </label>
            </div>
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
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="name"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-2 xl:w-96">
                <div class="text-right">
                  <label
                    for="desc"
                    class="form-label inline-block mb-0.5 text-black"
                    >Plage d'adresses IP</label
                  >
                </div>
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="desc"
                  placeholder="10.0.0.0/16"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5"
              >Zone de disponibilité</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="availability_zones"
                value="1"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">1</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="availability_zones"
                value="2"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">2</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="availability_zones"
                value="3"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">3</div>
            </label>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5"
              >Sous-réseaux publics</span
            >
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="public_subnets"
                v-model="public_subnets"
                value="0"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">0</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="public_subnets"
                v-model="public_subnets"
                value="2"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">2</div>
            </label>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5"
              >Sous-réseaux privés</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="private_subnets"
                value="0"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">0</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="private_subnets"
                value="2"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">2</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="private_subnets"
                value="4"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">4</div>
            </label>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5"
              >Passerelles NAT</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="nat_gateways"
                value="none"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">Aucune</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="nat_gateways"
                value="in_a_zone"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">Dans une zone</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="nat_gateways"
                value="one_per_zone"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">Une par zone</div>
            </label>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5"
              >Point de terminaison d'un VPC</span
            >
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="vpc_endpoints"
                v-model="vpc_endpoints"
                value="none"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">Aucun</div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="vpc_endpoints"
                v-model="vpc_endpoints"
                value="s3_gateway"
                class="hidden peer"
              />
              <div class="peer-checked:bg-purple-600 peer-checked:text-white rounded">Passerelle S3</div>
            </label>
          </div>
          <div class="flex justify-center">
            <div class="text-center mb-3">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black mt-6"
                >Options DNS</label
              >
            </div>
          </div>
          <div class="flex justify-center">
            <div class="form-check float-left mr-10">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="dns"
                  value="hostnames"
                  v-model="dns"
                />
                Noms d'hôtes DNS
              </label>
            </div>
            <div class="form-check float-left">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="dns"
                  checked
                  value="dns_resolution"
                  v-model="dns"
                />
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
        availability_zones: "1",
      };
    },
    props: ["network"],
    components: {
      Firewall,
    },
  };
</script>
