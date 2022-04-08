<template>
  <section class="jumbo minW position-relative">
    <section class="collection">
      <h1>brand news arrivals</h1>
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
  background: url(../assets/img-progetto/home1_slide_three_bg_2.jpg) top/ cover;
  background-repeat: no-repeat; 
  background-size: 100%; 
  .offert{ 
      div.demons, 
          div.price{ 
            border-radius: 10px;
            width: 100px;
            height: 100px;
            background-color:$confetti; 
            border: 1px solid black; 
            margin-bottom: 1rem;
          }
  } 
  section.collection{  
    position: absolute;
    top:50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    color: white;
    text-transform: capitalize;

  }
    
   
}


</style>