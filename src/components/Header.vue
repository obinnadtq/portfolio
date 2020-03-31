<template>
  <div class="header">
    <ul>
      <li><a href="#home">Home </a></li>
      <li><a href="#about">About Me </a></li>
      <li><a href="#portfolio">Portfolio </a></li>
      <li><a href="#contact">Contact </a></li>
      <li><a href="#blog"> Blog </a></li>
    </ul> 
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
}

li{
  display: inline;
}
</style>
