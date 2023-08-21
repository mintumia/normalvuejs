<template>
  <div class="hello">
    <h1 class="text-2xl font-bold text-yellow-600">{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

