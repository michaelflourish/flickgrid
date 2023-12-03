<template>
    <div class="homepage-container">
      <div class="content-container">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <amplify-authenticator></amplify-authenticator>
      </div>
    </div>
  </template>
  
  <script>
  /*
  import {Amplify} from 'aws-amplify';
  
  export default {
    methods: {
      signInWithCognito() {
        Amplify.Auth.federatedSignIn();
      },
      signUpWithCognito() {
        Amplify.Auth.federatedSignIn({ customState: 'signup' });
      }
    }
  };
  */
  import { AmplifyEventBus } from '@aws-amplify/ui-vue';

    export default {
        created() {
            AmplifyEventBus.$on('authState', this.onAuthEvent);
        },
        destroyed() {
            AmplifyEventBus.$off('authState', this.onAuthEvent);
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
  