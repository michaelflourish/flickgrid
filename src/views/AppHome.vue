<template>
    <AppHomePage />
</template>
  
<script>
import AppHomePage from '@/components/AppHomePage.vue';

export default {
  name: "AppHome",
  components: {
    AppHomePage
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }
  }
};
</script>
  
  <style>
  .homepage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #000; /* Black background for the whole page */
  }
  
  .content-container {
    text-align: center;
    background-color: #635e5e; /* Dark background for the content area */
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  
  .logo {
    max-width: 150px;
    margin-bottom: 20px;
  }
  
  .homepage-container button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    background-color: #333; /* Dark button background */
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .homepage-container button:hover {
    background-color: #555; /* Slightly lighter on hover */
  }
  </style>
  