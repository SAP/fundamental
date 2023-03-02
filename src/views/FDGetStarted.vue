<template>
   
       
       <h2 class="fd_h2-desktop fd_h2-mobile">
Getting Started
       </h2>
       <p class="fd_p-mobile fd_p-desktop">Using the Fundamentals is as easy as stacking lego blocks. We will show you just how easy it is to get started through any of our available technology Library guides.</p>
  
<div class="fd-getStarted__cards">
  <FDLibrary img="Combologo-styles.png" title="fundamental-styles" url="https://github.com/SAP/fundamental-styles" buttonName="Explore"></FDLibrary>
  <FDLibrary img="Combologo-angular.png" title="fundamental-ngx-core" url="https://github.com/SAP/fundamental-ngx" buttonName="Explore"></FDLibrary>
  <FDLibrary img="Combologo-angular.png" title="fundamental-ngx-platform" url="https://github.com/SAP/fundamental-ngx" buttonName="Explore" ></FDLibrary>
  

   
</div>

   
    
    </template>
    
    <script>
 import svgs from "@/assets/js/svg.js";
 import FDLibrary from "@/components/FDLibrary.vue";

export default {

 
  el: "#FDGetStarted",
  components: {
FDLibrary

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
    
    .fd-getStarted{
      display: flex;
      flex-direction: column;
    align-items: left;
    gap:24px;
    h2{
      text-align: left;
    }
    

      
    &__cards{
        display: flex;
        flex-direction: column;
        gap:1.5rem;
    }
    
    &__card {
        width: 100%;
height: 170px;
flex-wrap: wrap;


background: #F5F6F7;
/* Shadows/Grey/Level 1 */
box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16), 0px 8px 16px rgba(91, 115, 139, 0.16);
border-radius: 16px;
span {
    
   

}
a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.55rem 3rem;
    cursor: pointer;
    gap:25px;
    font-family: '72';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 140%;
text-decoration: none;
color:#000000;
}
&:hover {
        color: #2865be;
      }

      &:active {
        color: #052e69;
      }

      &:focus {
        outline: none;
        color: #3e86ef;
        border-color: #9747ff;
      }
    }
    }

    @media only screen and (min-width: 734px) {
   
        .fd-getStarted{
            

            &__cards{
                flex-direction: row;
            }
            &__card {
                height: 232px;
                 a{
                    font-size: 24px; //fix it with clamp 
                 }
            }
        }
        .fd_p-desktop{
          width:50%
        }
  
  
  }
    
    
    </style>