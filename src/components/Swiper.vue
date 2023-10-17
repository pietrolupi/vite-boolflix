

<script>

  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css';

  export default {

    props:{
    title: String,
    name: String,
    overview: String,
    rating: Number,
    poster: String,
    lang: String
  },



  mounted() {
    
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  };
</script>



<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- Aggiungi la paginazione personalizzata -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<style lang="scss" scoped>


.swiper-container {
  width: 100%;
  height: 300px; /* Personalizza l'altezza del carosello */
}

/* Stile per le slide del carosello */
.swiper-slide {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  font-size: 24px;
}

/* Personalizzazione della paginazione */
.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.swiper-pagination-bullet {
  width: 10px; /* Larghezza dei pallini della paginazione */
  height: 10px; /* Altezza dei pallini della paginazione */
  background-color: #0077ff; /* Colore dei pallini attivi */
  opacity: 0.5; /* Opacità dei pallini inattivi */
  margin: 0 5px; /* Margine tra i pallini */
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  background-color: #ff5500; /* Colore dei pallini attivi */
  opacity: 0; /* Opacità dei pallini attivi */
}
</style>