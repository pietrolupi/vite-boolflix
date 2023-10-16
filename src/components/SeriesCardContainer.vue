


<script>
import Card from './Card.vue';
import { store } from '../data/store';
export default {
  name: 'SeriesCardContainer',

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

  <div>
    <h1>TV SERIES</h1>
  </div>
  
  <div class="series-container">

    <Card
    v-for="series in store.seriesList"
    :key="series.id"
    :title="series.original_title"
    :rating="series.vote_average"
    :overview="series.overview"
    :poster= "series.poster_path"
    :name="series.name"/>

  </div>
  
</template>


<style lang="scss" scoped>

  .series-container{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

 
</style>