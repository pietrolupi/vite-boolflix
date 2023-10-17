

<script>
export default {
  name: 'Card',
  props:{
    title: String,
    name: String,
    overview: String,
    rating: Number,
    poster: String,
    lang: String
  },

  methods:{
    getStars(rating) {
    let ratingHalved = Math.ceil(rating / 2);
    let output = [];

   
    for (let i = 1; i <= ratingHalved; i++) {
      output.push('<i class="fa-solid fa-star"></i>');
    }

   
    for (let i = ratingHalved + 1; i <= 5; i++) {
      output.push('<i class="fa-regular fa-star"></i>');
    }

    return output.join(' ');
  },

  },

  computed:{
    transform(x){

    }
  }
}
</script>

<template>
  
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="`https://image.tmdb.org/t/p/w500/${ poster }`" alt="Avatar" >
      </div>


      <div class="flip-card-back">
        <h1 v-if="name === null">TITLE: {{title}} </h1>
        <h1 v-else>TITLE: {{ name }} </h1>
        <p>OVERVIEW: {{ overview }}</p>
        <img v-if="lang === 'en'" src="../assets/en.png" alt="">
        <img v-else-if="lang=== 'it'" src="../assets/it.png" alt="">
        <p v-else>LANGUAGE: {{ lang }}</p>
        <p>RATING: <span v-html="getStars(rating)"></span></p>
      </div>
    </div>
</div> 

</template>


<style lang="scss" scoped>

  






//FLIP CARD CODE---------------------------------------------------------------------------------
.flip-card {
  background-color: transparent;
  width: 20%;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  img{
    width: 100% !important;
    max-height: 100%;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  img{
    width: 100%;
  }
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  img{
    width: 30px !important;
  }
}

</style>  