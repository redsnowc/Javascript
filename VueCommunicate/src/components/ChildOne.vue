<template>
  <div class="card">
    <div class="card-header">
      Child Component One
    </div>
    <div class="card-body">
      <h5 class="card-title">Edit User Name</h5>
      <p class="card-text">User Name: {{ name }}</p>
      <p class="card-text">User Age: {{ age }}</p>
      <button class="btn btn-primary" @click="changeName">Change User Name</button>
    </div>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    name: "ChildOne",
    props: {
      username: {
        type: String,
        required: true
      },
      userAge: Number
    },
    data: function () {
      return {
        name: this.username,
        age: this.userAge
      };
    },
    methods: {
      changeName () {
        this.name = 'Summer';
        this.$emit('nameWasChanged', this.name);
      }
    },
    created () {
      eventBus.$on('ageWasChanged', (data) => {
        this.age = data;
      })
    }
  }
</script>

<style scoped></style>
