


<script>
import Card from './Card.vue';
import { store } from '../data/store';

export default {
  name: 'MovieCardContainer',

  components:{
    Card,
  },

  data(){
    return{
      store,
    }
  }

}
</script>

<template>
  
  
  <div v-if="store.type === 'movie' || store.type === 'All'">

    <div>
      <h1>MOVIES</h1>
    </div>
  
    <div class="movie-container">
      
      <Card
      v-for="movie in store.movieList"
      :key="movie.id"
      :title="movie.original_title"
      :rating="movie.vote_average"
      :overview="movie.overview"
      :poster= "movie.poster_path"
      :name="movie.name"/>
  
      
    </div>

  </div>
  
</template>


<style lang="scss" scoped>
  .movie-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>