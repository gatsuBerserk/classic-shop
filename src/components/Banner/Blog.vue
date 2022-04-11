<template>
  <div class="my-container">
      <div class="container">
          <div class="row">
              <div class="col-4 mt-5 " v-for="(element, index) in itemsBlog" :key="index">
                  <div class="card my-size border-0" >
                        <img :src="require(`../../assets/img-progetto/${element.img}`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{element.title}}</h5>
                            <p class="card-text">{{element.date}}.</p>
                            <p class="card-text">{{element.comments}} Comments.</p>
                            
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "BlogBanner",
    data: function(){
        return{
            itemsBlog:[
                {
                    img:"post_img_12-700x441.jpg", 
                    title:"Aenean labortis sapien enim vivera", 
                    date:"September 9th, 2015", 
                    comments: 0
                }, 
                 {
                    img:"post_img_11-700x441.jpg", 
                    title:"Duis ac massa semper maximus", 
                    date:"September 9th, 2015", 
                    comments: 0
                },  {
                    img:"post_img_10-700x441.jpg", 
                     title:"Nunc femint nulla eu justo sem id", 
                    date:"September 9th, 2015", 
                    comments: 0
                }, 
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

</style>