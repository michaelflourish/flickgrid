<template>
  <header>
    <div id="logo">
      <img src="@/assets/logo.png" alt="FlickGrid Logo">
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link v-if="$auth.isAuthenticated" to="/movies">Movies</router-link></li>
        <li><router-link v-if="$auth.isAuthenticated" to="/profile">User Profile</router-link></li>
        <li><router-link v-if="$auth.isAuthenticated" to="/">Log out</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
  header {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
  }

  #logo img {
    max-height: 100px; 
    width: auto;
    margin-right: 2px; 
  }

  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 0 10px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }
</style>
