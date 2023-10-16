

<script>
export default {
  name: 'Card',
  props:{
    title: String,
    overview: String,
    rating: Number,
    poster: String
  }
}
</script>

<template>
  
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="`https://image.tmdb.org/t/p/w500/${ poster }`" alt="Avatar" style="width:300px;height:300px;">
      </div>
      <div class="flip-card-back">
        <h1>TITLE: {{title}}</h1>
        <p>OVERVIEW: {{ overview }}</p>
        <p>RATING: {{rating}}</p>
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
}

</style>