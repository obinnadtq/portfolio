<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-item">
        <a href="#home">Home</a>
      </div>
      <div class="flex-item">
        <a href="#about">About Me</a>
      </div>
      <div class="flex-item">
        <a href="#contact">Contact</a>
      </div>
      <div class="flex-item">
        <a href="#blog">Blog</a>
      </div>
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
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
}

.flex-container {
  display: flex;
  color: black;
}

a {
  text-decoration: none;
  margin-left: 40px;
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
