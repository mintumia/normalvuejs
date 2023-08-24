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
        technology:'',
        python:''
      }
    }


  }


})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div class="lg:w-2/4 md:w-3/4 sm:w-full mx-auto">
      <form >
        <label for="name" >Enter Your Name:</label>
        <input type="text" name="name" id="name" v-model.lazy="login.name">
        <label for="email">Enter Email:</label>
        <input type="email" name="email" id="email" v-model.lazy="login.email">
        <label for="pass">Password :</label>
        <input type="password" name="name" id="pass" v-model.lazy="login.passport">
        <label for="technology">Java : </label>
        <input class="ring-1 ring-green-500 mr-3" type="checkbox" name="java" value="java" id="technology" v-model.lazy="login.technology">
        <label for="python">Python : </label>
        <input class="mr-3" type="checkbox" name="python" value="python" id="python" v-model.lazy="login.python">
        <button
            class="w-full flex justify-center my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit">Submit
        </button>

      </form>


    </div>

    <div class="text-2xl font-bold">{{login}}</div>
    </div>



</template>

<style scoped>

</style>