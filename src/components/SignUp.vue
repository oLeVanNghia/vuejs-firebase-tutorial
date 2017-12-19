<template>
  <div class="sign-up">
    <h3>Let's create a new account</h3>
    <input type="text" v-model="email" placeholder="Email"></input>
    <input type="password" v-model="password" placeholder="Password"></input>
    <button v-on:click="signup">Sign Up</button>
    <span>or go back to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signup: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('Your account has been created!')
          },
          function (err) {
            alert('Oops.' + err.message)
          }
        )
      }
    }
  }
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}

</style>