

<script>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import { store } from '../data/store';
 
 

  export default {
    components: {
      Swiper,
      SwiperSlide,
 
    },

    data(){
      return{
        store
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>


<template>
  
  <swiper
   :slidesPerView="3"
   :spaceBetween="30"
   :pagination="{
     clickable: true,
   }"
   :modules="modules"
   class="mySwiper"
 >
   <swiper-slide
   v-for="movie in store.popularList"
      :key="movie.id"
      >
      <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="Avatar" >
      
    </swiper-slide>
   
 </swiper>
</template>



<style lang="scss" scoped>

.swiper {
  width: 100%;
  height: 75vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  cursor: pointer;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>