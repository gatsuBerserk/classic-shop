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
                                <p>{{element.article}}</p>
                                <p>{{element.originalPrice}}</p>
                                <p>{{element.vote}}</p>
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
                                <p>{{element.originalPrice}}</p>
                                <p>{{element.vote}}</p>
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
                                <p>{{element.originalPrice}}</p>
                                <p>{{element.vote}}</p>

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
                                <p>{{element.originalPrice}}</p>
                                <span v-for="number in element.vote" :key="number">
                                           &#9733;
                                </span>
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
            productFutured:[
                {
                    article:"Black Jacket",
                    color:"black",
                    material:null,
                    vote:null, 
                    originalPrice:125, 
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
                    sale:null,
                    reviews:"admin",
                    img:"spring_printed_dress-120x156.jpg"
                }
            ]
        } 
       
    }, 
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


ul{
    padding: 0;
    li{
        list-style: none;
        .description{
            width: calc(100% / 2);
        }
    }
}

</style>