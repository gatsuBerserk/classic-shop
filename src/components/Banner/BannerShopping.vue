<template>
  <div class="wrapper"> 

      <div class="my-container d-flex align-items-center justify-content-center "> 
          <div class="left me-5 ">
              <div class="sale">
                  <h1 class="mb-4">70% Off</h1>
                  <h5 class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing</h5> 
                  <button class="btn btn-outline-light rounded-pill"> View More</button>
              </div>            
          </div>
           <div class="right">
                    <div class="sale">
                        <h1 class="mb-4">Free Shipping</h1>
                        <h5 class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing</h5> 
                        <button class="btn btn-outline-light rounded-pill">View More</button>
                </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "BannerShop",

}
</script>

<style lang="scss" scoped>  
@import "src/assets/style.scss"; 
.wrapper{
    height: 600px;
    background-image: url("../../assets/img-progetto/bkgd_confetti-compressor.jpg");
    background-position:center; 
    background-size:100%;
    background-repeat: no-repeat;
    overflow: hidden; 
    
    } 

    .my-container{ 
        height: 100%;
        .left{
            position: relative;
            background: url("../../assets/img-progetto/promo_box_1_bg.jpg") no-repeat ;
            background-position:center;
            background-size: 100% 100%;
            object-fit: contain; 
            .sale{
                width: 50%;
                color: white;
                position:absolute;
                top: 37%;
                left: 10%;
            }
        }
        .right{
            position: relative;
             background: url("../../assets/img-progetto/promo_box_2_bg.jpg") no-repeat ;
            background-position:center;
            background-size: 100% 100%;
            object-fit: contain; 
             .sale{
                width: 50%;
                color: white;
                position:absolute;
                top: 37%;
                left: 10%;
            }
        }
        .right,
        .left{ 
            width: calc(100% / 2 ); 
            height: 60%;
            overflow: hidden;
        }
        
    
    }


</style>