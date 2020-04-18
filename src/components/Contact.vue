<template>
  <div class="main-container" id="contact">
    <h1>Contact Me</h1>
    <div class="container">
      <div class="contact-info">
        <div>
          <h3>Contact Info</h3>
        </div>
        <div class="info-class">
          <p>
            <span class="icon">
              <font-awesome-icon icon="envelope" />
            </span> oisiwekpeni@gmail.com
          </p>
        </div>
        <div class="info-class">
          <p>
            <span class="icon">
              <font-awesome-icon icon="phone" />
            </span>+4917674722307
          </p>
        </div>
        <div>
          <h3>Follow Me</h3>
        </div>
        <div>
          <span class="twitter-icon">
            <a href="https://twitter.com/hilaryobinna" target="_blank"><font-awesome-icon :icon="['fab','twitter']" /></a>
          </span>
          <span class="facebook-icon">
            <a href="https://www.facebook.com/obinna.hilary" target="_blank"><font-awesome-icon :icon="['fab','facebook']" /></a>
          </span>
          <span class="linkedin-icon">
            <a href="https://www.linkedin.com/in/obinna-hilary-a122017b/" target="_blank"><font-awesome-icon :icon="['fab','linkedin-in']" /></a>
          </span>
          <span class="github-icon">
            <a href="https://github.com/obinnadtq" target="_blank"><font-awesome-icon :icon="['fab','github']" /></a>
          </span>
        </div>
      </div>
      <div class="contact-form">
        <form action>
          <label>NAME</label>
          <br />
          <input type="text" placeholder="Type your name" />
          <br />
          <label>PHONE NUMBER</label>
          <br />
          <input type="tel" placeholder="Type your phone number" />
          <br />
          <label>EMAIL</label>
          <br />
          <input type="email" placeholder="Type your email address" />
          <br />
          <label>YOUR MESSAGE</label>
          <br />
          <textarea placeholder="Type your message here"></textarea>
          <br />
          <input type="submit" value="Send Message">
        </form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  font-family: arial, sans-serif;
}
h1 {
  text-align: center;
}

.facebook-icon,
.linkedin-icon, .github-icon {
  color: gray;
  margin: 10px;
}

.twitter-icon {
  color: gray;
  margin: 10px 10px 10px 0;
}

.icon {
  margin-right: 10px;
  color: gray;
}
.info-class{
  padding: 5px;
}

input[type=text], input[type=tel], input[type=email] {
  width: 300%;
  height: 10px;
  padding: 14px 20px;
  margin: 8px 0;
  border-radius: 4px;
}

input[type=submit]{
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  background-color: lightgray;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: white;
  color:#feb633;
}

textarea{
  width: 300%;
  height: 100px;
  padding: 14px 20px;
  margin: 8px 0;
  border-radius: 4px;
  cursor: pointer;
}
a:link,
a:visited {
  color: gray;
}



</style>