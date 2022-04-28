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
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="netType"
                id="netType1"
                @click="toggleNewExisting()"
              />
              <label
                class="form-check-label inline-block text-black"
                for="netType1"
              >
                Nouveau
              </label>
            </div>
            <div class="form-check float-left">
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="netType"
                id="netType2"
                checked
                @click="toggleNewExisting()"
              />
              <label
                class="form-check-label inline-block text-black"
                for="netType2"
              >
                Existant
              </label>
            </div>
          </div>
          <div class="mt-3">
            <div class="flex justify-center"
                 id="newName" >
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
                  v-model="netName"
                />
              </div>
             </div>
            <div class="flex justify-center"
                 id="newDesc">
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
                  v-model="netDesc"
                />
              </div>
            </div>
            <div class="flex justify-center"
                 id="existing">
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
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="googleaccess"
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="googleaccess"
                >
                  Activé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="googleaccess"
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="googleaccess"
                >
                  Désactivé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <label
                for="name"
                class="form-label inline-block mb-2 mt-3 text-black font-bold"
                >Journaux de flux</label
              >
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="logs"
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="logs"
                >
                  Activé
                </label>
              </div>
            </div>
            <div class="flex justify-start">
              <div class="form-check float-left mb-3">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="netType"
                  id="logs"
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="logs"
                >
                  Désactivé
                </label>
              </div>
            </div>
            <div class="flex justify-center">
              <div
                class="cursor-pointer form-label inline-block mb-4 mt-3 p-2 border border-gray-600 text-gray-600 rounded-md"
              >
                AJOUTER UN SOUS-RÉSEAU
              </div>
            </div>
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
                />
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
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-purple-600 focus:outline-none"
                >
                  <option selected></option>
                  <option value="1">us-central-1</option>
                  <option value="2">us</option>
                  <option value="3">central</option>
                </select>
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
                />
              </div>
            </div>
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
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="routing"
                  id="routing1"
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="netType1"
                >
                  Régional
                </label>
              </div>
              <div class="form-check float-left">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="routing"
                  id="routing2"
                  checked
                />
                <label
                  class="form-check-label inline-block text-black"
                  for="netType2"
                >
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
        network: {},
      };
    },
    props: ["network"],
    components: {
      Firewall,
    },
    methods: {
      addFirewall(firewall) {
        this.$emit("send-firewall", firewall);
      },
      toggleNewExisting() {
        let radio_new = document.getElementById("netType1");
        let radio_existing = document.getElementById("netType2");

        let new_name = document.getElementById("newName");
        let new_desc = document.getElementById("newDesc");
        let existing = document.getElementById("existing");
        console.log(new_name);

        if (radio_new.checked) {
          new_name.style.display = "block";
          new_desc.style.display = "block";
          existing.style.display = "none";
        } else {
          new_name.style.display = "none";
          new_desc.style.display = "none";
          existing.style.display = "block";
        }
      },
    },
  };
</script>
