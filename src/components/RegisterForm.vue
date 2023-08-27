<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RegisterForm",
  data() {

    return{
      login:{
        name:'',
        email:'',
        passport:'',
        technology:[],

      }
    }


  },
  methods:{
    formSub(){

      console.warn('Form Submited',this.login);
     // this.$refs.regiform.preventDefault();

    }

  }


})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div class="lg:w-2/4 md:w-3/4 sm:w-full mx-auto">
      <form ref="regiform" >
        <label for="name" >Enter Your Name:</label>
        <input type="text" name="name" id="name" v-model.lazy="login.name">
        <label for="email">Enter Email:</label>
        <input type="email" name="email" id="email" v-model.lazy="login.email">
        <label for="pass">Password :</label>
        <input type="password" name="name" id="pass" v-model.lazy="login.passport">
        <label for="technology">Java : </label>
        <input class="mr-3" type="checkbox" name="java" value="java" id="technology" v-model.lazy="login.technology">
        <label for="python">Python : </label>
        <input class="mr-3" type="checkbox" name="python" value="python" id="python" v-model.lazy="login.technology">
        <button class="my-4" v-on:click.prevent="formSub" type="button">Submit </button>
        <button class="my-4 bg-green-500 hover:bg-red-300" type="reset">Reset All</button>
      </form>




    </div>

    <div class="text-2xl font-bold">{{login}}</div>
    </div>



</template>

<style scoped>

</style>