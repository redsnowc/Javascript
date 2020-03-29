<template>
  <div class="card">
    <div class="card-header">
      Child Component Two
    </div>
    <div class="card-body">
      <h5 class="card-title">Edit User Age</h5>
      <p class="card-text">User Name: {{ username }}</p>
      <p class="card-text">User Age: {{ age }}</p>
      <button class="btn btn-primary" @click="changeAge">Change User Age</button>
    </div>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    name: "ChildTwo",
    props: {
      username: {
        type: String,
        required: true
      },
      userAge: Number
    },
    data: function () {
      return {
        age: this.userAge
      }
    },
    methods: {
      changeAge () {
        this.age = 30;
        eventBus.$emit('ageWasChanged', this.age);
      }
    }
  }
</script>

<style scoped>

</style>
