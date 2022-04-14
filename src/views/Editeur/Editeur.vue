<template>
  <div class="w-full">
    <div
      class="w-full h-full p-3 flex justify-center items-center bg-blue-50 md:flex-row flex-col"
    >
      <div
        class="w-full h-3/2 md:w-3/4 md:h-full shadow-xl m-4 border text-center overflow-clip"
      >
        <h1 class="text-3xl p-4">Infrastructure :</h1>
        <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
        <div
          class="shadow-xl p-3 m-5 w-7/8 h-4/6 md:h-5/6 rounded flex flex-col md:grid md:grid-cols-2 gap-2 overflow-auto place-items-center"
          @drop="onDrop($event, item)"
          @dragover.prevent
          @dragenter.prevent
          id="infra-container"
        >
          <div v-for="network in this.current" :key="network.id" class="w-60 md:w-72 border m-4 shadow-xl rounded p-2 flex flex-col bg-green-300 place-items-center">
            <h2 class="text-2xl">{{ network.name }}</h2>
            <h3 class="text-xl">{{ network.cidr }}</h3>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-2">
              <div v-for="instance in network.instances" :key="instance.id" class="w-32 h-32 bg-blue-200 rounded">
                <div class="w-full h-full border shadow-xl">
                  <h2 class="text-xl">{{ instance.name }}</h2>
                  <h3 class="text-xl">{{ instance.ip }}</h3>
                  <div class="grid grid-cols-3 ml-2">
                    <div v-for="container in instance.containers"
                    :key="container.id" class="w-8">
                      <img :src="'./src/assets/container-icon.png'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full md:w-1/4 h-3/2 md:h-full shadow-xl m-6 border overflow-auto flex-col text-center"
      >
        <!--- Draggable elements --->
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Hébergeurs :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10 m-4" />
          <div class="flex flex-row gap-4 flex-grow basis-2">
            <div
              v-for="item in this.providers"
              :key="item.name"
              class="flex flex-col text-center"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <img
                :src="'./src/assets/' + item.name.toLowerCase() + '-icon.png'"
                class="h-16"
              />
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Réseaux :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.networks"
              :key="item.name"
              class="flex flex-col text-center h-16 w-16 border shadow-xl rounded bg-green-300"
              draggable
              @dragstart="startDrag($event, item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Instances :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.instances"
              :key="item.name"
              class="flex flex-col text-center h-16 w-16 border shadow-xl rounded bg-blue-300"
              draggable
              @dragstart="startDrag($event, item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Conteneurs :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.containers"
              :key="item.name"
              class="flex flex-col text-center"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <img :src="'./src/assets/container-icon.png'" class="h-16" />
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      containers() {
        return this.data.containers;
      },
      networks() {
        return this.data.networks;
      },
      instances() {
        return this.data.instances;
      },
      providers() {
        return this.data.providers;
      },
    },
    components: {},
    mounted() {},
    methods: {
      startDrag(event, item) {
        console.log(event, item.name);
      },
      onDrop(event, item) {
        console.log(event, item);
      },
    },
    data() {
      return {
        containers: [
          { id: 1, name: "nginx" },
          { id: 2, name: "traefik" },
          { id: 3, name: "mongo" },
        ],
        networks: [
          { id: 1, name: "default", cidr: "10.128.0.0/24" },
          { id: 2, name: "test", cidr: "10.132.0.0/24" },
          { id: 3, name: "test2", cidr: "10.143.0.0/24" },
        ],
        instances: [{ id: 1, name: "debian", image: "debian-10-buster" }],
        providers: [
          { id: 1, name: "GCP" },
          { id: 2, name: "AWS" },
        ],
        current: [{ id: 1, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 1, name: "debian", image: "debian-10-buster", containers: [{ id: 3, name: "mongo" }, { id: 3, name: "mongo" }, { id: 3, name: "mongo" }]}, { id: 2, name: "debian", image: "debian-10-buster" }, { id: 3, name: "debian", image: "debian-10-buster" },  { id: 3, name: "debian", image: "debian-10-buster" },  { id: 3, name: "debian", image: "debian-10-buster" }] },
        { id: 1, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 1, name: "debian", image: "debian-10-buster" }, { id: 2, name: "debian", image: "debian-10-buster" }, { id: 3, name: "debian", image: "debian-10-buster" }] },
        { id: 1, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 1, name: "debian", image: "debian-10-buster" }, { id: 2, name: "debian", image: "debian-10-buster" }, { id: 3, name: "debian", image: "debian-10-buster" }] }],
      };
    },
  };
</script>
<style scoped></style>
