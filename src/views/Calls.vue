<template>
    <div class="">
        <div class="flex pt-3" v-for="(pepole, index) in pepoles" :key="index">
            <div class="bg-no-repeat bg-center bg-cover flex h-12 items-center justify-center mx-4 photo px-5 rounded-full w-12"></div>
            <div :class="pepoles.length != (index + 1) ?'flex justify-between w-full border-b border-gray-800 mr-4 pb-3' : 'flex justify-between w-full mr-4 pb-3'">
                <div>
                    <h1 class="font-semibold text-gray-400">{{pepole.name}}</h1>
                    <span class="flex  text-gray-500" v-show="pepole.missed.bool == true">
                        <svg class="w-6 h-6 text-red-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z" fill="currentColor" /></svg>
                        ({{pepole.missed.count}}) {{pepole.callAt}}
                    </span>

                    <span class="flex  text-gray-500" v-show="pepole.income.bool == true">
                        <svg class="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z" fill="currentColor" /></svg>
                        {{pepole.income.count == 0 || 1 ? '' : '(' + pepole.income.count + ')'}} {{pepole.callAt}}
                    </span>

                    <span class="flex  text-gray-500" v-show="pepole.outgoing.bool == true">
                        <svg class="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z" fill="currentColor" /></svg>
                        ({{pepole.outgoing.count}}) {{pepole.callAt}}
                    </span>

                </div>
            
            <div class="flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" class="phone w-6 h-6 text-green-700"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pepoles: [
                        {name:'Panda', missed:{count:0,bool:false} ,income:{count:1,bool:true}, outgoing:{count:0,bool:false} ,callAt:'July 20, 9:10 PM'},
                        {name:'Guest',missed:{count:0,bool:false} ,income:{count:0,bool:false}, outgoing:{count:15,bool:true} ,callAt:'july 30, 11:30 AM'},
                        {name:'Khatab',missed:{count:2,bool:true} ,income:{count:0,bool:false}, outgoing:{count:0,bool:false} ,callAt:'Aug 12, 20:10 PM'},
                        {name:'Tester',missed:{count:0,bool:false} ,income:{count:0,bool:true}, outgoing:{count:0,bool:false} ,callAt:'Mar 29, 6:28 PM'},
                        {name:'Taz',missed:{count:0,bool:false} ,income:{count:0,bool:false}, outgoing:{count:10,bool:true} ,callAt:'Aug 9, 20:10 AM'},
      ]
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