<template>
  <div class="wrapper d-flex align-items-center"> 
      <div class="my-container ">
          <div class="container-fluid">
              <div class="row  "> 
                  <div class="col-12 d-flex justify-content-center">
                      <h1>Brand Logo</h1>
                  </div>
                  <div class="col-12 d-flex">
                      <div class="col">
                        <img src="../../assets/img-progetto/b_logotype_1.png" alt="">                 
                  </div>
                   <div class="col">
                      <img src="../../assets/img-progetto/b_logotype_2.png" alt="">                    
           
                  </div>
                   <div class="col">
                      <img src="../../assets/img-progetto/b_logotype_3.png" alt="">                    
           
                  </div>
                   <div class="col">
                      <img src="../../assets/img-progetto/b_logotype_6.png" alt="">                    
           
                  </div>
                   <div class="col">
                      <img src="../../assets/img-progetto/b_logotype_7.png" alt="">                    
           
                  </div>

                  </div>

                    
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "BannerShop", 
    brands:[
        {
            img:"b_logotype_1.png", 
            brand:"Logo brand",
        },
        {
            img:"b_logotype_2.png", 
            brand:"Logo brand",
        },
        {
            img:"b_logotype_3.png", 
            brand:"Logo brand",
        },
        {
            img:"b_logotype_6.png", 
            brand:"Logo brand",
        },
        {
            img:"b_logotype_7.png", 
            brand:"Logo brand",
        },
    ]

}
</script>

<style lang="scss" scoped>  
@import "src/assets/style.scss"; 
.wrapper{
    margin-top: 5rem;
    height: 400px;
    background-color: rgb(246, 246, 246); 
    h1{
        opacity: .5; 
        text-transform: uppercase; 
        margin-bottom: 2rem;
    }
    .my-container{
        img{
            height: 200px;
        }
    }
    
    } 
</style>