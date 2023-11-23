<template>
    <header>
      <div id="logo">FlickGrid</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Genres</a></li>
          <li><a href="#">Latest Releases</a></li>
          <li><a href="#">User Profile</a></li>
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
    }
  </style>
  