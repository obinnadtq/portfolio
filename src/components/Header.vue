<template>
  <div class="container">
    <div class="flex-item">
      <a href="#home">Home</a>
    </div>
    <div class="flex-item">
      <a href="#about">About Me</a>
    </div>
    <div class="flex-item">
      <a href="#portfolio">Portfolio</a>
    </div>
    <div class="flex-item">
      <a href="#contact">Contact</a>
    </div>
    <div class="flex-item">
      <a href="#blog">Blog</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped>
.container {
  background-color: #f8f8f8;
  font-family: arial, sans-serif;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 400px;
}

.flex-item {
  color: black;
  padding: 1em;
}

a {
  text-decoration: none;
}

a:link,
a:visited {
  color: black;
}
a:hover,
a:active {
  color: #feb633;
}
</style>
