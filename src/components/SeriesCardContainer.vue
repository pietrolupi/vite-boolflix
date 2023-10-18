


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

  <div v-if="(store.type === 'tv' || store.type=== 'All') && store.seriesList.length !== 0">

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
      :name="series.name"
      :lang="series.original_language"/>
  
    </div>

  </div>
  
</template>


<style lang="scss" scoped>

  .series-container{
    
    display: flex;
    
    flex-wrap: wrap;
  }

  h1{
    margin-left: 20px;
    color: white;
    font-weight: 900;
  }

 
</style>