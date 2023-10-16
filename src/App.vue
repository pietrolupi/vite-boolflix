

<script>

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store'

export default {

  name: 'App',
  components: {
    Header,
    Main,
  },

  data(){
    return{
      store
    }
  },
  
  methods:{
    getMovieApi(){
      axios.get(store.apiMovieUrl,{
        params:{
          query: store.searchTitle,
          api_key : store.apiKey
        }
      })
      .then(res=>{
        store.movieList = res.data.results
        console.log(store.movieList[0].original_title);
      })
      .catch(err=>{
        console.log('ERRORE API ERRORE APIIII')
      })
    }
  },

  mounted(){
    this.getMovieApi()
    
  }
}
</script>


<template>
  <Header/>
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss'
</style>