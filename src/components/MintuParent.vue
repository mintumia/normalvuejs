<template>
  <MintuChild :username="getName" name="Mintu"/>

  <div class="text-red-400 font-bold" ref="parent">This text From Parents</div>

<div class="bg-slate-500 text-2xl text-white" >{{isClicked}}</div>
  <input class="border-2 focus:bg-green-700 border-red-600 disabled:bg-sky-300" type="text" ref="fullname">
  <button class="btn-blue" v-on:click="focused()" >Focus On</button>

</template>

<script>
import MintuChild from "@/components/MintuChild.vue";


export default {
  name: 'MintuParent',

  data() {
    return {
      isClicked:false,
      users: [
        {name: 'anil', email: 'anil@test.com'},
        {name: 'alam', email: 'alam@test.com'},
        {name: 'nasir', email: 'nasir@test.com'},
        {name: 'nahid', email: 'nahid@test.com'},
      ]

    }


  },
  methods: {
    getName(name) {
      this.$refs.parent.className = "text-red-400 font-bold bg-green-200";
      if(this.$refs.parent.innerHTML.length >2 && this.isClicked == false){
        this.$refs.parent.innerHTML = this.$refs.parent.innerHTML.toUpperCase();
        this.isClicked = true;
      }else {
        this.isClicked = false;
        this.$refs.parent.innerHTML = this.$refs.parent.innerHTML+" "+name.toLowerCase();
        this.$refs.parent.className = "text-red-400 font-bold bg-blue-200";
        setTimeout(()=>alert("TimeOut!"),3000);

      }

      //alert(this.$refs.parent.innerHTML.length + name);
    },

    focused(){
    this.$refs.fullname.focus();



    }
  },
  components: {
    MintuChild
  }
}


</script>

