<template>
    <section class="movie-grid">
      <AppMovieItem 
        v-for="movie in movies" 
        :key="movie.id" 
        :movie="movie" 
      />
    </section>
  </template>
  
  <script>
  import AppMovieItem from './AppMovieItem.vue';
  
  export default {
    name: 'AppMovieGrid',
    components: {
      AppMovieItem
    },
    props: {
      filterGenre: String,
      searchItem: String,
      movies: Array
    }
  };
  </script>
  
  <style scoped>
.movie-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* 1 column layout for mobile */
    gap: 20px;
    padding: 20px;
}

@media (min-width: 600px) {
    .movie-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
    }
}

@media (min-width: 1024px) {
    .movie-grid {
        grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
    }
}
</style>

  