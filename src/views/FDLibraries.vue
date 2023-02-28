<template >
    <section class="fd-libraries fd_background_silver" >
        <h2 class="fd_h2-desktop fd_h2-mobile"> Libraries</h2>
       <div class="fd-libraries__display">
    <FDLibrary img="Combologo-styles.png" title="fundamental-styles" description="Fundamental Styles simplifies building consistent SAP Fiori apps in any web-based technology (Angular, Vue, React, etc.). It offers designed and pre-built components for easy implementation and is open-source and community-driven. " url="https://sap.github.io/fundamental-styles/?path=/docs/introduction--overview" buttonName="Documentation"></FDLibrary>
    <FDLibrary img="Combologo-angular.png" title="fundamental-ngx-core" description="The Fundamental NGX library is based on the Angular framework and Fundamental Styles, giving its components a modern look. It offers already built and ready-to-use components which reduce drastically the overall coding time and lines for the developer. " url="https://sap.github.io/fundamental-ngx/#/core/home" buttonName="Documentation"></FDLibrary>
    
    <FDLibrary img="Combologo-angular.png" title="fundamental-ngx-platform" description="Fundamental NGX Platform aims to simplify application development by offering pre-built generators (such as forms and wizards) for dynamic controls with minimal effort from developers. It is a layer built on top of Fundamental NGX Core" url="https://sap.github.io/fundamental-ngx/#/platform/home" buttonName="Documentation"></FDLibrary>

</div>
        </section>
        
                </template>
                
                
                <script>
                import svgs from "@/assets/js/svg.js";
import FDLibrary from "@/components/FDLibrary.vue";
           
                
               
               export default {
               
                
                 el: "#FDBlog",
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
                
            .fd-libraries {
                display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
       &__display {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
       }
        
      
        
        
            }
          
         
               
            @media only screen and (min-width: 734px) {
            .fd-libraries{
                gap: 50px;
                &__display {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 64px;
       }
        
                
        }
    }    
                
                </style>