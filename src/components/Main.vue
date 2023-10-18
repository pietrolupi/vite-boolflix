

<script>
import MovieCardContainer from './MovieCardContainer.vue';
import SeriesCardContainer from './SeriesCardContainer.vue';
import NoResults from './NoResults.vue';
import { store } from '../data/store';
import Swiper from './Swiper.vue';
import Loader from './Loader.vue';

export default {
  
  name: 'Main',
  components:{
    MovieCardContainer,
    SeriesCardContainer,
    NoResults,
    Swiper,
    Loader
 
  },
  data(){
    return{
      store
    }
  }

  

}
</script>

<template>
  
  <div class="container">

    <Loader v-if="store.isLoading"/>


    <div v-else>

      <Swiper v-if="store.showPopular"/>
       
      <div v-else>
   
        <NoResults v-if="(store.movieList.length === 0 && store.seriesList.length === 0) && !store.showPopular"/>
     
        <MovieCardContainer/>
     
        <SeriesCardContainer/>
   
      </div>

    </div>



  </div>
  

</template>


<style lang="scss" scoped >
  .container{
    background-color: #353535;
    overflow-x: hidden;
  }
</style>