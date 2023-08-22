<template>
<MintuChild/>

  <div class="text-red-600 bg-slate-500">
    <p>Lorem ipsum dolor sit amet.</p>
  </div>

  <div class="flex text-green-600" v-for="item in users" :key="item.name">

    <p>{{item.name}}</p>
    <p class="font-bold">{{item.email}}</p>

  </div>


</template>

<script>
import MintuChild from "@/components/MintuChild.vue";


export default {
  name:'MintuParent',

  data(){
    return{
      users:[
        {name:'anil', email:'anil@test.com'},
        {name:'alam', email:'alam@test.com'},
        {name:'nasir', email:'nasir@test.com'},
        {name:'nahid', email:'nahid@test.com'},
      ]

    }

  },
  components: {
    MintuChild
  }
}


</script>

