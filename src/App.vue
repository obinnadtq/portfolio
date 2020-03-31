<template>
  <div id="app">
    <Header></Header>
    <Summary></Summary>
    <about-me></about-me>
    <projects></projects>
    <contact></contact>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Summary from './components/Summary.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Summary,
    AboutMe,
    Projects,
    Contact
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
