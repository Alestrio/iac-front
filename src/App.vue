<template>
  <div class="h-screen">
    <Header v-if="route.path !== '/'" />
    <div class="w-full flex flex-col md:flex-row h-full">
      <div v-if="route.path !== '/'" class="bg-white z-50 fixed w-full md:w-1/6 md:h-full shadow-xl hidden" id='nav'>
        <nav class="flex flex-col gap-2 p-5">
          <div class="flex flex-row">
            <router-link to="/dashboard" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> </svg>
              Dashboard
            </router-link>
          </div>
          <div class="flex flex-row">
            <router-link to="/editeur" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> </svg>
              Editeur
            </router-link>
          </div>
          <div class="flex flex-row">
            <router-link to="/logs" class="text-xl hover:bg-gray-200 rounded p-1 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>
              Logs
            </router-link>
          </div>
          <div class="flex flex-row">
            <a
              class="text-xl hover:bg-gray-200 rounded p-1 w-full"
              @click.prevent="logOut"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </a>
          </div>
          <div>
            <!-- zone selection select -->
            <div class="flex flex-col justify-center">
              <div class="text-center font-bold">Zone GCP :</div>
              <div class="mb-3">
                <select
                  @change="updateGCPZone($event.target.value)"
                  class="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="GCP Zone">
                    <option selected>{{ this.selected_gcp_zone }}</option>
                    <option v-for="zone in this.gcp_zones" :value="zone" :key="zone">{{ zone }}</option>
                </select>
              </div>
              <div class="text-center font-bold">Zone AWS :</div>
              <div class="mb-3">
                <select 
                  @change="updateAWSZone($event.target.value)"
                  class="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="AWS Zone">
                    <option selected>{{ this.selected_aws_zone }}</option>
                    <option v-for="zone in this.aws_zones" :value="zone" :key="zone">{{ zone }}</option>
                </select>
              </div>
              <div class="text-center font-bold">Projet GCP :</div>
              <div class="mb-3">
                <select 
                  @change="updateGCPProject($event.target.value)"
                  class="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="GCP Project">
                    <option selected>{{ this.selected_gcp_project }}</option>
                    <option v-for="proj in this.gcp_projects" :value="proj" :key="proj">{{ proj }}</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="w-full h-full p-4 flex justify-center bg-violet-50">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  import { useRoute } from "vue-router";
  import axios from "axios";
  export default {
    name: "App",
    component: {
      Header
    },
    setup() {
      const route = useRoute();
      return { route };
    },
    data() {
      return {
        gcp_zones: [
        ],
        aws_zones: [
        ],
        gcp_projects: [
        ],
        selected_gcp_zone: "europe-west1-b",
        selected_aws_zone: "us-east-1",
        selected_gcp_project: "",
      }
    },
    mounted() {
      // from env vars
      let api_addr = import.meta.env.VITE_APP_API_ADDR;
      axios
      .get(api_addr + "/settings/project/gcp")
        .then((response) => {
          this.selected_gcp_project = response.data.project;
      });
      axios
      .get(api_addr + "/settings/zone/gcp")
        .then(response => {
          this.selected_gcp_zone = response.data.zone;
        });
      axios
      .get(api_addr + "/settings/zone/aws")
        .then(response => {
          this.selected_aws_zone = response.data.zone;
        });
      axios
      .get(api_addr + "/settings/zones/gcp")
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
      .get(api_addr + "/settings/zones/aws")
        .then((response) => {
          this.aws_zones = response.data.zones;
          for (let i = 0; i < this.aws_zones.length; i++) {
            if (this.aws_zones[i] === this.selected_aws_zone) {
              this.aws_zones.splice(i, 1);
              break;
            }
          }
      });
      axios
      .get(api_addr + "/settings/projects/gcp")
        .then((response) => {
          this.gcp_projects = response.data.projects;
          for (let i = 0; i < this.gcp_projects.length; i++) {
            if (this.gcp_projects[i] === this.selected_gcp_project) {
              this.gcp_projects.splice(i, 1);
              break;
            }
          }
      });
    },
    methods: {
      updateGCPZone(zone) {
        let api_addr = import.meta.env.VITE_APP_API_ADDR;
        axios
        .post(api_addr + "/settings/zone/gcp/" + zone)
        // refresh page
        .then(() => {
          window.location.reload();
        });
      },
      updateAWSZone(zone) {
        let api_addr = import.meta.env.VITE_APP_API_ADDR;
        axios
        .post(api_addr + "/settings/zone/aws/" + zone)
        // refresh page
        .then(() => {
          window.location.reload();
        });
      },
    },
  }
</script>

<style>
#app {
  margin: 0 auto;
  font-weight: normal;
}
</style>
