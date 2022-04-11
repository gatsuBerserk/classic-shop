<template>
<div>
   <Jumbo/>
        <div class="my-container minW">
          <div class="container-fluid">
              <div class="row ">
                  <div class="col-12 text-center mt-5">
                      <div class="title dCenter text-capitalize">
                          <span>
                          </span>
                          <h1>
                              featured producs
                          </h1>
                          <span>
                          </span>
                      </div> 
                        <p> Must have products from our top sellers</p>
                  </div> 
                  <div class="col-6 offset-3 mt-5">
                    <div class="selection d-flex ">
                      <div class="man"> Man</div>
                      <div class="woman"> Woman</div>
                      <div class="accessories">Accesories</div>

                    </div>
                  </div>  
              </div>
          </div>
          <div class="col-12 d-flex flex-wrap mt-3"> 
              <FeaturedProducs 
                v-for="(element, index) in Featured" :key="index"
                :futuredObject="element"
                /> 
      </div> 
   </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex flex-wrap minW">
         
           <BannerSeason 
           v-for="(element, index) in bannerSeason" :key="index"
                :seasonObject="element" 
                /> 
            
        </div>
      </div>
    </div>  
    <!-- carousel -->
    <div class="my-container minW">
      <div class="container-fluid">
        <div class="row border position-relative"> 
           <button  class="position-absolute next"> &#10094; </button> 
           <h1>carousel</h1>
          <Carousel  
          v-for="(element, index) in Featured" :key="index" 
          :image="element" 
          />
          
            <button class="position-absolute previus" >&#10095;</button>
        </div>
      </div>
    </div> 
    <BannerShopping/> 
    <div class="container-fluid">
        <div class="row border position-relative"> 
           <button  class="position-absolute next"> &#10094; </button> 
           <h1>carousel</h1>
          <Carousel  
          v-for="(element, index) in Featured" :key="index" 
          :image="element" 
          />
          
            <button class="position-absolute previus" >&#10095;</button>
        </div>
      </div>
      <BannerArtDirector/> 
      <BlogBanner/>
      <ProductVote/>
      <BannerBrand/> 
      
</div>
     
    
</template>

<script>
import Jumbo from "../components/Jumbo.vue";
import FeaturedProducs from './Products/FeaturedProducs.vue'; 
import BannerSeason from "./Banner/BannerSeason.vue";
import Carousel from "./Carousel/Carousel.vue"; 
import BannerShopping from "./Banner/BannerShopping.vue" 
import BannerArtDirector from "./Banner/BannerArtDirector.vue"
import BlogBanner from "./Banner/Blog.vue"
import ProductVote from "./Products/ProductVote.vue"
import BannerBrand from "./Banner/BannerBrand.vue"

export default { 
    name:"MainShop", 
    components:{
      Jumbo,
      FeaturedProducs,
      BannerSeason,
      Carousel,
      BannerShopping,
      BannerArtDirector,
      BlogBanner,
      ProductVote,
      BannerBrand,
    }, 
     data: function(){
        return{
            activeElement: 0,
            Featured:[
                {
                    img:"black_elegant_leather_jacket.jpg",
                    product: "black leather jacket", 
                    genre: "men", 
                    type:"jackets", 
                    model: "jeans",
                    originalPrice: 235, 
                    priceActual: 200
                },
                 {
                    img: "black_leather_suit.jpg",
                    product: "black leather Suit", 
                    genre: "men", 
                    type:"jackets", 
                    model: null,
                    originalPrice: null,  
                    priceActual: 176
                },
                 {  
                   img:"blue_jacket_and_white_stripe_tee.jpg",
                    product: "blue jacket & stripe tee", 
                    genre: "men", 
                    type:"jackets", 
                    model: "suis",
                    originalPrice: null,  
                    priceActual: 580
                },
                 {
                    img:"blue_leather_jacket.jpg",
                    product: "modern black leather suit", 
                    genre: "men", 
                    type:"jackets", 
                    model: null,
                    originalPrice: null,  
                    priceActual: 96
                },

            ], 
            bannerSeason:[
                {
                  img:"winter_collection_bg.jpg", 
                  season:"Winter Collection", 
                  description:"Stylish and warm", 
                  textButtom:"viwe more", 
                }, 
                 {
                  img:"spring_collection_bg.jpg", 
                  season:"Sping Collection ", 
                  description:"Bright and colorful", 
                  textButtom:"viwe more", 
                }, 
                 {
                  img:"autumn_collection_bg.jpg", 
                  season:"Autumn Collection", 
                  description:"Rich and confortable  ", 
                  textButtom:"viwe more", 
                }, 
            ], 
            carousel:[
              {
                img:""
              }

            ]
        }
     }

}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss"; 
// da cancellare
.border{
  border: 1px solid black;
}

.my-container{ 
    div.title{ 
        h1{
            margin:0 20px;
        }

        span{
            width:calc(40% - 8px) ;
            height: 1px;
            background-color: $cascade;
        }
    } 
    div.selection{
      .man,
      .woman, 
      .accessories{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $cascade;
        height: 50px;
        text-align: center;
        width: calc(100% / 3); 
          &:hover{
            background-color: $cascade;
          }
      } 

    }
}
.next{
      width: 30px;
      height: 40px;
      bottom: 50%;
      left: 0%;

    } 
  .previus{
    width: 30px;
    height: 40px;
    bottom: 50%;
    right: 0%;

  }
</style>