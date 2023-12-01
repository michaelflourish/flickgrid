<template>
    <div>
      <AppHeader />
      <AppSearchBar @update-search="handleSearch"/>
      <div id="toggleSidebar" @click="toggleSidebar">
        <!-- Toggle Sidebar SVG here -->
      </div>
      <AppSidebar @update-genre="handleGenre" :style="{ left: isSidebarVisible ? '0px' : '-200px' }" />
      <div id="mainContent" :style="{ marginLeft: isSidebarVisible ? '200px' : '0px' }">
        <AppMovieGrid :movies="filteredMovies"/>
      </div>
      <AppFooter />
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppSearchBar from './AppSearchBar.vue';
import AppSidebar from './AppSidebar.vue';
import AppMovieGrid from './AppMovieGrid.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSearchBar,
    AppSidebar,
    AppMovieGrid,
    AppFooter
  },
  data() {
    return {
      searchQuery: '',
      selectedGenre: '',
      isSidebarVisible: false,
      movies: [
          { id: 1, title: 'Chief Daddy', image: 'https://jiji-blog.com/wp-content/uploads/2019/08/nollywood-5-768x433.jpg', description: 'Description...', genre: 'Drama', videoUrl: 'https://flickgridoutput.s3.us-east-2.amazonaws.com/Chief+Daddy+(2018)flickgrid1.mp4' },
          { id: 2, title: 'Brotherhood', image: 'https://i.ytimg.com/vi/VA3as2R-tlU/maxresdefault.jpg', description: 'Description...', genre: 'Action' },
          { id: 3, title: 'Wedding Party 2', image: 'https://cms.qz.com/wp-content/uploads/2018/01/wedding-party-2.jpg?quality=75&strip=all&w=1200&h=630&crop=1', description: 'Description...', genre: 'Drama', videoUrl:'https://flickgridoutput.s3.us-east-2.amazonaws.com/Brotherhood+(2016).mp4'},
          { id: 4, title: 'King of Boys', image: 'https://tse4.mm.bing.net/th?id=OIP.Qpja4LxrUv5FUX1tZRoxBAHaEK&pid=Api&P=0&h=220', description: 'Description...', genre: 'Action', videoUrl: 'https://flickgridoutput.s3.us-east-2.amazonaws.com/King+of+Boys+(2018)_2flickgrid3.mp4'},
          { id: 5, title: 'Omo Ghetto', image: 'https://flixwatch.co/wp-content/uploads/81435736.jpg', description: 'Description...', genre: 'Drama' },
          { id: 6, title: 'Kambili', image: 'https://nzdworld.com/wp-content/uploads/2021/06/IMG_20210618_085727_111-678x381.jpg', description: 'Description...', genre: 'Drama', videoUrl:'https://flickgridoutput.s3.us-east-2.amazonaws.com/Kambili-+The+Whole+30+Yards+-+Kambili+Official+Trailerflickgrid5.mp4' },
          { id: 7, title: 'Jagun Jagun', image: 'https://tse1.mm.bing.net/th?id=OIP.Tl5ipRoHzbZIwHB00gG4JgHaDs&pid=Api&P=0&h=220', description: 'Description...', genre: 'Action', videoUrl:'https://flickgridoutput.s3.us-east-2.amazonaws.com/Jagun+Jagun+-+Official+Trailer.mp4' },
          { id: 8, title: 'Anikulapo', image: 'https://tse1.mm.bing.net/th?id=OIP.wJDOv75-jFr3wJeFfqoCmwHaEK&pid=Api&P=0&h=220', description: 'Description...', genre: 'Drama', videoUrl:'https://flickgridoutput.s3.us-east-2.amazonaws.com/Anikulapo+-+Official+Trailerflickgrid6.mp4' },
        ]
    };
  },

  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
               movie.genre.toLowerCase().includes(this.selectedGenre.toLowerCase());
      });
    }
  },

  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
    handleGenre(genre) {
      this.selectedGenre = genre;
    },
    focusOnMainContent() {
      const mainContent = this.$refs.mainContent;
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style>
#toggleSidebar, #mobileMenu {
  cursor: pointer;
}

#toggleSidebar svg.arrow-expanded {
  transform: rotate(180deg);
}
</style>
