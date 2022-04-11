<template>
  <div>
      <div class="my-container minW">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-3">
                      <h1>Featured</h1>
                      <ul>
                          <li class="d-flex" v-for="element in color"  :key="element">
                              <div class="description">
                                <p class="text-capitalize">{{element.article}}</p>
                                <span class="fw-bold" :class="element.offert === false ?  '' : 'text-decoration-line-through' ">{{"$" + element.originalPrice}}</span> 
                                <span class="fw-bold"  v-if="element.sale != null">{{" $" + element.sale}}</span>
                                <div v-if="element.vote != null">
                                     <span class="text-primary fw-bold" v-for="number in element.vote" :key="number">
                                           &#9733;
                                    </span>
                                </div>
                              </div>
                              <figure>
                                  <img :src="require(`../../assets/img-progetto/${element.img}`)" alt="">
                              </figure>
                            </li>
                              
                      </ul>
                  </div>
                  <div class="col-3">
                      <h1>On sale</h1>
                      <ul>
                        <li class="d-flex" v-for="element in sale"  :key="element">
                            <div class="description">
                                <p>{{element.article}}</p>
                                 <span class="fw-bold" :class="element.offert === false ?  '' : 'text-decoration-line-through' ">{{"$" + element.originalPrice}}</span> 
                                <span class="fw-bold"  v-if="element.sale != null">{{" $" + element.sale}}</span>
                                <div v-if="element.vote != null">
                                     <span class="text-primary fw-bold" v-for="number in element.vote" :key="number">
                                           &#9733;
                                    </span>
                                </div>
                            </div>
                            <figure>
                                <img :src="require(`../../assets/img-progetto/${element.img}`)" alt="">
                            </figure>
                        </li>
                              
                      </ul>
                  </div>
                  <div class="col-3">
                      <h1>top rated</h1>
                       <ul>
                        <li class="d-flex" v-for="element in vote"  :key="element">
                            <div class="description">
                                <p>{{element.article}}</p>
                                <span class="fw-bold" :class="element.offert === false ?  '' : 'text-decoration-line-through' ">{{"$" + element.originalPrice}}</span> 
                                <span class="fw-bold"  v-if="element.sale != null">{{" $" + element.sale}}</span>
                                <div v-if="element.vote != null">
                                     <span class="text-primary fw-bold" v-for="number in element.vote" :key="number">
                                           &#9733;
                                    </span>
                                </div>
                            </div>
                            <figure>
                                <img :src="require(`../../assets/img-progetto/${element.img}`)" alt="">
                            </figure>
                        </li>
                              
                      </ul>
                  </div>
                  <div class="col-3">
                      <h1>latest reviews</h1>
                       <ul>
                        <li class="d-flex" v-for="element in reviews"  :key="element">
                            <div class="description">
                                <p>{{element.article}}</p> 
                                <span class="fw-bold" :class="element.offert === false ?  '' : 'text-decoration-line-through' ">{{"$" + element.originalPrice}}</span> 
                                <p class="fw-bold d-inline"  v-if="element.sale != null">{{" $" + element.sale}}</p>
                                <div>
                                     <span class="text-primary fw-bold" v-for="number in element.vote" :key="number">
                                           &#9733;
                                    </span>
                                </div>
                               
                            </div>
                            <figure>
                                <img :src="require(`../../assets/img-progetto/${element.img}`)" alt="">
                            </figure>
                        </li>
                              
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProductVote",
    data: function(){
        return{
            color:[], 
            sale:[],
            vote:[], 
            reviews:[],
            isSale:false,
            productFutured:[
                {
                    article:"Black Jacket",
                    color:"black",
                    material:null,
                    vote:null, 
                    originalPrice:125,
                    offert: false, 
                    sale:null,
                    reviews:null,
                    img:"black_leather_jacket-120x156.jpg"
                },
                {
                    article:"Black Leather Jacket", 
                    vote:5, 
                    color:"black",
                    material:"leather", 
                    originalPrice:235, 
                    offert: true, 
                    sale:200,
                    reviews:"admin",
                    img:"black_elegant_leather_jacket-120x156.jpg"
                },
                {
                    article:"Hipster Black Top", 
                    vote:null,
                    color:"black",
                    material: null,  
                    originalPrice:57,
                    offert: false, 
                    sale:null,
                    reviews:null,
                    img:"hipster_black_top-120x156.jpg"
                },
                {
                    article:"blue leather jacjet", 
                    vote:null,
                    color:"blue",
                    material:"leather",  
                    originalPrice:80, 
                    offert: true, 
                    sale:60,
                    reviews:null, 
                    img:"blue_leather_jacket-120x156.jpg"
                },
                {
                    article:"modern leather boots", 
                    vote:null,
                    color:"brown",
                    material:"leather",  
                    originalPrice:50, 
                    offert: true, 
                    sale:30,
                    reviews:null,
                    img:"modern_leather_boots-120x156.jpg"
                },
                {
                    article:"leather gloves", 
                    vote:5,
                    color:"brown",
                    material:"leather",  
                    originalPrice:45, 
                    offert: false, 
                    sale:null,
                    reviews:"beardman",
                    img:"leather_gloves-120x156.jpg"
                },
                {
                    article:"Spring printed dress", 
                    vote:5,
                    color:"rainbow",
                    material:null, 
                    originalPrice:47,
                    offert: false, 
                    sale:null,
                    reviews:"admin",
                    img:"spring_printed_dress-120x156.jpg"
                }
            ]
        } 
       
    },
    // computed:{
    //     star:function(){
    //         if(element.vote != null){
    //             return element.vote * "&#9733";
    //         }
    //     }
    // }, 
     methods:{ 
        filterColor :function() {
            for(let i =0; i < this.productFutured.length; i++){
                if(this.productFutured[i].color == "black")
                    this.color.push(this.productFutured[i])
            }
        }, 
     filterSale: function(){
         for(let i =0; i < this.productFutured.length; i++){
                if(this.productFutured[i].sale != null)
                    this.sale.push(this.productFutured[i])
            }
        }, 
        filterVote:function(){ 
            for(let i =0; i < this.productFutured.length; i++){
                if(this.productFutured[i].vote ==  5 )
                    this.vote.push(this.productFutured[i])
            }

        },
        filterReview:function(){ 
            for(let i =0; i < this.productFutured.length; i++){
                if(this.productFutured[i].reviews !=  null )
                    this.reviews.push(this.productFutured[i])
            }

        },    

     }, 
     mounted(){
         this.filterColor(this.color);
         this.filterSale(this.material)
         this.filterVote(this.vote) 
         this.filterReview(this.reviews)
     }
     

}
</script>

<style lang="scss" scoped> 

h1{
    text-transform: uppercase;
}
p{
    text-transform: capitalize;
}
ul{
    padding: 0;
    li{
        list-style: none; 
        height: 170px;
        border-bottom: 1px solid silver ;
        margin-top: 1rem;
        .description{
            width: calc(100% / 2);
        }
    }
}

</style>