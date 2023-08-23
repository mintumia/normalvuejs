<template>
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
  <div v-html="tag2"></div>
  <h1 :class="applyStyle">Change Style</h1>

  <button v-on:click="changeStyle =!changeStyle">Click Me</button>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RuffTest",
  data(){
    return{
      tag:"<h1 class=\"text-2xl font-bold\">Rufftest Text</h1>",
      tag2:"<h1 class=\"text-2xl font-bold\">Rufftest Text2</h1>",

      changeStyle:true
    }

  },
  computed:{
    applyStyle(){
      return{
        "text-fuchsia-600":true,
        "font-bold":true,
        "bg-red-200":this.changeStyle
      }
    }

  }





})
</script>



