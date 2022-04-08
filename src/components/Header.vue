<template>
    <header class="wrapper minW"> 
         <!--Social and Cart  -->
        <section id="up" class="border-bottom">
            <div class="my-container"> 
                <div class="conteiner-fluid">
                    <div class="row d-flex align-items-center">
                        <!-- Social -->
                        <div class="col-6 d-flex align-items-center"> 
                            <a href="">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" class="mx-2" />
                            </a>
                            <a href="">
                                <font-awesome-icon icon="fa-brands fa-twitter" class="mx-2"/>
                            </a>
                            <a href="">
                                <font-awesome-icon icon="fa-brands fa-instagram" class="mx-2"/> 
                            </a>
                            <a href=""> 
                                <font-awesome-icon icon="fa-brands fa-youtube" class="mx-2"/>
                            </a>
                        </div> 
                        <!-- Cart -->
                        <div class="col-6 d-flex dCenter justify-content-center "> 
                            <div class="col-3  dCenter ">
                                <a href="#">
                                    Shopping Cart
                                </a>
                            </div>
                            <div class="col-4  dCenter border-start border-end px-2">
                                <a href="#">
                                    My Account 
                                    <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2"/>
                                </a>
                            </div>
                            <div class="col-5 dCenter">
                                <a href="#">
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="mx-2"/>
                                    Cart
                                    <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2"/> 
                                </a>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>       
        </section>    
                <!--Shopping NavBar  -->
                    <section id="navbar">
                        <div class="my-container"> 
                            <div class="container-fluid">
                                <div class="row my-nav align-items-center">
                                    <div class="col p-0">
                                        <img src="../assets/img-progetto/classic_shop_logo2x.png" alt="Avada Logo">
                                    </div>
                                    <div class="col-7 ">
                                        <ul class="d-flex justify-content-evenly">
                                            <li v-for="(element, index) in nav" :key="index">
                                                    <a href="#">{{element}}</a> 
                                                    <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2"/>
                                            </li>
                                        </ul> 
                                    </div> 
                                    <div class="col d-flex justify-content-around align-items-center p-0">
                                        <button class="btn btn-primary rounded-pill px-5 text-uppercase">
                                            shop now!
                                        </button> 
                                        <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                  </section>
    </header>  
</template>


<script> 
export default { 
    name: "HeaderShop", 
    data: function (){
        return{
            nav:[
                "Home",
                "Shop",   
                "Products",
                "Category",
                "News",
                "Elements",

        ]
        }
        
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";  
header{
    background-color: white;
} 
.wrapper{
    width: 100%; 
    height: 150px; 
        .my-container{
            height: 60px;
            a{
                text-decoration: none; 
                color: $fedora;
                :hover{
                    color: $shark;
                }
            }
            .dCenter{
                height: 60px; 
                :hover{
                    background-color: silver;
                    color: $shark;
                }
            }
        }
    section#navbar{
        .my-nav{
        height: 100px;
        } 
        img{
        width: 150px;
        } 
        ul{ 
        margin: 0;
        padding: 0;
        li{
            border-top: 2px solid transparent;
            line-height: 100px;
            display: inline-block;
            margin-right: 1rem; 
            height: 100px; 
            list-style: none; 
                &:hover{
                border-top: 2px solid $hovelock;
                }  
            }
        }
    } 
    

}
    
</style>