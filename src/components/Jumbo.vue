<template>
  <section class="jumbo minW position-relative"> 
    <div class="offert">
      <div class="box dCenter">
        <font-awesome-icon icon="fa-solid fa-cart-plus" />
      </div>
      <div class="dCenter price">
        <p> 
          <sup>&dollar;</sup>39  
        </p> 
        <span>
          On Sale
        </span> 
      
      </div> 
    </div>
    <section class="collection"> 
      <div class="title">
         <h1>brand news arrivals</h1> 
         <h2>new collection from new york</h2>
      </div>
      <div>
      <button class="btn btn btn-outline-light text-uppercase mx-3 rounded-pill px-5 py-3">
        view all
      </button> 
      <button class="btn btn btn-outline-light text-uppercase rounded-pill px-5 py-3">
        looklbook
      </button> 
      </div>
      
    </section>
  </section>
</template>

<script>
export default { 
    name: "JumboArrivals",

}
</script>

<style lang="scss" scoped> 
@import "../assets/style.scss"; 
.jumbo{
  position: relative; 
  height: 800px;
  background: url('../assets/img-progetto/home1_slide_three_bg_2.jpg') no-repeat; 
  object-fit: contain;
  background-position: center;
  background-size:100%; 
  
      div.offert { 
        position: absolute; 
        top:0%; 
        right: 2%;
        transform: translate(-5%, -5%);
         
        .box, 
        .price{ 
        flex-direction: column; 
        margin-bottom: 1rem;
        width: 50px;
        height: 50px; 
        background-color: white;
        border-radius:10px ; 
        box-shadow:0 0 20px rgba(0, 0, 0, 0.8);
        
        } 
        
        .price{
          p{
            margin-bottom: 0;
            color: $confetti;
          } 
        span{
          font-size: .6rem;
        }
        }
      }
  section.collection{ 
    width: 100%;
    min-width: 800px;  
    position: absolute;
    top:50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    color: white;
    text-transform: capitalize;
    text-align: center;
    
      div.title{ 
        h1{
        font-size: 6rem;
        font-weight: bolder;
        } 
        h2{
        opacity: .7;
        font-weight: 100;
        font-size: 2.5rem;
        margin:2.3rem 2.3rem ;
        text-transform: uppercase;
        }
      }
    
  }
    
   
}


</style>