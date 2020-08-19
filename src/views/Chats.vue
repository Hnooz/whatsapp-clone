<template>
  <div class="">
    <div class="mt-3 flex" v-for="(pepole, index) in pepoles" :key="index">
      <div class="bg-no-repeat bg-center bg-cover flex items-center justify-center mx-4 px-5 rounded-full w-12 h-12 photo ">
        <!-- <img src="../assets/img/profile.jpg" alt="" class="w-16 rounded-full mx-4 bg-cover"> -->
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
            <svg v-show="pepole.mute == true" viewBox="0 0 20 20" fill="currentColor" class="volume-off mr-1 text-gray-500 w-6 h-6"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
            <span :class="pepole.mute == false? 'ml-10' : ''" class="bg-teal-500 flex h-5 items-center justify-center rounded-full text-xs w-5">{{pepole.msgCount}}</span></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {

  data() {
    return {
      pepoles: [
        {name:'Panda',message:'i need some food',time:'20:10 PM', mute:false, msgCount:6},
        {name:'Guest',message:'lemon lemon',time:'20:10 PM', mute:false, msgCount:8},
        {name:'Khatab',message:'f*ck sudan',time:'20:10 AM', mute:false, msgCount:4},
        {name:'Tester',message:'you are good',time:'20:10 PM', mute:true, msgCount:50},
        {name:'Taz',message:'listen to this and give me opinion',time:'20:10 AM', mute:false, msgCount:9},
      ]
    }
  },


}
</script>

<style scoped>
.photo{
  background-image: url('../assets/img/profile.jpg');
}
</style>