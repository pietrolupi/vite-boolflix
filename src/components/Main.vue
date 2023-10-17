

<script>
import MovieCardContainer from './MovieCardContainer.vue';
import SeriesCardContainer from './SeriesCardContainer.vue';
import NoResults from './NoResults.vue';


export default {
  
  name: 'Main',
  components:{
    MovieCardContainer,
    SeriesCardContainer,
    NoResults
 
  }

  

}
</script>

<template>
  
  <div class="container">
    
   <NoResults/>

   <MovieCardContainer/>

   <SeriesCardContainer/>


  </div>
  

</template>


<style lang="scss" scoped >
  .container{
    background-color: #353535;
  }
</style>