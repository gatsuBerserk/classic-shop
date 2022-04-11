<template>
  
  <div class="col-3"> 
    
      <figure >
        <img :src="`../../assets/img-progetto/${image.img}`" class="card-img-top" alt="...">
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
.border{
  border: 1px solid black;
} 
.filter{
  filter:blur(3px)
}


</style>