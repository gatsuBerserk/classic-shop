<template>
  <div class="wrapper d-flex align-items-center ">
      <div class="my-container minW "> 
          <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex justify-content-evenly align-items-center">
                    <div class="icon-mail d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-solid fa-envelope" /> 
                     </div>
                     <div class="info mx-4 text-start">
                         <h1>
                             Subscrive now amd get special offert
                         </h1>
                     </div>
                     <div class="input">
                         <input class="insert" type="text" placeholder="Insert your email"> 
                         <button class="btn btn-primary rounded-pill px-5"> Send </button>
                     </div>
                </div>
            </div>  
        </div> 
    </div> 
  </div>
</template>

<script>
export default { 
    name:"SubscriptionMail",

}
</script>

<style lang="scss" scoped>
@import "src/assets/style.scss";
  .wrapper{
      height: 300px; 
      background-color: #303337; 
      .my-container{ 
            .icon-mail{
                width: 60px;
                height: 60px;
                background-color: #2b2e32;
                font-size: 2rem;  
                border-radius: 50%; 
                color: white;
                }
            .info{
                color: white;
                font-weight: bolder;
            }
            .input{
                display: flex;
                .insert{
                    padding-left: 1rem;
                    border: transparent;
                    border-radius:20px;
                    width:400px;
                    margin-right:2rem ;
                }
            }
            
        } 

    }
  
</style>