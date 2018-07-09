<template>
  <div class="container">
    <appheader></appheader>
    <appcontent></appcontent>
  </div>
</template>

<script>
import appheader from './components/header.vue';
import appcontent from './components/content.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appheader,
    appcontent
  }
}
</script>

<style>
body{
  background-color: #333;
  color: #fff;
  text-align: center;
}
</style>
