/*
 *   Copyright (c) 2022 Alexis LEBEL
 *   All rights reserved.
 */
/* * Copyright (c) 2022 Alexis LEBEL * All rights reserved. */
<template>
  <div class="w-full gap-2 p-8">
    <div class="w-full mb-2">
      <div class="flex justify-between">
        <div class="text-2xl font-semibold ml-2">VMs</div>
        <div class="flex flex-row">
          <input
            type="text"
            name="name"
            class="border-b-2 border-gray-600 focus:border-purple-600 border-l-0 border-r-0 border-t-0 bg-violet-50 outline-none"
            @input="updateSearchbarVms($event.target.value)"
          />
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="overflow-x-scroll gap-5 p-2 shadow-xl bg-white grid grid-flow-col"
    >
      <div
        v-if="this.vms.length === 0"
        class="text-center h-32 text-gray-600 gap-1 block"
      >
        <Puff :height="128" />
      </div>
      <div
        v-for="machine in this.vms"
        :key="machine.id"
        :class="'gap-1 mt-2 md:w-64 w-40 rounded ' + machine.bg_color"
        :id="'machine-card-' + machine.id"
      >
        <div class="flex-row">
          <img class="md:w-1/2 w-16 m-auto" src="../../assets/vm-icon.png" />
        </div>
        <div class="flex-row text-center">
          <span class="text-xl font-semibold"> {{ machine.name }} </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-xl font-semibold"> {{ machine.region }} </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-lg"> {{ machine.cpu }} vCPUs </span>
          <span class="text-lg"> {{ machine.memory }} GO RAM </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-lg"> {{ machine.disks_number }} disques </span>
          <span class="text-lg"> {{ machine.os }} </span>
        </div>
      </div>
    </div>

    <div class="md:grid md:grid-flow-row-dense grid-cols-4 mt-12">
      <div class="md:col-span-3 mb-12">
        <div class="flex justify-between mb-2">
          <div class="text-2xl font-semibold ml-2">R??seaux</div>
          <div class="flex flex-row">
            <input
              type="text"
              name="name"
              class="border-b-2 border-l-0 border-r-0 border-t-0 border-gray-600 bg-violet-50 outline-none"
              @input="updateSearchbarNetworks($event.target.value)"
            />
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div
          class="overflow-x-scroll gap-2 p-2 shadow-xl bg-white grid grid-flow-col"
        >
          <div
            v-if="this.networks.length === 0"
            class="text-center h-32 text-gray-600 gap-1 block"
          >
            <Puff :height="128" />
          </div>
          <div
            v-for="net in this.networks"
            :key="net.id"
            :class="'gap-1 mt-2 md:w-64 rounded ' + net.bg_color"
            :id="'network-card-' + net.id"
          >
            <img
              class="md:w-32 w-16 m-auto"
              src="../../assets/network-icon.png"
            />
            <div class="md:text-xl text-sm font-semibold text-center">
              {{ net.name }}
            </div>
            <div class="md:text-base text-xs text-center font-normal">
              {{ net.zone }}
            </div>
            <div
              class="md:text-xl text-sm text-center font-semibold"
              v-for="subnet in net.subnets"
              :key="subnet.name"
            >
              {{ subnet.ip_cidr_range }}
            </div>
            <div class="md:text-xl text-sm text-center font-normal">
              {{ net.description }}
            </div>
          </div>
        </div>
      </div>

      <div class="md:ml-8">
        <div class="flex justify-between mb-2">
          <div class="text-2xl font-semibold ml-2">H??bergeurs</div>
        </div>
        <div class="grid grid-cols-4 p-2 gap-4 shadow-xl bg-white">
          <div>
            <img src="../../assets/gcp-icon.png" />
          </div>
          <span class="col-span-3 text-xl bg-blue-50 rounded p-1">
            Google Cloud Platform
          </span>
          <div>
            <img src="../../assets/aws-icon.png" />
          </div>
          <span class="col-span-3 text-xl bg-yellow-50 rounded p-1">
            Amazon Web Services
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { Puff } from "svg-loaders-vue";

  export default {
    components: {
      Puff,
    },
    data: () => ({
      vms: [],
      networks: [],
    }),
    mounted() {
      // from env vars

      let api_addr = import.meta.env.VITE_APP_API_ADDR;
      axios.get(api_addr + "/existing/simple_machines/gcp").then((response) => {
        let data = response.data;
        for (let vm of data) {
          vm.bg_color = "bg-blue-50";
        }
        if (this.vms.length > 0) {
          this.vms.push(...response.data);
        } else {
          this.vms = response.data;
        }
        this.vms = response.data;
      });
      axios.get(api_addr + "/existing/simple_machines/aws").then((response) => {
        let data = response.data;
        for (let vm of data) {
          vm.bg_color = "bg-yellow-50";
        }
        if (this.vms.length > 0) {
          this.vms.push(...response.data);
        } else {
          this.vms = response.data;
        }
        this.updateIds();
      });
      axios.get(api_addr + "/existing/simple_networks/gcp").then((response) => {
        let data = response.data;
        for (let vm of data) {
          vm.bg_color = "bg-blue-50";
        }
        if (this.networks.length > 0) {
          this.networks.push(...response.data);
        } else {
          this.networks = response.data;
        }
      });
      axios.get(api_addr + "/existing/simple_networks/aws").then((response) => {
        let data = response.data;
        for (let vm of data) {
          vm.bg_color = "bg-yellow-50";
        }
        if (this.networks.length > 0) {
          this.networks.push(...response.data);
        } else {
          this.networks = response.data;
        }
        this.updateIds();
      });
    },
    methods: {
      updateIds() {
        // Sets an int id to each vm
        this.vms.forEach((vm, index) => {
          vm.id = index + 1;
        });
        this.networks.forEach((network, index) => {
          network.id = index + 1;
        });
      },
      updateSearchbarVms(search) {
        for (let vm of this.vms) {
          if (vm.name.toLowerCase().includes(search.toLowerCase())) {
            let card = document.getElementById("machine-card-" + vm.id);
            card.style.display = "block";
          } else {
            let card = document.getElementById("machine-card-" + vm.id);
            card.style.display = "none";
          }
        }
      },
      updateSearchbarNetworks(search) {
        for (let network of this.networks) {
          if (network.name.toLowerCase().includes(search.toLowerCase())) {
            let card = document.getElementById("network-card-" + network.id);
            card.style.display = "block";
          } else {
            let card = document.getElementById("network-card-" + network.id);
            card.style.display = "none";
          }
        }
      },
    },
  };
</script>
<style scoped></style>
