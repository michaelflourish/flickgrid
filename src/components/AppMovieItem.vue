<template>
    <div class="movie-item">
      <div class="movie-item-inner">
        <div class="movie-item-front">
          <img :src="movie.image" :alt="movie.title">
        </div>
        <div class="movie-item-back">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-description">{{ movie.description }}</div>
          <div class="movie-genre">{{ movie.genre }}</div>
          <button class="play-movie-btn">Play Movie</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppMovieItem',
    props: {
      movie: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
.movie-item {
    background-color: #eee;
    height: 300px; /* Adjust as needed */
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    perspective: 1000px;
}

.movie-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This ensures the image covers the whole div */
}

.movie-item-inner {
    width: 100%;
    height: 100%;
    transition: transform 1s; 
    transform-style: preserve-3d;
}

.movie-item:hover .movie-item-inner {
    transform: rotateY(180deg); /* Flip on hover */
}

.movie-item-front, .movie-item-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hide the back side when facing away */
}

.movie-item-back {
    background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
    color: #000; /* Text color */
}

.movie-genre {
    margin: 10px 0;
    font-weight: bold;
}

.play-movie-btn {
    margin-top: 20px;
}
</style>

  