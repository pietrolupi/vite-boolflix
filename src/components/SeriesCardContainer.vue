


<script>
import Card from './Card.vue';
export default {
  name: 'SeriesCardContainer',

  components:{
    Card,
  }
}
</script>

<template>
  <div class="series-container">

    <h1>TV SERIES</h1>
    <Card/>

  </div>
  
</template>


<style lang="scss" scoped>

  .series-container{
    margin-top: 30px;
  }
</style>