<template>
  <div class="">
    <Nav/>
    <div class="flex mt-3" v-for="(pepole, index) in pepoles" :key="index">
      <div class="w-12 h-12 py-1 mx-4">
        <img :src="pepole.url" class="w-full h-full rounded-full"  style="transition: all .15s ease" @click="toggleModal(pepole)"/>
      </div>
      <div :class="pepoles.length != (index + 1) ?'flex justify-between w-full border-b border-gray-800 mr-4 pb-3' : 'flex justify-between w-full mr-4 pb-3'">
        <div class="">
          <h1 class="font-semibold text-gray-400" >{{pepole.name}}</h1>
          <span class="font-light text-gray-600" v-if="pepole.message.length > 20">{{pepole.message.substr(0,20)}}...</span>
           <span class="font-light text-gray-600" v-else>{{pepole.message}}</span>
        </div>
        <div class="">
          <p class="font-bold text-teal-500">{{pepole.time}}</p>
          <div :class="pepole.mute == true? 'pl-2' : ''"  class="flex items-center">
            <svg v-show="pepole.mute == true" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 mr-1 text-gray-500 volume-off"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
            <span :class="pepole.mute == false? 'ml-10' : ''" class="flex items-center justify-center w-5 h-5 text-xs bg-teal-500 rounded-full">{{pepole.msgCount}}</span></div>
        </div>
      </div>

      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" @mouseup="closeModal()">
        <div class="relative w-auto max-w-6xl mx-auto my-6 mb-64">
        
          <div class="relative flex flex-col w-full outline-none focus:outline-none">
          
            <div class="flex-auto p-6 -m-10">
            
                <div class="flex items-center justify-center w-56 h-56 rounded-lg">
                   <img :src="img" class="w-full h-full"  style="transition: all .15s ease"/>
                </div>
                
            </div>

            <div class="flex justify-around py-2 -mx-4 -mt-2 text-teal-500 rounded-b-lg bg-teal-green-dark">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cursor-pointer chat-alt"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cursor-pointer phone"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cursor-pointer video-camera"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              <svg class="cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z" fill="currentColor" /><path d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="currentColor" /></svg>
            </div>
            
          </div>
        </div>
      </div>
      <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
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
      img:'',
      pepoles: [
        {name:'Panda',message:'look what i have done',time:'10:48 PM', mute:false, msgCount:6,url:require('../assets/img/screen-post-jGpgpFsCECc-unsplash.jpg'),},
        {name:'Guest',message:'lemon lemon',time:'19:30 PM', mute:false, msgCount:2,url:require('../assets/img/james-owen-442400-unsplash.jpg'),},
        {name:'KH Tap',message:'nigga',time:'7:17 AM', mute:false, msgCount:4,url:require('../assets/img/emmanuel-1220413-unsplash.jpg'),},
        {name:'MOBAPP & WEBD Community',message:'Hawa:great job',time:'20:10 AM', mute:true, msgCount:90,url:require('../assets/img/kevin-ku-392517-unsplash.jpg'),},
        {name:'Taz',message:'i drop new beat',time:'5:08 PM', mute:false, msgCount:3,url:require('../assets/img/freezydreamin-1491615-unsplash.jpg'),},
        {name:'Arkadaşlar 🪐💥',message:'Me:ok done',time:'20:10 PM', mute:true, msgCount:81,url:require('../assets/img/brandi-redd-414738-unsplash.jpg'),},
        {name:'koala',message:'send me food recap',time:'10:10 AM', mute:false, msgCount:1,url:require('../assets/img/omid-armin-AFVJ46r0jP4-unsplash.jpg'),},
      ]
    }
  },

  methods: {
    toggleModal(pepole){
      this.img = pepole.url
      this.showModal = !this.showModal;
    },
    closeModal(){
      this.img = ''
      this.showModal = !this.showModal;
    }
  },


}
</script>

<style scoped>
.photo{
  background-image: url('../assets/img/emmanuel-1220413-unsplash.jpg');
  background-repeat: no-repeat;
}
</style>
