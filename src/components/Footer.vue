<template>
  <div>
      <Subscrition/>
      <FooterInformation/>
    </div>
</template>

<script>
import Subscrition from "./footer-component/Subscrition.vue";
import FooterInformation from "./footer-component/FooterInformation.vue"

export default { 
    name: "FooterShop",
    components:{
        Subscrition,
        FooterInformation,
    },

}
</script>

<style>

</style>