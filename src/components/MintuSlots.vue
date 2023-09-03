<template>
  <div class="inline-flex w-2/4 text-center mx-auto p-4 border-2 border-indigo-400 rounded rounded-2xl my-2 shadow-lg shadow-black">
    <header class="text-2xl font-bold">
      <slot name="header">

      </slot>
    </header>
    <content class="text-sm">
      <slot name="main">

      </slot>
    </content>
    <footer class="bg-blue-500">
      <slot name="footer">

      </slot>
    </footer>


  </div>


</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MintuSlots",
  props: {
    name: String,

  }

})

</script>