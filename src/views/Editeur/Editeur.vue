<template>
  <div class="w-full">
    <div class="w-full h-full p-4 flex justify-center items-center bg-blue-50 md:flex-row flex-col">
      <div class="w-full md:w-3/4 h-full shadow-xl m-6 border overflow-auto text-center">
        <h1 class="text-3xl p-4">Infrastructure :</h1>
        <hr class="border-b-1 border-blue-100 ml-10 mr-10">
        <div class="flex m-5">

        </div>
      </div>
      <div class="w-full md:w-1/4 h-full shadow-xl m-6 border overflow-auto flex-col text-center">
        <!--- Draggable elements --->
        <div class='flex flex-col gap-2'>
          <h1 class="text-2xl p-2">Hébergeurs :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10 m-4">
          <div class="flex flex-row gap-4 flex-grow basis-2">
            <div v-for='item in this.providers' :key="item.name" class="flex flex-col text-center">
              <img :src="'./src/assets/' + item.name.toLowerCase() + '-icon.png'" class="h-16">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class='flex flex-col gap-2'>
          <h1 class="text-2xl p-2">Instances :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10">
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div v-for='item in this.instances' :key="item.name" class="flex flex-col text-center">
              <img :src="'./src/assets/vm-icon.png'" class="h-16">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class='flex flex-col gap-2'>
          <h1 class="text-2xl p-2">Conteneurs :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10">
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div v-for='item in this.containers' :key="item.name" class="flex flex-col text-center">
              <img :src="'./src/assets/container-icon.png'" class="h-16">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class='flex flex-col gap-2'>
          <h1 class="text-2xl p-2">Réseaux :</h1>
          <hr class="border-b-1 border-blue-100 ml-10 mr-10">
          <div class="flex flex-row gap-4 flex-grow basis-2 m-4">
            <div v-for='item in this.networks' :key="item.name" class="flex flex-col text-center">
              <div class="h-16 w-16 border shadow-xl">
                {{ item.name }}
              </div>
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
    containers () {
      return this.data.containers
    },
    networks () {
      return this.data.networks
    },
    instances () {
      return this.data.instances
    },
    providers () {
      return this.data.providers
    },
  },
  components: {

  },
  mounted() {

  },
  data () {
    return {
      containers: [
        {
          id: 1,
          name: 'nginx',
        },
        {
          id: 2,
          name: 'traefik',
        },
        {
          id: 3,
          name: 'mongo'
        }
      ],
      networks: [
        {
          id: 1,
          name: 'default',
          cidr: '10.128.0.0/24',
        },
        {
          id: 2,
          name: 'test',
          cidr: '10.132.0.0/24',
        },
        {
          id: 3,
          name: 'test2',
          cidr: '10.143.0.0/24',
        }
      ],
      instances: [
        {
          id: 1,
          name: 'debian',
          image: 'debian-10-buster',
        }
      ],
      providers: [
        {
          id: 1,
          name: 'GCP',
        },
        {
          id: 2,
          name: 'AWS',
        }
      ]
    }
  },
};
</script>
<style scoped>

</style>
