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
                  value="true"
                  v-model="this.AWSNetwork.vpc_only"
                  checked
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
                  value="false"
                  v-model="this.AWSNetwork.vpc_only"
                />
                VPC et sous-réseaux
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
                  v-model="this.AWSNetwork.name"
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
                  v-model="this.AWSNetwork.ip_cidr_range"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <span class="mb-0.5 text-black text-right mt-5" v-if="this.AWSNetwork.vpc_only=='false'"
              >Zone de disponibilité</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5" v-if="this.AWSNetwork.vpc_only=='false'">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="this.AWSNetwork.availability_zones"
                value=1
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                1
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="this.AWSNetwork.availability_zones"
                value=2
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                2
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="this.AWSNetwork.availability_zones"
                value=3
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                3
              </div>
            </label>
          </div>
          <div class="flex justify-end" v-if="this.AWSNetwork.vpc_only=='false'">
            <span class="mb-0.5 text-black text-right mt-5"
              >Sous-réseaux publics</span
            >
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5" v-if="this.AWSNetwork.vpc_only=='false'">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="public_subnets"
                v-model="this.AWSNetwork.public_subnet_count"
                value=1
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                0
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="public_subnets"
                v-model="this.AWSNetwork.public_subnet_count"
                value=2
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                2
              </div>
            </label>
          </div>
          <div class="flex justify-end" v-if="this.AWSNetwork.vpc_only=='false'">
            <span class="mb-0.5 text-black text-right mt-5"
              >Sous-réseaux privés</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5" v-if="this.AWSNetwork.vpc_only=='false'">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="this.AWSNetwork.private_subnet_count"
                value=0
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                0
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="this.AWSNetwork.private_subnet_count"
                value=1
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                1
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="this.AWSNetwork.private_subnet_count"
                value=2
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                2
              </div>
            </label>
          </div>
          <div class="flex justify-end" v-if="this.AWSNetwork.vpc_only=='false'">
            <span class="mb-0.5 text-black text-right mt-5"
              >Passerelles NAT</span
            >
          </div>
          <div class="grid col-span-3 grid-flow-col gap-4 mt-0.5" v-if="this.AWSNetwork.vpc_only=='false'">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="this.AWSNetwork.nat_gateway"
                value="none"
                class="hidden peer"
                checked
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Aucune
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="this.AWSNetwork.nat_gateway"
                value="in_a_zone"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Dans une zone
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="nat_gateways"
                v-model="this.AWSNetwork.nat_gateway"
                value="one_per_zone"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Une par zone
              </div>
            </label>
          </div>
          <div class="flex justify-end" v-if="this.AWSNetwork.vpc_only=='false'">
            <span class="mb-0.5 text-black text-right mt-5"
              >Point de terminaison d'un VPC</span
            >
          </div>
          <div class="grid col-span-2 grid-flow-col gap-4 mt-0.5" v-if="this.AWSNetwork.vpc_only=='false'">
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="vpc_endpoints"
                v-model="this.AWSNetwork.vpc_s3_out"
                value=false
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Aucun
              </div>
            </label>
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="vpc_endpoints"
                v-model="this.AWSNetwork.vpc_s3_out"
                value=true
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Passerelle S3
              </div>
            </label>
          </div>
          <div class="flex justify-center" v-if="this.AWSNetwork.vpc_only=='false'">
            <div class="text-center mb-3">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black mt-6"
                >Options DNS</label
              >
            </div>
          </div>
          <div class="flex justify-center" v-if="this.AWSNetwork.vpc_only=='false'">
            <div class="form-check float-left mr-10">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="dns"
                  v-model="this.AWSNetwork.dns_hostnames"
                />
                Noms d'hôtes DNS
              </label>
            </div>
            <div class="form-check float-left">
              <label class="form-check-label inline-block text-black">
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="dns"
                  checked
                  v-model="this.AWSNetwork.dns_resolution"
                />
                Résolution DNS
              </label>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="bg-purple-600 p-2 rounded text-white mt-2" @click="createNetwork()">
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
  import Firewall from "./Firewall.vue";
  import { required, helpers } from "@vuelidate/validators";

  export default {
    setup() {
      let cidr = helpers.regex(
        /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([0-9]|[1-2][0-9]|3[0-2])/
      );
      cidr = helpers.withMessage("Invalid CIDR", cidr);
      const AWSNetwork = reactive({
        name: "",
        // subnets is unused here
        firewall_rules: [],
        availability_zones: 1,
        zone: "",
        vpc_only: true,
        private_subnet_count: 1,
        public_subnet_count: 1,
        ip_cidr_range: "",
        nat_gateway: "",
        vpc_s3_out: false,
        dns_hostnames: false,
        dns_resolution: false,
      });
      const sample_firewall = reactive({
        name: "",
        is_allow: true,
        rules: [],
      });
      const sample_rule = reactive({
        protocol: "",
        from_ports: [],
        to_ports: [],
        source_networks: [],
      });
      const network_validator = reactive({
        name: { required },
        zone: { required },
        ip_cidr_range: { required },
        nat_gateway: { required },
        vpc_s3_out: { required },
        dns_hostnames: { required },
        dns_resolution: { required },
        firewall_rules: { required },
        private_subnet_count: { required },
        public_subnet_count: { required },
      });

      return {
        AWSNetwork,
        sample_firewall,
        sample_rule,
      };
    },
    data() {
      return {
        isOpen: false,
        availability_zones: "1",
        dns: "hostnames",
        netType: "new",
      };
    },
    props: ["network"],
    components: {
      Firewall,
    },
  };
</script>
