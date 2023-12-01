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
        <button class="play-movie-btn" @click="playMovie">Play Movie</button>
      </div>
      <video ref="videoPlayer" class="movie-video-player" controls>
        <source :src="movie.videoUrl" type="video/mp4">
        Your browser does not support the video tag.
      </video>
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
  },
  methods: {
  playMovie() {
    this.$refs.videoPlayer.style.display = 'block'; 
    this.$refs.videoPlayer.play(); 
  }
}
};
</script>

<style scoped>
.movie-item {
  background-color: #eee;
  height: 300px; 
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  perspective: 1000px;
}

.movie-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.movie-item-inner {
  width: 100%;
  height: 100%;
  transition: transform 1s; 
  transform-style: preserve-3d;
}

.movie-item:hover .movie-item-inner {
  transform: rotateY(180deg); 
}

.movie-item-front, .movie-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
}

.movie-item-back {
  background-color: rgba(255, 255, 255, 0.7); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  color: #000; 
}

.movie-genre {
  margin: 10px 0;
  font-weight: bold;
}

.play-movie-btn {
margin-top: 20px;
transition: transform 0.3s ease, background-color 0.3s ease;
}

.play-movie-btn:hover {
transform: scale(1.1); 
background-color: #007bff; 
color: white; 
cursor: pointer;
}


.movie-video-player {
display: none; 
width: 100%; 

}

</style>