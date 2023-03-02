<template >

    <div class="fd-library">
        <img :src="require(`@/assets/images/${img}`)" alt="Image of {{ title }}"/>
            <h3 class=" fd_h3-mobile fd_h3-desktop">{{ title }} </h3>
            <div class="fd-library__paragraph">
            <p class="fd_p-mobile fd_p-desktop" >{{ description }}</p>
           
        </div>
            <FDButton :url="url" title="Documentation" :buttonName="buttonName"></FDButton>

           
            

    </div>
    
            </template>
            
            
            <script>
            import svgs from "@/assets/js/svg.js";

           import FDButton from "./FDButton.vue";
           
           export default {
           
            
             el: "#FDBlog",
             props: {
    img: String,
    title: String,
    description: String,
    url:String,
    buttonName:String,
  

  },
             components: {
           FDButton,
           
             },
             data() {
               return {
                 svgs,
               };
             },
            
             }
           </script>
            
            <style lang="scss" scoped>
                @import "@/assets/scss/styles.scss";
            
        .fd-library {
            display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-items: center;
    padding: 32px 24px;
    gap: 36px;
    height:60%;
    
    
    
    
    background: #F5F6F7;
    /* Shadows/Grey/Level 1 */
    box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16), 0px 8px 16px rgba(91, 115, 139, 0.16);
    border-radius: 24px;
    
   &__paragraph {
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    text-align: left;
    gap: 30px;


   

 }
    
    
        }
           
        @media only screen and (min-width: 734px) {
        .fd-library {
            width:60%;
            height: auto;
            
        }}
            </style>