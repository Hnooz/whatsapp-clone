<template>
    <div>
        <div class="flex items-center justify-center w-full">
  
        <!-- Toggle Button -->
        <label 
            for="toogleA"
            class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
            <!-- input -->
                <input id="toogleA" type="checkbox" class="hidden" />
                <!-- line -->
                <div @click="isChecked"
                    :class="checked == true ? 'bg-teal-600':'bg-gray-400'"
                    class="toggle__line w-10 h-4  rounded-full shadow-inner">
                </div>
                <!-- dot -->
                <div @click="isChecked" id="toggle__dot" class="absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
        </label>
        
        </div>

    </div>
</template>

<script>
export default {
    props:{
        isCheck:Boolean
    },
    data() {
        return {
            checked: this.isCheck
        }
    },
    methods: {
        isChecked(){
            this.checked = !this.checked
        }
    },

    
}
</script>
<style scoped>
#toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ #toggle__dot {
  transform: translateX(100%);
  background-color: #285E61;
}
</style>