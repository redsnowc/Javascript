<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3 mt-5">
        <div class="card">
          <div class="card-header">
            Parent Component
          </div>
          <div class="card-body">
            <h5 class="card-title">User Info</h5>
            <p class="card-text">User Name: {{ name }}</p>
            <p class="card-text">User Age: {{ age }}</p>
            <button @click="changeName" class="btn btn-primary">Change Name</button>
<!--            <a href="#" class="btn btn-primary">Go somewhere</a>-->
          </div>
        </div>
      </div>
      <div class="col">
        <childOne v-bind:username="name" v-bind:user-age="age" @nameWasChanged="name = $event"></childOne>
      </div>
      <div class="col">
        <childTwo v-bind:username="name" v-bind:user-age="age"></childTwo>
      </div>
    </div>
  </div>
</template>

<script>
  import ChildOne from "./ChildOne.vue";
  import ChildTwo from "./ChildTwo.vue";

  export default {
    name: "Parent",
    components: {
      childOne: ChildOne,
      childTwo: ChildTwo
    },
    data: function () {
      return {
        name: 'RedSnow',
        age: 27
      }
    },
    methods: {
      changeName() {
        return this.name = 'Summer';
      }
    }
  }
</script>

<style scoped>
</style>
