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
                  checked
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
                  value="existing"
                  v-model="netType"
                />
                Existant
              </label>
            </div>
          </div>
          <div
            class="flex justify-center"
            id="existing"
            v-if="this.netType != 'new'"
          >
            <div class="mb-3 xl:w-96">
              <div class="text-right">
                <label
                  for="name"
                  class="form-label inline-block mb-0.5 text-black"
                  >Nom</label
                >
              </div>
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
              >
                <option selected></option>
                <option value="1">pimahtic-network</option>
                <option value="2">net</option>
                <option value="3">work</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center" v-if="this.netType == 'new'">
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
          <div class="mt-3" v-if="this.netType == 'new'">
            <div class="flex flec-col justify-center">
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
            <span
              v-if="this.v$.name.$error"
              class="text-red-500 text-xs italic"
            >
              {{ v$.name.$errors[0].$message }}
            </span>
            <div class="flex justify-center" v-if="this.netType == 'new'">
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
          <span
            v-if="this.v$.ip_cidr_range.$error"
            class="text-red-500 text-xs italic"
          >
            {{ v$.ip_cidr_range.$errors[0].$message }}
          </span>
          <div class="flex justify-end">
            <span
              class="mb-0.5 text-black text-right mt-5"
              v-if="
                this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'
              "
              >Zone de disponibilité</span
            >
          </div>
          <div
            class="grid col-span-3 grid-flow-col gap-4 mt-0.5"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="availability_zones"
                v-model="this.AWSNetwork.availability_zones"
                value="1"
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
                value="2"
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
                value="3"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                3
              </div>
            </label>
          </div>
          <div
            class="flex justify-center mt-1"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <div class="mb-3 xl:w-96">
              <div class="text-right">
                <label
                  for="name"
                  class="form-label inline-block mb-0.5 text-black"
                  >Région</label
                >
              </div>
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="GCP Zone"
                v-model="this.AWSNetwork.zone"
              >
                <option selected>{{ this.selected_aws_zone }}</option>
                <option
                  v-for="zone in this.aws_zones"
                  :value="zone"
                  :key="zone"
                >
                  {{ zone }}
                </option>
              </select>
              <span class="text-red-500" v-if="this.v$.zone.$error">
                {{ this.v$.zone.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div
            class="flex justify-end"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <span class="mb-0.5 text-black text-right"
              >Sous-réseaux publics</span
            >
          </div>
          <div
            class="grid col-span-2 grid-flow-col gap-4 mt-0.5"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="public_subnets"
                v-model="this.AWSNetwork.public_subnet_count"
                value="1"
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
                value="2"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                2
              </div>
            </label>
          </div>
          <div
            class="flex justify-end"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <span class="mb-0.5 text-black text-right mt-5"
              >Sous-réseaux privés</span
            >
          </div>
          <div
            class="grid col-span-3 grid-flow-col gap-4 mt-0.5"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="private_subnets"
                v-model="this.AWSNetwork.private_subnet_count"
                value="0"
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
                value="1"
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
                value="2"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                2
              </div>
            </label>
          </div>
          <div
            class="flex justify-end"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <span class="mb-0.5 text-black text-right mt-5"
              >Passerelles NAT (€)
              <a
                href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
                class="text-blue-500 hover:text-blue-600"
                target="_blank"
                >?</a
              ></span
            >
          </div>
          <div
            class="grid col-span-3 grid-flow-col gap-4 mt-0.5"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
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
          <div
            class="flex justify-end"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <span class="mb-0.5 text-black text-right mt-5"
              >Point de terminaison d'un VPC</span
            >
          </div>
          <div
            class="grid col-span-2 grid-flow-col gap-4 mt-0.5"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <label class="border-gray-300 border cursor-pointer rounded">
              <input
                type="radio"
                name="vpc_endpoints"
                v-model="this.AWSNetwork.vpc_s3_out"
                value="false"
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
                value="true"
                class="hidden peer"
              />
              <div
                class="peer-checked:bg-purple-600 peer-checked:text-white rounded"
              >
                Passerelle S3
              </div>
            </label>
          </div>
          <div
            class="flex justify-center"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <div class="text-center mb-3">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black mt-6"
                >Options DNS</label
              >
            </div>
          </div>
          <div
            class="flex justify-center"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
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
          <div
            class="flex justify-center"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <div class="text-center mb-3 mt-4">
              <label
                for="region"
                class="form-label inline-block text-xl mb-0.5 text-black"
                >Pare-feu</label
              >
            </div>
          </div>
          <div
            class="grid grid-cols-2 gap-2 w-1/2 m-auto"
            v-if="this.AWSNetwork.vpc_only == 'false' && this.netType == 'new'"
          >
            <div class="form-check float-left flex">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="ssh_rule"
              />
              <label class="form-check-label inline-block text-gray-800">
                SSH
              </label>
            </div>
            <div class="form-check float-left flex">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="rdp_rule"
                checked
              />
              <label class="form-check-label inline-block text-gray-800">
                RDP
              </label>
            </div>
            <div class="form-check float-left flex">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="icmp_rule"
              />
              <label class="form-check-label inline-block text-gray-800">
                ICMP
              </label>
            </div>
            <div class="form-check float-left flex">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <Firewall @send-firewall="addFirewall" />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="flex">
              <table
                class="table-auto mt-2 rounded-lg bg-purple-600"
                v-if="this.AWSNetwork.firewall_rules.length > 0"
              >
                <thead>
                  <tr>
                    <th class="p-2 text-white justify-center">Protocole</th>
                    <th class="p-2 text-white justify-center">Ports</th>
                  </tr>
                </thead>
                <tbody
                  v-for="firewall in AWSNetwork.firewall_rules"
                  :key="firewall"
                  class="p-2 bg-purple-100"
                >
                  <tr v-for="rule in firewall.rules" :key="rule.id" class="p-2">
                    <td class="p-2">{{ rule.protocol }}</td>
                    <td>{{ stringifyPorts(rule.from_ports) }}</td>
                    <!-- Deletion button as an svg -->
                    <td class="p-2">
                      <svg
                        class="h-6 w-6 text-red-500 hover:text-red-600 cursor-pointer"
                        @click="deleteRule(firewall, rule)"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :title="'Supprimer'"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                        <line x1="9" y1="15" x2="15" y2="9" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-purple-600 p-2 rounded text-white mt-2"
              @click="sendNetwork()"
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
  import Firewall from "./Firewall.vue";
  import { required, helpers } from "@vuelidate/validators";
  import useVuelidate from "@vuelidate/core";
  import axios from "axios";

  export default {
    setup() {
      let cidr = helpers.regex(
        /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([0-9]|[1-2][0-9]|3[0-2])/
      );
      cidr = helpers.withMessage("Invalid CIDR", cidr);
      const AWSNetwork = reactive({
        id: "",
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
        zone: { requiredIf: (v) => !v.vpc_only },
        ip_cidr_range: { required, cidr },
        firewall_rules: { requiredIf: (v) => !v.vpc_only },
      });

      const v$ = useVuelidate(network_validator, AWSNetwork);

      return {
        AWSNetwork,
        sample_firewall,
        sample_rule,
        v$,
      };
    },
    data() {
      return {
        isOpen: false,
        availability_zones: "1",
        dns: "hostnames",
        netType: "new",
        sample_rules: {
          rdp: {
            protocol: "tcp",
            from_ports: [22],
            to_ports: [22],
            source_networks: ["0.0.0.0/0"],
          },
          ssh: {
            protocol: "tcp",
            from_ports: [22],
            to_ports: [22],
            source_networks: ["0.0.0.0/0"],
          },
        },
        sample_firewall: {
          name: "firewall-",
          is_allow: true,
          rules: [],
        },
      };
    },
    props: ["network", "nid"],
    components: {
      Firewall,
    },
    methods: {
      addFirewall(firewall) {
        let fire = JSON.parse(JSON.stringify(this.sample_firewall));
        for (let i of firewall) {
          fire.rules.push(i);
        }
        this.AWSNetwork.firewall_rules.push(fire);
      },
      stringifyPorts(ports) {
        return ports.join(", ");
      },
      deleteRule(firewall, rule) {
        firewall.rules.splice(firewall.rules.indexOf(rule), 1);
        if (firewall.rules.length === 0) {
          this.AWSNetwork.firewall_rules.splice(
            this.AWSNetwork.firewall_rules.indexOf(firewall),
            1
          );
        }
      },
      sendNetwork() {
        this.v$.$validate();
        this.AWSNetwork.id = this.nid;
        if (
          this.AWSNetwork.firewall_rules.length == 0 &&
          !this.AWSNetwork.vpc_only
        ) {
          this.AWSNetwork.firewall_rules.push(this.sample_firewall);
        }
        if (!this.v$.$error) {
          if (!this.AWSNetwork.vpc_only) {
            console.log(this.gcp_network);
            this.AWSNetwork.firewall_rules[0].name =
              this.AWSNetwork.firewall_rules[0].name.split("-")[0] +
              "-" +
              this.AWSNetwork.name;
            if (document.getElementById("ssh_rule").checked) {
              this.AWSNetwork.firewall_rules[0].rules.push(
                this.sample_rules.ssh
              );
            }
            if (document.getElementById("rdp_rule").checked) {
              this.AWSNetwork.firewall_rules[0].rules.push(
                this.sample_rules.rdp
              );
            }
          }
          //TODO Rule for ICMP
          this.$emit("send-network", this.AWSNetwork);
          this.isOpen = false;
        }
      },
    },
    mounted() {
      let api_addr = import.meta.env.VITE_APP_API_ADDR;
      if (this.apiNet != null) {
        this.aws_network = this.apiNet;
      }
      axios.get(api_addr + "/settings/zone/aws").then((response) => {
        this.selected_aws_zone = response.data.zone;
      });
      axios.get(api_addr + "/settings/zones/aws").then((response) => {
        this.aws_zones = response.data.zones;
        for (let i = 0; i < this.aws_zones.length; i++) {
          if (this.aws_zones[i] === this.selected_aws_zone) {
            this.aws_zones.splice(i, 1);
            break;
          }
        }
      });
    },
  };
</script>
