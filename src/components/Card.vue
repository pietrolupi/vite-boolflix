

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
      output.push('<i class="golden fa-regular fa-star"></i>');
    }


    return output.join(' ');
  },


  },

 
}
</script>


<template>
 
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img v-if="poster == null" src="../assets/image_not_available.png" alt="">
        <img v-else :src="`https://image.tmdb.org/t/p/w500/${ poster }`" alt="Avatar" >
      </div>




      <div class="flip-card-back">
        <h5 v-if="name == null"> {{title}} </h5>
        <h5 v-else> {{ name }} </h5>
        <p class="overview"> {{ overview }}</p>

        <div>
          
          <img v-if="lang === 'en'" src="../assets/en.png" alt="">
          <img v-else-if="lang=== 'it'" src="../assets/it.png" alt="">
          <p v-else>Language: <span class="text-uppercase">{{ lang }}</span> </p>
          <p class="mt-2">RATING: <span v-html="getStars(rating)"></span></p>
        </div>
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
  margin: 40px 20px;
  font-weight: 600;
  min-width: 280px;
  cursor: pointer;
  
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
  
    height: 100%; 
    object-fit: cover; 
  }
}


.flip-card-back {
  background-color: rgba(5, 5, 6, 0.867);
  color: white;
  transform: rotateY(180deg);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  img{
    width: 30px !important;
  }

  .overview{
    font-size: 0.85rem;
  }

  .golden{
    color: goldenrod;
  }
  h5{
    font-weight: 900;
  }
}


</style>  

