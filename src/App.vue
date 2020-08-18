<template>
  <div class="container max-w-md mx-auto"> 
      <Nav/>
      <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../src/components/Nav.vue'
export default {
  components:{
    Nav
  }
}
</script>

<style src="./assets/css/app.css" scopeed>

</style>
