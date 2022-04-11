<template>

<div class="col-3 p-1">
  <div class="card h-100 border-0">
        <img :src="require(`../../assets/img-progetto/${futuredObject.img}`)" class="card-img-top" alt="...">           
            <div class="card-body text-capitalize">
                <h5 class="card-title">{{futuredObject.product}}</h5>
                    <p class="card-text">{{futuredObject.genre}}, {{futuredObject.type}} {{model}}</p>
                    <span class="card-text text-decoration-line-through me-1">{{angebote}}</span>
                    <span class="card-text">{{"$" + futuredObject.priceActual}}</span>
             </div>
    </div> 
</div> 
			
</template>

<script>
export default { 
    name: "FeaturedProduct",
    props:{
        futuredObject : Object
    }, 
    computed:{
        angebote:function(){
            if(this.futuredObject.originalPrice){
                return ("$"+ this.futuredObject.originalPrice)
            }return (" ")
        },
        model:function(){
            if(this.futuredObject.model != null){
                return("," + this.futuredObject.model)
            }return ("")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style.scss";
  span{
      color: $hovelock;
  } 
  </style>