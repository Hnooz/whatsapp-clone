<template>
  <div>
    <Nav/>

    
    <div>
      
      <div class="flex items-center justify-between mt-2 mr-4">
        <div class="flex">
          <button class="flex items-center justify-center w-12 h-12 px-5 mx-4 bg-center bg-no-repeat bg-cover border-2 border-gray-300 rounded-full outline-none focus:outline-none photo" type="button" style="transition: all .15s ease" v-on:click="toggleModal()"></button>
          <div>
            <h1 class="font-medium text-gray-300">My status</h1>
            <span class="text-sm text-gray-600">Today, 12:56 AM</span>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-600 dots-horizontal"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </div>
      </div>
    <div class="mt-2">
      <h1 class="mx-4 my-2 text-sm font-medium text-gray-500">Recent updates</h1>
      <div v-for="(pepole, index) in pepoles" :key="index">
        <div class="flex pb-3" v-show="pepole.show.recent == true">
            <button class="flex items-center justify-center w-12 h-12 px-5 mx-4 bg-center bg-no-repeat bg-cover border-2 border-gray-300 rounded-full outline-none focus:outline-none photo" type="button" style="transition: all .15s ease" v-on:click="toggleModal()"></button>
            <div :class="pepoles.length != (index + 1) ? 'border-b border-gray-800 mr-3 pb-2 w-full' : 'mr-3 pb-2 w-full'">
              <h1 class="pl-1 font-medium text-gray-300">{{pepole.name}}</h1>
              <span class="pl-1 text-sm text-gray-600">{{pepole.time}}</span>
            </div>
        </div>
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" @mouseup="toggleModal()">
          <div class="relative w-auto max-w-6xl mx-auto my-6">        
            <div class="relative flex flex-col w-full outline-none focus:outline-none">
              <div class="flex-auto p-6 -m-10">            
                  <div class="flex items-center justify-center w-64 h-64 bg-center bg-cover rounded-lg photo "></div>            
              </div>
            </div>
          </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
        
      </div>


      <h1 class="mx-4 my-2 text-sm font-medium text-gray-500">Viewed updates</h1>

       <div v-for="(pepole, index) in pepoles" :key="index">
          <div class="flex pb-3" v-show="pepole.show.viewed == true">
              <button class="flex items-center justify-center w-12 h-12 px-5 mx-4 bg-center bg-no-repeat bg-cover border-2 border-gray-300 rounded-full outline-none focus:outline-none photo" type="button" style="transition: all .15s ease" v-on:click="toggleModal()"></button>
              <div :class="pepoles.length != index+2  ? 'border-b border-gray-800 mr-3 pb-2 w-full' : 'mr-3 pb-2 w-full'">
                <h1 class="pl-1 font-medium text-gray-300">{{pepole.name}}</h1>
                <span class="pl-1 text-sm text-gray-600">{{pepole.time}}</span>
              </div>
          </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" @mouseup="toggleModal()">
          <div class="relative w-auto max-w-6xl mx-auto my-6">        
            <div class="relative flex flex-col w-full outline-none focus:outline-none">            
              <div class="flex-auto p-6 -m-10">            
                  <div class="flex items-center justify-center w-64 h-64 bg-center bg-cover rounded-lg photo "></div>            
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
      </div>
    </div>


      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" @mouseup="toggleModal()">
        <div class="relative w-auto max-w-6xl mx-auto my-6">        
          <div class="relative flex flex-col w-full outline-none focus:outline-none">          
            <div class="flex-auto p-6 -m-10">            
                <div class="flex items-center justify-center w-64 h-64 bg-center bg-cover rounded-lg photo"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>

  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
import Nav from '../components/Nav.vue'
export default {
  name: "large-modal",
    components: {
      Nav
    // Carousel,
    // Slide
  },

  data() {
    return {
      showModal: false,
       pepoles: [
        {name:'Panda', show:{viewed:true, recent:false},time:'20:10 PM'},
        {name:'Guest', show:{viewed:true, recent:false},time:'20:10 PM'},
        {name:'Khatab',show:{viewed:false,recent:true},time:'Today, 4:00 PM'},
        {name:'Tester',show:{viewed:true, recent:false},time:'20:10 PM'},
        {name:'Taz',   show:{viewed:false,recent:true},time:'20:10 AM'},
      ]
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

<style scoped>
.photo{
  background-image: url('../assets/img/profile.jpg');
  background-repeat: no-repeat;
}
</style>