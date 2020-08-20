<template>
  <div class="">
    <Nav/>
    <div class="mt-3 flex" v-for="(pepole, index) in pepoles" :key="index">
      <!-- image  -->
      <button class="bg-no-repeat bg-center bg-cover flex items-center justify-center focus:outline-none mx-4 px-5 rounded-full w-12 h-12 photo " type="button" style="transition: all .15s ease" @click="toggleModal()">
      </button>

      <div :class="pepoles.length != (index + 1) ?'flex justify-between w-full border-b border-gray-800 mr-4 pb-3' : 'flex justify-between w-full mr-4 pb-3'">
        <div class="">
          <h1 class="font-semibold text-gray-400" >{{pepole.name}}</h1>
          <span class="font-light text-gray-600" v-if="pepole.message.length > 20">{{pepole.message.substr(0,20)}}...</span>
           <span class="font-light text-gray-600" v-else>{{pepole.message}}</span>
        </div>
        <div class="">
          <p class="font-bold text-teal-500">{{pepole.time}}</p>
          <div :class="pepole.mute == true? 'pl-2' : ''"  class="flex items-center">
            <svg v-show="pepole.mute == true" viewBox="0 0 20 20" fill="currentColor" class="volume-off mr-1 text-gray-500 w-6 h-6"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
            <span :class="pepole.mute == false? 'ml-10' : ''" class="bg-teal-500 flex h-5 items-center justify-center rounded-full text-xs w-5">{{pepole.msgCount}}</span></div>
        </div>
      </div>

      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @mouseup="toggleModal()">
        <div class="relative w-auto my-6 mx-auto max-w-6xl mb-64">
        
          <div class="relative flex flex-col w-full outline-none focus:outline-none">
          
            <div class="-m-10 p-6 flex-auto">
            
                <div class="bg-center bg-cover flex items-center justify-center rounded-lg w-56 h-56 photo "></div>
                
            </div>

            <div class="-mt-2 -mx-4 bg-teal-green-dark text-teal-500 flex justify-around rounded-b-lg py-2">
              <svg viewBox="0 0 20 20" fill="currentColor" class="chat-alt w-5 h-5 cursor-pointer"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
              <svg viewBox="0 0 20 20" fill="currentColor" class="phone w-5 h-5 cursor-pointer"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <svg viewBox="0 0 20 20" fill="currentColor" class="video-camera w-5 h-5 cursor-pointer"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              <svg class="cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z" fill="currentColor" /><path d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="currentColor" /></svg>
            </div>
            
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
export default {
  components:{
    Nav
  },
  data() {
    return {
      showModal: false,
      pepoles: [
        {name:'Panda',message:'i need some food',time:'20:10 PM', mute:false, msgCount:6},
        {name:'Guest',message:'lemon lemon',time:'20:10 PM', mute:false, msgCount:8},
        {name:'Khatab',message:'f*ck sudan',time:'20:10 AM', mute:false, msgCount:4},
        {name:'Tester',message:'you are good',time:'20:10 PM', mute:true, msgCount:50},
        {name:'Taz',message:'listen to this and give me opinion',time:'20:10 AM', mute:false, msgCount:9},
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
