<template>
  <div class="col"> 
    <figure>
       <img class="img-fluid" :src="require(`../../assets/img-progetto/${seasonObject.img}`)" alt="prova">
    </figure>       
  </div>
</template>

<script>
export default { 
    name: "BannerSeason", 
    props:{
      seasonObject: Object
    }

}
</script>

<style lang="scss" scoped>
@import "src/assets/style.scss";  

.center{
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
figure{
  background-size: cover;
}


</style>