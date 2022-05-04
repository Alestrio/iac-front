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
          class="max-w-2xl h-3/4 overflow-auto p-6 bg-white rounded-md shadow-xl z-50"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl">Google VPC</h3>
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
              <label class="text-black">
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="netType1"
                  value="new"
                  v-model="netType"
                  checked
                />
                <span>Nouveau</span>
              </label>
            </div>
            <div class="form-check float-left">
              <label class="form-check-label inline-block text-black">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="netType2"
                  value="existing"
                  v-model="netType"
                />
                Existant
              </label>
            </div>
          </div>
          <div class="mt-3">
            <div
              class="flex justify-center"
              id="newName"
              v-if="this.netType == 'new'"
            >
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
                  v-model="this.gcp_network.name"
                />
                <span
                  v-if="this.v$.name.$error"
                  class="text-red-500 text-xs italic"
                >
                  {{ v$.name.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div
              class="flex justify-center"
              id="newDesc"
              v-if="this.netType == 'new'"
            >
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="desc"
                    class="form-label inline-block mb-0.5 text-black"
                    >Description</label
                  >
                </div>
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="desc"
                  v-model="gcp_network.description"
                />
                <span
                  v-if="this.v$.description.$error"
                  class="text-red-500 text-xs italic"
                >
                  {{ v$.description.$errors[0].$message }}
                </span>
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
            <div class="flex justify-start">
              <label
                for="name"
                class="form-label inline-block mb-2 mt-3 text-black font-bold"
                >Accès privé à Google</label
              >
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="googleaccess"
                    value="enabled"
                  />
                  Activé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="googleaccess"
                    checked
                    value="disabled"
                  />
                  Désactivé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <label
                class="form-label inline-block mb-2 mt-3 text-black font-bold"
                >Journaux de flux</label
              >
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="enabled"
                    name="streamJournal"
                  />
                  Activé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="disabled"
                    name="streamJournal"
                    checked
                  />
                  Désactivé
                </label>
              </div>
            </div>
            <hr class="my-4" />
            <h1 class="text-3xl">Sous-réseaux</h1>
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
                  v-model="this.sample_subnet.name"
                />
                <span class="text-red-500" v-if="this.w$.name.$error">
                  {{ this.w$.name.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="text-right">
                  <label
                    for="desc"
                    class="form-label inline-block mb-0.5 text-black"
                    >Description</label
                  >
                </div>
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-right text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="desc"
                  v-model="this.sample_subnet.description"
                />
                <span class="text-red-500" v-if="this.w$.description.$error">
                  {{ this.w$.description.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="flex justify-center">
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
                  v-model="this.sample_subnet.gcp_zone"
                >
                  <option selected>{{ this.selected_gcp_zone }}</option>
                  <option
                    v-for="zone in this.gcp_zones"
                    :value="zone"
                    :key="zone"
                  >
                    {{ zone }}
                  </option>
                </select>
                <span class="text-red-500" v-if="this.w$.gcp_zone.$error">
                  {{ this.w$.gcp_zone.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-5 xl:w-96">
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
                  placeholder="10.128.10.0/24"
                  v-model="this.sample_subnet.ip_cidr_range"
                />
                <span class="text-red-500" v-if="this.w$.ip_cidr_range.$error">
                  {{ this.w$.ip_cidr_range.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                @click="addSubnet"
              >
                Ajouter
              </button>
            </div>
            <table class="table-auto mt-2 rounded-lg bg-green-100">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Région</th>
                  <th class="p-1">Plage d'adresses IP</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="subnet in this.gcp_network.subnets"
                  :key="subnet"
                  class="p-2"
                >
                  <td class="p-2">{{ subnet.name }}</td>
                  <td>{{ subnet.gcp_zone }}</td>
                  <td>{{ subnet.ip_cidr_range }}</td>
                  <!-- Deletion button as an svg -->
                  <td class="p-2">
                    <svg
                      class="h-6 w-6 text-red-500 hover:text-red-600 cursor-pointer"
                      @click="deleteSubnet(subnet)"
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
            <span class="text-red-500" v-if="this.v$.subnets.$error">
              {{ this.v$.subnets.$errors[0].$message }}
            </span>
            <hr class="my-4" />
            <div class="flex justify-center">
              <div class="text-center mb-3">
                <label
                  for="region"
                  class="form-label inline-block text-xl mb-0.5 text-black"
                  >Routage dynamique</label
                >
              </div>
            </div>
            <div class="flex justify-center">
              <div class="form-check float-left mr-10">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="routing"
                    id="routing1"
                    value="REGIONAL"
                    v-model="this.gcp_network.routing_type"
                  />
                  Régional
                </label>
              </div>
              <div class="form-check float-left">
                <label class="form-check-label inline-block text-black">
                  <input
                    class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="routing"
                    id="routing2"
                    checked
                    value="GLOBAL"
                    v-model="this.gcp_network.routing_type"
                  />
                  Mondial
                </label>
              </div>
            </div>
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
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexCheckDefault"
                  >
                    SSH
                  </label>
                </div>
                <div class="form-check float-left">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexCheckChecked"
                  >
                    RDP
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="w-auto float-left">
                <div class="form-check float-left mr-10">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="flexCheckDefault"
                  >
                    ICMP
                  </label>
                </div>
                <div class="form-check float-left">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <Firewall class="ml-3" @send-firewall="addFirewall" />
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="flex">
                <table class="table-auto mt-2 rounded-lg bg-green-100">
                  <thead>
                    <tr>
                      <th class="p-2">Protocole</th>
                      <th class="p-2">Ports</th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="firewall in gcp_network.firewalls"
                    :key="firewall"
                    class="p-2"
                  >
                    <tr
                      v-for="rule in firewall.rules"
                      :key="rule.id"
                      class="p-2"
                    >
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
            <div class="flex justify-center m-4">
              <button
                class="bg-purple-600 text-white rounded p-2 font-bold"
                @click="sendNetwork"
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
  import Firewall from "./Firewall.vue";
  import { computed } from "vue";
  import { required, helpers } from "@vuelidate/validators";
  import useVuelidate from "@vuelidate/core";
  import axios from "axios";

  export default {
    props: ["network", "nid", "apiNet"],
    data() {
      return {
        forbidden_networks: [],
        netType: "new",
        isOpen: false,
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
          name: "firewall-" /* + this.gcp_network.name*/,
          is_allow: true,
          rules: [],
        },
      };
    },
    setup() {
      let cidr = helpers.regex(
        /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([0-9]|[1-2][0-9]|3[0-2])/
      );
      cidr = helpers.withMessage("Invalid CIDR", cidr);
      const forbidden_networks = [
        "199.36.153.4/30",
        "199.36.153.8/30",
        "0.0.0.0/8",
        "127.0.0.0/8",
        "169.254.0.0/16",
        "224.0.0.0/4",
        "255.255.255.255/32",
      ];
      const notForbidden = helpers.withMessage(
        "Forbidden network",
        (value) => !forbidden_networks.includes(value)
      );
      const sample_subnet = reactive({
        name: "",
        description: "",
        providers: ["gcp"],
        gcp_zone: "",
        ip_cidr_range: "",
      });
      const subnet_rules = reactive({
        name: { required },
        description: { required },
        gcp_zone: { required },
        ip_cidr_range: { required, cidr, notForbidden },
      });
      const gcp_network = reactive({
        id: 0,
        name: "",
        description: "",
        routing_type: "GLOBAL",
        providers: ["gcp"],
        subnets: [],
        firewalls: [],
      });
      const rules = computed(() => {
        return {
          name: { required },
          description: { required },
          routing_type: { required },
          providers: { required },
          subnets: { required, minLength: 1 },
          firewalls: { required },
        };
      });
      const v$ = useVuelidate(rules, gcp_network);
      const w$ = useVuelidate(subnet_rules, sample_subnet);
      return {
        v$,
        w$,
        sample_subnet,
        gcp_network,
      };
    },
    components: {
      Firewall,
    },
    methods: {
      addFirewall(firewall) {
        let fire = JSON.parse(JSON.stringify(this.sample_firewall));
        for (let i of firewall) {
          fire.rules.push(i);
        }
        this.gcp_network.firewalls.push(fire);
      },
      stringifyPorts(ports) {
        return ports.join(", ");
      },
      addSubnet() {
        this.w$.$validate();
        if (!this.w$.$error) {
          this.gcp_network.subnets.push(
            JSON.parse(JSON.stringify(this.sample_subnet))
          );
        }
      },
      deleteSubnet(subnet) {
        this.gcp_network.subnets.splice(
          this.gcp_network.subnets.indexOf(subnet),
          1
        );
      },
      deleteRule(firewall, rule) {
        firewall.rules.splice(firewall.rules.indexOf(rule), 1);
      },
      sendNetwork() {
        this.v$.$validate();
        console.log(this.v$.$errors);
        this.gcp_network.id = this.nid;
        if (!this.v$.$error) {
          if (this.gcp_network.firewalls.length != 0) {
            this.gcp_network.firewalls[0].name =
              this.gcp_network.firewalls[0].name + this.gcp_network.name;
          }
          this.$emit("send-network", this.gcp_network);
          this.isOpen = false;
        }
      },
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
        this.selected_gcp_zone = response.data.zone;
      });
      if (this.apiNet != null) {
        this.gcp_network = this.apiNet;
      }
    },
  };
</script>
