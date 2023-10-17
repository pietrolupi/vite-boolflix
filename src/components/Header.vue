
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
  <header >
    
    <div class="img-container">
      
      <img src="../assets/logo-boolflix.png" alt="">

    </div>
    


    <div class="d-flex justify-content-around align-items-center">

      <input class="form-control form-control-lg me-3" type="text" placeholder="Search a movie or a series"
      v-model="store.searchTitle" 
      @keyup.enter="$emit('titleSearch')"
      >


      <select v-model="store.type" class="form-select w-25" aria-label="Default select example">
        <option value="All" selected>All</option>
        <option value="movie">Movies</option>
        <option value="tv">TV Series</option>
        
      </select>

    </div>

    
  </header>
 
</template>


<style lang="scss" scoped>
  header{
    
    height: 100px;
    background: rgb(53,53,53);
    background: linear-gradient(0deg, rgba(53,53,53,1) 0%, rgba(0,0,0,1) 67%);

    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 20px;

    .img-container{
      width: 200px;
      display: flex;
      align-items: center;
      
      img{
        width: 100%;
      }
    }

    input, select{
      height: 40px;
    }
  }
</style>