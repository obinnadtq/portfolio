<template>
  <div id="app">
    <Header></Header>
    <about-me></about-me>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    Header,
    AboutMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
