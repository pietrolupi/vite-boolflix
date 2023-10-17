
<script>
import { store } from '../data/store';
export default {

  data(){
    return{
      store,
    }
  }
}
</script>


<template>

  <div class="error">
    <p>Nessun risultato per la tua ricerca.</p>
  </div>
  
</template>



<style lang="scss" scoped>
  .error{
    
    p{
      margin-top: 150px;
      text-align: center;
      font-size: 4rem;
      color: white;
    }
  }
</style>