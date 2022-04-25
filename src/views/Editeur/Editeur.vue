<template>
  <div class="w-full">
    <div
      class="w-full h-full p-3 flex justify-center items-center bg-blue-50 md:flex-row flex-col"
    >
      <div
        class="w-full h-3/2 md:w-3/4 md:h-full shadow-xl m-4 border text-center overflow-clip"
      >
        <h1 class="text-3xl p-4">Infrastructure</h1>
        <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
        <div
          class="shadow-xl p-3 m-5 w-7/8 h-4/6 md:h-5/6 rounded flex flex-col md:grid md:grid-cols-2 gap-2 overflow-auto place-items-center"
          @drop='onDrop($event, "network")'
          @dragover.prevent
          @dragenter.prevent
          id="infra-container"
        >
          <div v-for="network in this.current" :key="network.id" class="w-60 md:w-72 border m-4 shadow-xl rounded p-2 flex flex-col bg-green-300 place-items-center"
            draggable="true" :id='"placed-network-" + network.id'
            @dragstart="startDrag($event, 'network-' + network.id)">
            <div class="flex flex-row">
              <h2 class="text-2xl">{{ network.name }}</h2>
              <Network :network="network" />
            </div>
            <h3 class="text-xl">{{ network.cidr }}</h3>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-2 p-2" :id='"network-" + network.id'>
              <div v-for="instance in network.instances" :key="instance.id" class="w-32 h-32 bg-blue-200 rounded"
              draggable="true" :id='"placed-instance-" + instance.id'
              @dragstart="startDrag($event, 'instance-' + instance.id)">
                <div class="w-full h-full border shadow-xl"  :id='"instance-" + instance.id'>
                  <div class="flex flex-row justify-center">
                    <h2 class="text-xl">{{ instance.name }}</h2>
                    <div class="w-auto">
                      <Vm :instance="instance" :net-key="network.id" />
                    </div>
                  </div>
                  <h3 class="text-xl">{{ instance.ip }}</h3>
                  <div class="grid grid-cols-3 ml-2">
                    <Container v-for="container in instance.containers" :key="container.id" />
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
          <h1 class="text-2xl p-2">Hébergeurs</h1>
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
          <h1 class="text-2xl p-2">Réseaux</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.networks"
              :key="item.name"
              class="align-middle text-center h-16 w-16 border shadow-xl rounded bg-green-300 cursor-move"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
            {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Instances</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.instances"
              :key="item.name"
              class="flex flex-col text-center h-16 w-16 border shadow-xl rounded bg-blue-300"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl p-2">Conteneurs</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10" />
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div
              v-for="item in this.containers"
              :key="item.name"
              class="flex flex-col text-center"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              <img :src="'./src/assets/container-icon.png'" class="h-16" />
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="m-2 p-4 w-232 h-32 bg-gray-700 rounded opacity-80 z-50">
          <svg class="w-full h-full m-auto z-30" viewBox="-15 -15 60 60" id="bin" @drop='onDrop($event, "bin")'
          @dragover.prevent
          @dragenter.prevent>
            <!--- trash can --->
              <path height="100%" width="100%"
                fill="#ffffff"
                d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 
                .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 
                1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
              />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Network from "../Modals/Network.vue";
  import Vm from "../Modals/Vm.vue";
  import Container from "../Modals/Container.vue";

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
    components: {
      Network,
      Vm,
      Container
    },
    mounted() {},
    methods: {
      startDrag(event, item) {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        //item id
        event.dataTransfer.setData('item', JSON.stringify(item))
      },
      onDrop(event, source) {
        let item = JSON.parse(event.dataTransfer.getData('item'))
        if (item.type == "network" && event.srcElement.id == "infra-container") {
          let network = JSON.parse(JSON.stringify(this.networks.find(network => network.id == item.id)));
          network.id = this.current.length;
          this.current.push(network);
        }
        else if (item.type == "instance" && event.srcElement.id.includes("network-")) {
          //copy object
          let instance = JSON.parse(JSON.stringify(this.instances.find(instance => instance.id == item.id)));
          //let instance = this.instances.find(instance => instance.id == item.id);
          let instances = this.current.find(network => network.id == event.srcElement.id.split('-')[1]).instances;
          instance.id = instances.length;
          instances.push(instance);
        }
        else if (item.type == "container" && event.srcElement.id.includes("instance-")) {
          //find the parent of srcElement
          let parent = event.srcElement.parentElement.parentElement;
          let network = this.current.find(network => network.id == parent.id.split('-')[1]);
          let instance = network.instances.find(instance => instance.id == event.srcElement.id.split('-')[1]);
          let container = JSON.parse(JSON.stringify(this.containers.find(container => container.id == item.id)));
          container.id = instance.containers.length;
          instance.containers.push(container);
        }
        else if (event.srcElement.id == "bin") {
          let item_id = item.split('-')[1];
          let item_type = item.split('-')[0];
          console.log(item_id, item_type);
          // delete the element
          if (item_type == "network") {
            console.log(this.current.find(network => network.id == item_id));
            for (let i = 0; i < this.current.length; i++) {
              if (this.current[i].id == item_id) {
                this.current.splice(i, 1);
                break;
              }
            }
          }
          else if (item_type == "instance") {
            let network = this.current.find(network => network.id == event.srcElement.parentElement.id.split('-')[1]);
            network.instances.pop(network.instances.find(instance => instance.id == item_id));
          }
          else if (item_type == "container") {
            let network = this.current.find(network => network.id == event.srcElement.parentElement.parentElement.id.split('-')[1]);
            let instance = network.instances.find(instance => instance.id == event.srcElement.parentElement.id.split('-')[1]);
            instance.containers.pop(instance.containers.find(container => container.id == item_id));
          }
        }
      },
    },
    data() {
      return {
        containers: [
          { id: 0, name: "nginx", type:'container'   },
          { id: 1, name: "traefik", type:'container' },
          { id: 2, name: "mongo", type:'container'   },
        ],
        networks: [
          { id: 0, name: "default", cidr: "10.128.0.0/24", type:'network', instances:[]},
          { id: 1, name: "test", cidr: "10.132.0.0/24", type:'network', instances:[] },
          { id: 2, name: "test2", cidr: "10.143.0.0/24", type:'network', instances:[] },
        ],
        instances: [{ id: 0, name: "debian", image: "debian-10-buster", type:'instance', containers:[] }],
        providers: [
          { id: 0, name: "GCP", type:'provider' },
          { id: 1, name: "AWS", type:'provider' },
        ],
        current: [{ id: 0, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 0, name: "debian", image: "debian-10-buster", containers: [{ id: 1, name: "mongo" }, { id: 2, name: "mongo" }, { id: 3, name: "mongo" }]}, { id: 1, name: "debian", image: "debian-10-buster", containers:[] }, { id: 2, name: "debian", image: "debian-10-buster", containers:[] },  { id: 3, name: "debian", image: "debian-10-buster", containers:[] },  { id: 4, name: "debian", image: "debian-10-buster", containers:[] }] },
        { id: 1, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 0, name: "debian", image: "debian-10-buster", containers:[] }, { id: 1, name: "debian", image: "debian-10-buster", containers:[] }, { id: 2, name: "debian", image: "debian-10-buster", containers:[] }] },
        { id: 2, name: "default", cidr: "10.128.0.0/24", instances: [{ id: 0, name: "debian", image: "debian-10-buster", containers:[] }, { id: 1, name: "debian", image: "debian-10-buster", containers:[] }, { id: 2, name: "debian", image: "debian-10-buster", containers:[] }] }],
      };
    },
  };
</script>

<style scoped>
</style>
