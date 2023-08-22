<template>

  <HelloWorld msg="Welcome to Mintu Page"/>
  <MintuParent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MintuParent from './components/MintuParent.vue'

export default {
  name: 'App',
 components: {
    HelloWorld,
    MintuParent
  }
}
</script>

