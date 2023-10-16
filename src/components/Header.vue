
<script>

/* import Searchbar from './Searchbar.vue'; */
import Select from './Select.vue';
import { store } from '../data/store';

export default {

  name: 'Header',
  components:{
    Select,
    
  },

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

    </div>

    <Select/>
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