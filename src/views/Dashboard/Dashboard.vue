<template>
    <div class="w-full gap-2 p-8">
      <div class="w-full mb-2">
        <div class="flex justify-between">
          <div class="text-2xl font-semibold ml-2">
            VMs
          </div>
          <div class="flex flex-row">
            <input type="text" name="name" class="border-b-2 border-gray-600 focus:border-purple-600 border-l-0 border-r-0 border-t-0 bg-violet-50 outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-scroll gap-5 p-2 shadow-xl bg-white grid grid-flow-col">
      <div v-for="machine in this.vms" :key="machine.id" class="gap-1 mt-2 w-64">
        <div class="flex-row">
          <img class="w-1/2 m-auto" src="../../assets/vm-icon.png" />
        </div>
        <div class="flex-row text-center">
          <span class="text-xl font-semibold"> {{ machine.name }} </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-xl font-semibold"> {{ machine.region }} </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-lg"> {{ machine.vcpus }} vCPUs </span>
          <span class="text-lg"> {{ machine.ram }} GO RAM </span>
        </div>
        <div class="flex-row text-center">
          <span class="text-lg"> {{ machine.disks }} disques </span>
          <span class="text-lg"> {{ machine.os }} </span>
        </div>
      </div>
    </div>

    <div class="md:grid md:grid-flow-row-dense grid-cols-4 mt-12">
      <div class="md:col-span-3 mb-12">
        <div class="flex justify-between mb-2">
          <div class="text-2xl font-semibold ml-2">Réseaux</div>
          <div class="flex flex-row">
            <input
              type="text"
              name="name"
              class="border-b-2 border-gray-600 bg-violet-50 outline-none"
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
            v-for="net in this.networks"
            :key="net.id"
            class="gap-1 mt-2 w-64"
          >              
            <img class="w-32 m-auto" src="../../assets/network-icon.png" />
            <div class="md:text-xl text-sm font-semibold text-center">
              {{ net.name }}
            </div>
            <div class="md:text-base text-xs text-center font-normal">
              {{ net.region }}
            </div>
            <div
              class="md:text-xl text-sm text-center font-semibold"
            >
              {{ net.cidr }}
            </div>
            <div
              class="md:text-xl text-sm text-center font-normal"
            >
              {{ net.description }}
            </div>
            <div
              class="md:text-xl text-sm text-center font-semibold"
            >
              Règles de pare feu
            </div>
            <div class="md:text-base text-xs text-center font-normal">
              {{ net.rules }}
            </div>
          </div>
        </div>
  
      </div>

      <div class="md:ml-8">
        <div class="flex justify-between mb-2">
          <div class="text-2xl font-semibold ml-2">Hébergeurs</div>
        </div>
        <div class="grid grid-cols-4 p-2 gap-4 shadow-xl bg-white">
          <div>
            <img src="../../assets/gcp-icon.png" />
          </div>
          <span class="col-span-3 text-xl"> Google Cloud Platform </span>
          <div>
            <img src="../../assets/aws-icon.png" />
          </div>
          <span class="col-span-3 text-xl"> Amazon Web Services </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default{
   components:{},
   mounted(){},
   data:()=>({
     vms:[{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"},{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"},{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"},{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"},{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"},{id:1,name:"iac-vm-1",region:"europe-west-1b",vcpus:2,ram:8,disks:3,os:"debian"}],
     networks:[{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},{id:1,name:"iac-net-1",region:"europe-west-1",cidr:"10.128.0.0/24",description:"Description courte du réseau...",rules:"Routage mondial | régional"},]})
     };
</script>
<style scoped></style>
