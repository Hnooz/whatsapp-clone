<template>
    <div>
        <div class="relative inline-block text-left">
            <div>
                <span class="rounded-md shadow-sm">
                <button @click="toggleModal" type="button" 
                        class="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm leading-5 font-medium hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    
                <svg viewBox="0 0 20 20" fill="currentColor" class="dots-vertical w-4 h-4"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
                </span>
            </div>

            <div v-if="isOpen" class="-mr-3 -mt-4 absolute origin-top-right right-0 rounded-md shadow-lg top-0 w-56" @mouseleave="toggleModal()">
                <div class="rounded-md bg-gray-light shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div class="py-1" v-show="$route.name == 'Chats'">            
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">New group</a>
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">New broadcast</a>
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">WhatsApp Web</a>
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Starrted messages</a>
                    <router-link to="/settings" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Settings</router-link>
                </div>
                <div class="py-1" v-show="$route.name == 'Status'">            
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Status privacy</a>
                    <router-link to="/settings" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Settings</router-link>
                </div>
                <div class="py-1" v-show="$route.name == 'Calls'">            
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Clear call log</a>
                    <router-link to="/settings" class="block px-4 py-2 text-sm leading-5 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-200">Settings</router-link>
                </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen:false
        }
    },
    methods: {
    toggleModal(){
      this.isOpen = !this.isOpen;
    },
    closeModal(){
      this.isOpen = !this.isOpen;
    }

    
  },
}
</script>