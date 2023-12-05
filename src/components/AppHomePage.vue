<template>
  <div>
    <AppHeader />
    <div class="homepage-container">
      <div class="content-container">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <!-- Welcome message -->
        <div class="welcome-message">
          <h1>Welcome to Flickgrid</h1>
        </div>
        <div v-if="!$auth.loading">
          <button v-if="!$auth.isAuthenticated" @click="login">Authenticate User</button>
          <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
name: "AppHomePage",
components: {
  // AppMovieGrid
  AppHeader,
  AppFooter
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

.homepage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000; /* Black background for the whole page */
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* This centers the child elements (including your image) horizontally */
  justify-content: center; /* This centers the child elements vertically */
  text-align: center;
  background-color: #635e5e; /* Dark background for the content area */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 30%; /* Adjusted width */
  max-width: 400px; /* Maximum width for larger screens */
  height: auto; /* Height will adjust based on content */
  min-height: 300px; /* Minimum height */
  margin: auto; /* This will center the content-container itself if it is a flex-child */
}

.logo {
  max-width: 100%; /* Makes the image responsive: it will not overflow its container */
  height: auto; /* Keeps the image aspect ratio */
  margin-bottom: 20px; /* Space below the image */
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

.welcome-message {
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 800; /* Corresponds to ExtraBold */
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat font */
}


@media (max-width: 600px) {
  .content-container {
    width: 80%; /* Wider on small screens */
    padding: 20px;
  }
}

</style>