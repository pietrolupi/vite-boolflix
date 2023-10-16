
<script>

import { store } from '../data/store';

export default {

  name: 'Header',

  data(){
    return{
      
      store,
    }
  }

}
</script>

<template>
  <header class="">
    
    <div class="w-25">

      <input class="form-control form-control-lg" type="text" placeholder="Search a movie or a series"
      v-model="store.searchTitle" 
      @keyup.enter="$emit('titleSearch')"
      >


      <select v-model="store.type" class="form-select" aria-label="Default select example">
        <option value="All" selected>All</option>
        <option value="movie">Movies</option>
        <option value="tv">TV Series</option>
        
      </select>

    </div>

    
  </header>
 
</template>


<style lang="scss" scoped>
  header{
    
    background-color: black;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 20px;
  }
</style>