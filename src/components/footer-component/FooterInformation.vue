<template>
  <div class="wrapper text-white">
      <div class="my-container minW">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-3">
                      <ul class="company">
                          <li class="mt-3" v-for="element in company" :key="element" >
                              <img :src="require(`../../assets/img-progetto/${element.img}`)" alt=""> 
                              <div class="company mt-5">
                                  <h3 class="text-capitalize" >{{element.address}}</h3>
                                  <h3 class="text-capitalize">{{element.city}}</h3> 
                                  <h3> Phone: {{element.phone}}</h3>
                                  <h3>Email: {{element.mail}}</h3>
                                  <h3>Web: {{element.web}}</h3> 
                                  <div class="social">
                                    <a href="#">
                                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="mx-2" />
                                    </a>
                                    <a href="#">
                                        <font-awesome-icon icon="fa-brands fa-twitter" class="mx-2"/>
                                    </a>
                                    <a href="#">
                                        <font-awesome-icon icon="fa-brands fa-instagram" class="mx-2"/> 
                                    </a>
                                    <a href="#"> 
                                        <font-awesome-icon icon="fa-brands fa-youtube" class="mx-2"/>
                                    </a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div> 
                  <div class="col-3">
                      <h1 class="text-white text-uppercase text-center">top rated</h1>
                       <ul class="product">
                            <li class="d-flex justify-content-between" v-for="element in products" :key="element" >
                                
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
                      <h1>Recent post</h1>
                      <ul class="recent">
                          <li class="border-bottom py-3" v-for="index in posts" :key="index"> 
                              <p> <font-awesome-icon class="mx-1" icon="fa-solid fa-angle-right" /> {{index}}</p>
                          </li>
                      </ul>
                  </div>
                  <div class="col-3"> 
                      <h1>Tags</h1>
                      <ul class="recent">
                          <li>
                            <div class="d-flex flex-wrap">
                                <button  v-for="index in tags" :key="index" class="btn btn-outline-light m-1">{{index}}</button>
                            </div> 
                              
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
    name:"FooterInfo",
    data: function(){
        return{
            company:[
                {
                    img:"classic_shop_logo_footer.png", 
                    address:"12345 north main street", 
                    city:"new york, NY 555555",
                    phone:"1.800.555.6789", 
                    mail:"info@company.com", 
                    web:"theme.fusion.com",

                }
            ], 
            products:[
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


            ], 
            posts:[
                "Lorem ipsum dolor sit amet", 
                "Odit saepe dicta neque impedit beatae",
                "inventore repellendus omnis doloremque",
                "consectetur adipisicing elit.  vero ",
                "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", 
            ], 
            tags:["Black", "boots", "Brown", "Casual", "D&G", "Fabric", "flowers", "Grey", "hat", "Hipster", "lines", "multipurpose", "New York", "Outdoors", "red", "responsive", "summer", "sweater", "travel", "Warm", "White", "winter"]
        }
    }

}
</script>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.wrapper{
    height: 600px;
    background-color:#2b2e32;
    h1{
        text-align: center;
    } 
    p{
        margin: 0;
    }
    a{
        color: white;
        font-size: 3rem;
    }
    ul{
        li{
            list-style: none;
        }
    } 

}


</style>