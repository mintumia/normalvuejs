<template>
<div class="flex flex-col justify-center">
  <button class="bg-blue-500 text-white my-2 py-3" @click="tab='HelloWorld'">com01</button>
  <button class="bg-blue-500 text-white my-2 py-3" @click="tab='RegisterForm'">com01</button>
  <button class="bg-blue-500 text-white my-2 py-3" v-on:click="tab='RegisterForm'" >Click Me</button>
</div>

  <component :is="tab"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
/*
import MintuParent from './components/MintuParent.vue';
*/

/*import RuffTest from "@/components/RuffTest.vue";*/
import RegisterForm from "@/components/RegisterForm.vue";
/*import MintuSlots from "@/components/MintuSlots.vue";*/


export default {
  name: 'App',
  data(){
    return{
      tab:'HelloWorld',
      count:0,
    }

  },
  beforeUpdate() {
    console.log("before : " + this.count);
  },
  updated() {
    console.log("Updated : " + this.count++);
  },
  beforeUnmount() {
    console.log("before Unmount : " + this.count--);
  },

  components: {
    /*MintuSlots,*/
    HelloWorld,
   /* MintuParent,*/
    RegisterForm,
    /*RuffTest*/
  }

}
</script>

