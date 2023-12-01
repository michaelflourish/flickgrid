<template>
  <div class="signin-container">
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <div class="signin-form">
      <h1>Sign In</h1>
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button class="signin-button" @click="signIn">Sign In</button>
      <p>Don't have an account? <router-link to="/">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
// import { Amplify } from 'aws-amplify';
import {Auth} from '@aws-amplify/auth';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
        async signIn() {
            try {
            const user = await Auth.signIn(this.username, this.password);
            console.log(user);
            this.$router.push('/movies'); 
            } catch (error) {
            console.error('Error signing in:', error);
            }
        }
    }

  /*
  methods: {
    handleSignIn() {
      // Handle the sign-in logic here
      console.log('Signing in:', this.username, this.password);
      // Redirect or perform further actions
    }
  }
  */
};
</script>

<style scoped>
.signin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #141414; 
}

.logo {
  max-width: 250px;
  margin-bottom: 20px;
}

.signin-form {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.signin-form h1 {
  color: #333;
  text-align: center;
}

.signin-form input {
  width: calc(100% - 20px); 
  padding: 10px;
  margin: 10px 10px 10px 0; 
  border: 1px solid #ddd;
  border-radius: 4px;
}

.signin-button {
  width: 100%;
  padding: 10px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signin-button:hover {
  background-color: #f40612;
}

@media (max-width: 600px) {
  .signin-form {
    padding: 15px;
  }
}
</style>
