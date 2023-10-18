

<script>

import { store } from '../data/store';

export default {
  name: 'Loader',

  data(){
    return{

      store,
    }
  }
}
</script>


<template>
  <div class="load-container">
    
    <span class="loader"> </span>
    
  </div>
</template>


<style lang="scss" scoped>

  .load-container{
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
 
  text-align: center;
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
  color: #e50913;
  animation: fill 1s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  left: 80px;
  top: 0;
  animation: fill 0.9s ease-in infinite alternate;
}

.loader::after {
  left: auto;
  right: 80px;
  animation-duration: 1.1s;
}

@keyframes fill {
 0% {  box-shadow: 0 0 0 2px inset }
 100%{ box-shadow: 0 0 0 10px inset }
}
  
</style>