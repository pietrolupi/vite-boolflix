

<script>
import MovieCardContainer from './MovieCardContainer.vue';
import SeriesCardContainer from './SeriesCardContainer.vue';

export default {
  
  name: 'Main',
  components:{
    MovieCardContainer,
    SeriesCardContainer,
  }

  

}
</script>

<template>
  
  <div class="container">

   <MovieCardContainer/>

   <SeriesCardContainer/>


  </div>
  

</template>


<style lang="scss" scoped >

</style>