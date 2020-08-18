<template>
  <div class="container max-w-md mx-auto"> 
      <div class="bg-gray-800 row">
        <div class="flex items-center justify-between pt-5 px-4">
          <h1 class="text-gray-600 font-semibold">Whatsapp</h1>
          <div class="flex text-gray-600">
            <i class="px-4">
              <svg viewBox="0 0 20 20" fill="currentColor" class="search w-4 h-4"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </i>
            <i>
              <svg viewBox="0 0 20 20" fill="currentColor" class="dots-vertical w-4 h-4"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </i>
          </div>
        </div>
        <div class="pt-3 flex justify-between">

          <div class="border-b-2 border-teal-500 text-gray-500 w-1/3 pb-3">
            <router-link class="px-10" to="/" >Chats</router-link>
          </div>
          
          <div class="border-b-2 border-teal-500 text-gray-500 w-1/3 pb-3">
            <router-link class="px-10" to="/status">Status</router-link>
          </div>
          
          <div class="border-b-2 border-teal-500 text-gray-500 w-1/3 pb-3">
            <router-link class="px-10" to="/calls">Calls</router-link>
          </div>
        </div>
      </div> 

      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats : true,
      status: false,
      calls: false
    }
  },

}
</script>

<style src="./assets/css/app.css">
</style>
