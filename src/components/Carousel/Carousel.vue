<template>
  <div class="col-3"> 
      <figure >
        <img :src="require(`../../assets/img-progetto/${image.img}`)" class="card-img-top" alt="...">
      </figure> 
    </div>
</template>

<script>
export default { 
    name:"CarouselShop",
    props:["image", "index"],

}
</script>

<style lang="scss" scoped>
@import "src/assets/style.scss"; 


</style>