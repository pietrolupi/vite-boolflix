
import {reactive} from 'vue';

export const store = reactive({
  
  searchTitle: '',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiUrlPopular: 'https://api.themoviedb.org/3/movie/now_playing?api_key=f504cff324780bcb48537c12da7a5673',
  
  apiKey:'f504cff324780bcb48537c12da7a5673',
  type:'All',
  
  showPopular: true,
  isLoading: false,

  popularList: [],
  seriesList: [],
  movieList: [],

})