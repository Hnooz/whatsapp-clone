<template>
    <div class="bg-gray-light row">
        <div class="flex items-center justify-between pt-5 px-4">
          <h1 class="text-gray-500 font-semibold">Whatsapp</h1>
          <div class="flex text-gray-500">
            <button type="button" class="px-4 focus:outline-none hover:text-gray-400">
              <svg viewBox="0 0 20 20" fill="currentColor" class="search w-4 h-4"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>
            <button type="button" class="focus:outline-none hover:text-gray-400" style="transition: all .15s ease" @click="toggleModal()">
              <svg viewBox="0 0 20 20" fill="currentColor" class="dots-vertical w-4 h-4"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </div>
        </div>
        <div class="pt-3 flex justify-between route-nav">

          <div :class="$route.name == 'Chats' ?'border-b-2 border-teal-500 text-teal-500 w-1/3 pb-3 route-nav': 'text-gray-500 w-1/3 pb-3'">
            <router-link class="px-10" to="/" >Chats</router-link>
          </div>
          
          <div :class="$route.name == 'Status' ?'border-b-2 border-teal-500 text-teal-500 w-1/3 pb-3 route-nav': 'text-gray-500 w-1/3 pb-3'">
            <router-link class="px-10" to="/status">Status</router-link>
          </div>
          
          <div :class="$route.name == 'Calls'?'border-b-2 border-teal-500 text-teal-500 w-1/3 pb-3 route-nav': 'text-gray-500 w-1/3 pb-3'">
            <router-link class="px-10" to="/calls">Calls</router-link>

          </div>
        </div>

         <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @mouseup="toggleModal()">
        <div class="mb-auto ml-48 relative">
        
          <div class="relative flex flex-col w-full outline-none focus:outline-none" v-show="$route.name == 'Chats'">
            
            <div class="-mr-3 mt-1 bg-gray-light flex-auto h-48 ml-12 p-3 w-48">
              <ul class="text-gray-300">
                <li class="pb-3">New group</li>
                <li class="pb-3">New broadcast</li>
                <li class="pb-3">WhatsApp Web</li>
                <li class="pb-3">Starrted messages</li>
                <li class="pb-6">
                  <router-link to="/settings">Settings</router-link>
                  
                  </li>
              </ul>
            </div>
          </div>

          <div class="relative flex flex-col w-full outline-none focus:outline-none" v-show="$route.name == 'Status'">
            
            <div class="-mr-3 mt-1 bg-gray-light flex-auto h-20 ml-12 p-3 w-48">
              <ul class="text-gray-300">
                <li class="pb-3">Status privacy</li>
                <li class="pb-6">
                  <router-link to="/settings">Settings</router-link>
                  
                  </li>
              </ul>
            </div>
          </div>

          <div class="relative flex flex-col w-full outline-none focus:outline-none" v-show="$route.name == 'Calls'">
            
            <div class="-mr-3 mt-1 bg-gray-light flex-auto h-20 ml-12 p-3 w-48">
              <ul class="text-gray-300">
                <li class="pb-3">Clear call log</li>
                <li class="pb-6">
                  <router-link to="/settings">Settings</router-link>
                  
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

      </div> 
</template>

<script>
export default {

data() {
  return {
    showModal: false,
  }
},

methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    },
    closeModal(){
      this.showModal = !this.showModal;
    }

    
  },

}
</script>