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
            <a href="https://twitter.com/hilaryobinna" target="_blank">
              <font-awesome-icon :icon="['fab','twitter']" />
            </a>
          </span>
          <span class="facebook-icon">
            <a href="https://www.facebook.com/obinna.hilary" target="_blank">
              <font-awesome-icon :icon="['fab','facebook']" />
            </a>
          </span>
          <span class="linkedin-icon">
            <a href="https://www.linkedin.com/in/obinna-hilary-a122017b/" target="_blank">
              <font-awesome-icon :icon="['fab','linkedin-in']" />
            </a>
          </span>
          <span class="github-icon">
            <a href="https://github.com/obinnadtq" target="_blank">
              <font-awesome-icon :icon="['fab','github']" />
            </a>
          </span>
        </div>
      </div>
      <div class="contact-form">
        <form @submit.prevent="checkForm" method="post" data-netlify="true" name="contact" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          </p>
          <ul>
            <li v-for="error in errors" :key="error">{{error}}</li>
          </ul>
          <p>
            <label for="name">NAME</label>
            <input type="text" placeholder="Enter your name" v-model="name" name="name" />
          </p>
          <p>
            <label for="number">PHONE NUMBER</label>
            <input type="tel" placeholder="Enter your phone number" v-model="telephone" name="telephone" />
          </p>
          <p>
            <label for="email">EMAIL</label>
            <input type="email" placeholder="Enter your email address" v-model="email" name="email"/>
          </p>
          <p>
            <label for="message">YOUR MESSAGE</label>
            <textarea placeholder="Enter your message here" v-model="message" name="message"></textarea>
          </p>
          <p>
            <input type="submit" value="Send Message" class="submit-button" name="submit"/>
          </p>
        </form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      errors: [],
      name: null,
      telephone: null,
      email: null,
      message: null
    };
  },

  methods: {
    checkForm() {
      this.errors = [];
      if (this.name && this.email && this.message) {
        let information = {
          name: this.name,
          email: this.email,
          telephone: this.telephone,
          message: this.message
        };
        this.name = null;
        this.email = null;
        this.telephone = null;
        this.message = null;
        alert("Your message has been successfully sent");
        return information;
      } else {
        if (!this.name) this.errors.push("Name Required");
        if (!this.email) this.errors.push("Email Address Required");
        if (!this.message) this.errors.push("Please enter a message");
      }
    }
  }
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
.linkedin-icon,
.github-icon {
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
.info-class {
  padding: 5px;
}
.submit-button {
  background-color: lightgray;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover{
   background-color: #feb633;
}


.contact-form {
  width: 400px;
}

input {
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
}



textarea {
  width: 100%;
  height: 100px;
}

a:link,
a:visited {
  color: gray;
}

@media (max-width: 900px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>