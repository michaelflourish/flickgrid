<template>
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Search movies..." v-model="searchTerm" @input="emitSearchTerm">
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppSearchbar',
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      emitSearchTerm() {
        this.$emit('update-search', this.searchTerm);
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
      margin: 20px 0;
      text-align: center;
  }

  .search-bar input {
    width: 40%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  