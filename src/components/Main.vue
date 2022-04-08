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
   
</div>
     
    
</template>

<script>
import Jumbo from "../components/Jumbo.vue";
import FeaturedProducs from './Products/FeaturedProducs.vue';

export default { 
    name:"MainShop", 
    components:{
      Jumbo,
      FeaturedProducs, 
    }, 
     data: function(){
        return{
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

            ]
        }
     }

}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss"; 
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
</style>