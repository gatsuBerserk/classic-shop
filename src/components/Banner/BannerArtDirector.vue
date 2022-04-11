<template>
  <div class="wrapper">  
      <div class="sbagliato">

      </div>
      <div class="giusto">

      </div> 
    <div class="artista">
        <img src="../../assets/img-progetto/man_testimonial.png" alt=""> 
    </div> 
 
        <div class="text ">
            <h5>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed quo minus voluptatibus illum voluptatem voluptate nulla reiciendis eaque reprehenderit corporis excepturi id, vel repellendus fugit rerum quis veniam. Culpa.
            </h5> 
            <h5>Firma</h5>
        </div>
   
  </div>

</template>

<script>
export default {
    name: "BannerArtDirector",

}
</script>

<style lang="scss" scoped>  
@import "src/assets/style.scss"; 
.wrapper{ 
    position: relative;
    height: 600px; 
    div.artista{
        position: absolute;
        top: 20%;
        left: 50%; 
        transform: translate(-50%, -50%);
    } 
    .text{
        text-align: center;
        color: white;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        h5{
            line-height: 3rem;
        }
    } 
    div.sbagliato{
        height: 20%;
        width: 100%;
        background: url("../../assets/img-progetto/testimonials_home_1_bg.jpg") no-repeat center;
        background-size: 100%;
        object-fit: cover;

    } 
    div.giusto{
        background: url("../../assets/img-progetto/testimonials_home_1_bg.jpg") center;
        height: 80%;
        width: 100%;
        background-size: 100%;
        object-fit: contain;

    }
    
    } 


</style>