<template>
  <div class="hello">
    <h1 class="text-2xl font-bold text-yellow-600">{{ msg }}</h1>
    <button class="btn-blue" v-on:click="getAlert()">Click Me</button>
    <input type="text" class="border-2 border-indigo-400 m-5" name="name" v-model.lazy="count"/>
    <h1 class="text-2xl font-bold">{{ count }}</h1>

    <div class="inline-block mx-auto">
      <button v-on:click="getShow()"
              class="relative justify-items-center w-[25rem] h-[2rem] my-1 border-2 border-green-400 bg-blue-500 text-center text-white font-semibold">
        <p>Click Me</p>
      </button>
      <div class="relative w-[25rem] h-[20rem] mb-5 border-2 border-indigo-400 bg-amber-50">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque cupiditate eius explicabo, hic libero
          nemo neque quam reprehenderit voluptatibus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque cupiditate eius explicabo, hic libero
          nemo neque quam reprehenderit voluptatibus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque cupiditate eius explicabo, hic libero
          nemo neque quam reprehenderit voluptatibus?
        </p>
      </div>

    </div>


    <h1 class="text-2xl font-bold">{{ show }}</h1>
    <h1 class="text-2xl font-bold">{{ info }}</h1>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: "",
      info:"relative w-[25rem] h-[20rem] mb-5 border-2 border-indigo-400 bg-amber-50 transform skew-y-100 transition duration-500",
      show: true
    }
  },
  methods: {

    getAlert() {

      return alert("OKKKK ! " + this.count);
    },
    getShow() {

      //this.show = !this.show;
      if(this.show == false){
        this.info = "relative w-[25rem] h-[20rem] mb-5 border-2 border-indigo-400 bg-amber-50 transform skew-y-100 transition duration-500";
        this.show = !this.show;
      }else {
        this.info = "relative w-[25rem] h-[20rem] mb-5 border-2 border-indigo-400 bg-amber-50 transform skew-y-100 transition duration-500";
        this.show = !this.show;

      }

    }
  },

  props: {
    msg: String

  }
}
</script>

