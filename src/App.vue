<template>
  <div>
    <Header></Header>
    <Summary></Summary>
    <about-me></about-me>
    <contact></contact>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Summary from './components/Summary.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Summary,
    AboutMe,
    Contact
  }
}
</script>

<style>

</style>
