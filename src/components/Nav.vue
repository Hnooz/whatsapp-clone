<template>
    <div class="bg-gray-light row">
        <div class="flex items-center justify-between pt-5 px-4">
          <h1 class="text-gray-500 font-semibold">Whatsapp</h1>
          <div class="flex text-gray-500">
            <button type="button" class="px-4 focus:outline-none hover:text-gray-400">
              <svg viewBox="0 0 20 20" fill="currentColor" class="search w-4 h-4"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>

            <Dropdown/>
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

      </div> 
</template>

<script>
import Dropdown from '../components/Dropdwon'
export default {
components:{
  Dropdown
}

}
</script>