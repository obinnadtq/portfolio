<template>
  <div class="header">
    <ul class="nav-bar">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped>
.header {
  background-color: #f8f8f8;
  height: 70px;
  font-family: sans-serif;
  text-align: right;
}

ul {
  list-style-type: none;
  padding: 25px 400px 0px 0px;
  top: 0%;
}

li {
  display: inline;
}

li a {
  padding-left: 50px;
  color: black;
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
