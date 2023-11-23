<template>
    <aside :style="{ left: isSidebarVisible ? '0px' : '-200px' }" id="sidebar">
      <h3>Filter By</h3>
      <div class="filter-option">
        <label for="genre">Genre:</label>
        <select id="genre" v-model="selectedGenre" @change="emitGenre">
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <!-- Add more options as needed -->
        </select>
      </div>
      <!-- Additional filtering options can be added here -->
      
    </aside>
    
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
    data() {
      return {
        isSidebarVisible: true,
        selectedGenre: ''
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible;
      },
      filterByGenre() {
        this.$emit('genre-filter', this.selectedGenre);
      },
      emitGenre() {
      this.$emit('update-genre', this.selectedGenre);
    },

    }
  };
  </script>
  
  <style scoped>
  #sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 200px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #ddd;
      padding: 15px;
      box-sizing: border-box;
      transition: transform 0.3s;
  }
  
  .filter-option {
      margin-bottom: 10px;
  }
  </style>
  