<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RegisterForm"
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div class="lg:w-2/4 md:w-3/4 sm:w-full mx-auto">
      <label for="name">Enter Your Name:</label>
      <input type="text" name="name" id="name">
      <label for="Email">Enter Email:</label>
      <input type="Email" name="name" id="email">
      <button
          class="w-full flex justify-center my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit">Submit
      </button>



    </div>


  </div>

</template>

<style scoped>

</style>