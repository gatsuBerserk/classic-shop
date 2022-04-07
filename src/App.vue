<template>
  <div id="app">
    <Header/> 
    <JumboArrivals/> 
    <Main/> 
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue' 
import JumboArrivals from "./components/JumboArrivals.vue" 
import Main from "./components/Main.vue" 
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: { 
    Header, 
    JumboArrivals, 
    Main, 
    Footer,
    
  }
}
</script>

<style lang="scss"> 
@import "./assets/style.scss";  

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
