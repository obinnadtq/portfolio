<template>
  <div class="container">
    <div>
      <h2>About Me</h2>
    </div>
    <div class="description">
      <p>
        I'm a Software Developer currently doing an Internship with DNV GL.
        I am passionate about creating software solutions for industries and private individuals.
        I also enjoy sharing knowledge and would avail myself at every opportunity to do teach and impart knowledge.
      </p>
      <div>
        <a href="#" class="download-button">Download CV</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped>
.container {
  display: flex;
  height: 300px;
  border-style: outset none inset none;
  background-color: #f8f8f8;
  font-family: arial, sans-serif;
  justify-content: center;
  align-items: center;
}
.description {
  display: flex;
  width: 30%;
  flex-wrap: wrap;
  margin: 70px;
  padding: 5px;
  line-height: 30px;
}

.download-button {
  background-color:lightgray;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.download-button:hover {
  background-color: #feb633;
}

h2 {
  font-size: 40px;
  font-weight: 80;
  color: black;
  margin-bottom: 5px;
}
</style>