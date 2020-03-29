<template>
  <div id="app">
    <Parent></Parent>
  </div>
</template>

<script>
  import Parent from "./components/Parent.vue";

  export default {
    name: 'app',
    components: {
      Parent: Parent
    }
  }
</script>

<style>

</style>
