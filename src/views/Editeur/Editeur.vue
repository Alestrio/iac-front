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
          class="shadow-xl p-3 m-5 w-7/8 h-4/6 md:h-5/6 rounded flex flex-col md:grid md:grid-cols-2 gap-2 overflow-auto place-items-center
          "
          @drop='onDrop($event, "network")'
          @dragover.prevent
          @dragenter.prevent
          id="infra-container"
        >
          <div v-for="network in this.current" :key="network.id" class="w-60 md:w-72 border m-4 shadow-xl rounded p-2 flex flex-col bg-red-300 place-items-center"
            draggable="true" :id='"placedNetwork-" + network.id'
            @dragstart="startDrag($event, 'network-' + network.id)">
            <div class="flex flex-row">
              <h2 class="text-2xl">{{ network.name }}</h2>
              <GoogleNetwork v-if="network.provider.name == 'GCP'" :network="network" :nid="network.id" :apiNet="this.to_send.find(n => n.id == network.id)"
               @send-network="updateGCPNetwork" />
              <AmazonNetwork v-if="network.provider.name == 'AWS'" :network="network" :nid="network.id" :apiNet="this.to_send.find(n => n.id == network.id)"
               @send-network="updateAWSNetwork" />
            </div>
            <div class="flex flex-row">
              <img
                v-if="network.provider.name"
                :src="'./src/assets/' + network.provider.name.toLowerCase() + '-icon.png'"
                class="h-16 mt-2"
              />
              <div v-else class="box-border h-16 w-16 p-4 border-4 border-indigo-50 mt-2"></div>
            </div>
            <h3 class="text-xl">{{ network.cidr }}</h3>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-2 p-2" :id='"network-" + network.id'>
              <div v-for="instance in network.instances" :key="instance.id" class="w-32 h-32 bg-indigo-50 rounded-2xl overflow-auto"
              draggable="true" :id='"placed-instance-" + instance.id'
              @dragstart="startDrag($event, 'instance-' + instance.id)">
                <div class="w-full h-full shadow-xl p-1"  :id='"instance-" + instance.id'>
                  <div class="flex flex-row justify-center">
                    <h2 class="text-xl">{{ instance.name }}</h2>
                    <div class="w-auto">
                      <Vm :instance="instance" />
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
        <button class="w-full h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full" @click="sendConfig">
          Send config 
        </button>
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
              class="align-middle text-center h-16 w-16 border shadow-xl rounded bg-red-300 cursor-move"
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
              class="flex flex-col text-center h-16 w-16 border shadow-xl bg-indigo-50 rounded-2xl"
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
              <img :src="'./src/assets/container-icon.png'" class="h-16 w-16" />
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="m-2 p-4 w-232 h-32 bg-gray-700 rounded opacity-80">
          <svg class="w-full h-full m-auto" viewBox="-15 -15 60 60" id="bin" @drop='onDrop($event, "bin")'
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
  import Vm from "../Modals/Vm.vue";
  import Container from "../Modals/Container.vue";
  import AmazonNetwork from "../Modals/AmazonNetwork.vue";
  import GoogleNetwork from "../Modals/GoogleNetwork.vue";

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
      GoogleNetwork,
      AmazonNetwork,
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
        else if (item.type == "provider" && event.srcElement.id.includes("network-")) {
          let network = this.current.find(network => network.id == event.srcElement.id.split('-')[1]);
          network.provider = this.providers.find(provider => provider.id == item.id);
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
      updateGCPNetwork(net) {
        console.log(net);
        let $net = this.networks.find(network => network.id == net.id);
        let inst = [];
        if ($net) {
          inst = $net.instances;
        }

        this.to_send.push(net);
        let cidrs = "";
        for (let i of net.subnets) {
          cidrs += i.ip_cidr_range + "\n";
        }
        $net = {
          id: net.id,
          name: net.name,
          cidr: cidrs,
          provider: { id: 0, name: "GCP", type:'provider' },
          instances: inst
        };
        // replace the old network with the new one
        this.current.splice(this.current.findIndex(network => network.id == net.id), 1, $net);
      },
      updateAWSNetwork(net) {
        console.log(net);
        let $net = this.networks.find(network => network.id == net.id);
        let inst = [];
        if ($net) {
          inst = $net.instances;
        }

        this.to_send.push(net);
        $net = {
          id: net.id,
          name: net.name,
          cidr: net.ip_cidr_range,
          provider: { id: 0, name: "AWS", type:'provider' },
          instances: inst
        };
        // replace the old network with the new one
        this.current.splice(this.current.findIndex(network => network.id == net.id), 1, $net);
      },
    },
    data() {
      return {
        containers: [
          { id: 0, name: "Conteneur", type:'container' },
        ],
        networks: [
          { id: 0, name: "", cidr: "", type:'network', instances:[], provider:{name: ''} },
          { id: 1, name: "Par défaut", cidr: "", type:'network', instances:[], provider:{name: ''} },
        ],
        instances: [{ id: 0, name: "", image: "", type:'instance', containers:[], disks:[{id: 0}], ports:{}, services:{} }],
        providers: [
          { id: 0, name: "GCP", type:'provider' },
          { id: 1, name: "AWS", type:'provider' },
        ],
        current: [
          { id: 125768, name: "default", cidr: "10.128.0.0/24", provider:{id: 0, name: 'GCP', type: 'provider'}, instances: [{ id: 0, name: "debian", image: "debian-10-buster", containers: [{ id: 1, name: "mongo" }, { id: 2, name: "mongo" }, { id: 3, name: "mongo" }]}, { id: 1, name: "debian", image: "debian-10-buster", containers:[] }, { id: 2, name: "debian", image: "debian-10-buster", containers:[] },  { id: 3, name: "debian", image: "debian-10-buster", containers:[] },  { id: 4, name: "debian", image: "debian-10-buster", containers:[] }] },
        ],
        to_send: [],
      };
    },
    validations: {
      to_send: {
        required: true,
      },
    },
  };
</script>

<style scoped>

</style>
