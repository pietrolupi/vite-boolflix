

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
    
    getApi(type){
      axios.get(store.apiUrl + type ,{
        params:{
          query: store.searchTitle,
          api_key : store.apiKey
        }
      })
      .then(res=>{
        if(type === 'movie'){
          store.movieList = res.data.results
        }else{
          store.seriesList = res.data.results
        }
        console.log(store.movieList[0].original_title);
      })
      .catch(err=>{
        console.log('ERRORE API ERRORE APIIII')
      })
    },

    startSearching(){
      store.movieList = []
      store.seriesList = []
      
      this.getApi('movie')
      this.getApi('tv')

      store.searchTitle = ''
      
    }
  },

  mounted(){
    this.getApi('movie')
    this.getApi('tv')
  }
}
</script>


<template>
  <Header @titleSearch="startSearching()"/>
  <Main/>
</template>


<style lang="scss">
  @use './scss/main.scss'
</style>