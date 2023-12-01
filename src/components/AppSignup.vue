<template>
  <div class="signup-container">
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <div class="signup-form">
      <h1>Sign Up</h1>
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="email" v-model="email" placeholder="Email Address" required>
      <input type="tel" v-model="phoneNumber" placeholder="Phone Number" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button class="signup-button" @click="signUp">Sign Up</button>
      <p>Already have an account? <router-link to="/signin">Sign In</router-link></p>
    </div>
  </div>
</template>
  <script>
 // import { Amplify } from 'aws-amplify';
  import Auth from '@aws-amplify/auth';


  export default {
    data() {
      return {
        username: '',
        email: '',
        phoneNumber: '',
        password: ''
      };
    },
    methods: {
        async signUp() {
            try {
            const { user } = await Auth.signUp({
                'custom:username': this.username,
                'custom:email': this.email,
                'custom:phoneNumber': this.phoneNumber,
                'custom:password': this.password,
            });
            console.log(user);
            } catch (error) {
            console.error('Error signing up:', error);
            }
        }
    }
    /*
    methods: {
      handleSubmit() {
        // Handle the form submission logic here
        console.log('Form submitted:', this.username, this.firstName, this.lastName, this.email, this.phoneNumber);
        // Redirect or perform further actions
      }
    }
    */
  };
  </script>

<style scoped>
.signup-container {
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

.signup-form {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.signup-form h1 {
  color: #333;
  text-align: center;
}

.signup-form input {
  width: calc(100% - 20px); /* Adjust width to account for padding */
  padding: 10px;
  margin: 10px 10px 10px 0; /* Add right margin */
  border: 1px solid #ddd;
  border-radius: 4px;
}

.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #e50914; /* Netflix-like button color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #f40612;
}

.signup-form input[type="password"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 10px 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .signup-form {
    padding: 15px;
  }
}
</style>

  