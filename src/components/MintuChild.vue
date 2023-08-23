<template>
<div class="text-2xl">
  <p>This is a Child Element! = {{this.name}}</p>

  <button class="btn-blue" v-on:click="username(name)">Get Name</button>
</div>
</template>


<script>
export default {
  name:'MintuChild',
  data(){
    return{
      mainname:"Hello Mintu",
    }

  },

  props:{
    name:String,
    username:Function,
  }

}

</script>

