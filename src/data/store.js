
import {reactive} from 'vue';

export const store = reactive({
  
  searchTitle: 'fight club',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  
  apiKey:'f504cff324780bcb48537c12da7a5673',

  type:'All',
  
  seriesList: [],
  movieList: [],

})