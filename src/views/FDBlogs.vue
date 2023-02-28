<template >
<section ref="fd-blogs" class="fd-blogs fd_background_silver" >
    <h2 class="fd_h2-desktop fd_h2-mobile"> Recent Blog Posts</h2>
    <div class="fd-blogs__display">
   <FDBlog image="do_more.png" title="Microblogging Website Using Contentful and Fundamental Library Styles" description="I read a joke somewhere on the internet “NASA sends rockets to the moon and here we are trying to center a div in a webpage”. While that statement can be true …" url="https://medium.com/fundamental-library/microblog-website-using-contentful-and-fundamental-library-styles-8d3abb0c32d5"></FDBlog>
   <FDBlog image="passion.png" title="Unleash the Power of Fundamental Library Styles: 5 Diverse Projects to Try" description="Are you tired of spending countless hours designing and building consistent and accessible user interfaces for your web-based projects?..." url="https://medium.com/fundamental-library/unleash-the-power-of-fundamental-library-styles-5-diverse-projects-to-try-52e8434a5fe4"></FDBlog>
   <FDBlog image="reason.png" title="13 Reasons Why a Front-End Developer Should Use the Fundamental Library Styles" description="Are you a front-end developer looking to improve your skills and streamline your workflow? Look no further than utilizing the ..." url="https://medium.com/fundamental-library/13-reasons-why-a-front-end-developer-should-use-the-fundamental-library-ef068d674dbd"></FDBlog>
   <FDBlog image="ios.png" title="iOS App using Swift and Fundamnetal Library Style" description="Hard Coded HTML Based — Part 2 — In this post, I have decided to combine iOS development and Fundamental Library to bring a new iOS app styled using Fundamental Library Styles. While Fundamental Library ..." url="https://medium.com/fundamental-library/ios-app-using-swift-and-fundamental-library-style-deecc9b29f32"></FDBlog>
</div>
<FDButton url="https://medium.com/fundamental-library" title="Fundamental Library Medium" buttonName="See More"></FDButton>

    </section>
    
            </template>
            
            
            <script>
            import svgs from "@/assets/js/svg.js";
            import FDBlog from "@/components/FDBlog.vue";
import FDButton from "@/components/FDButton.vue";
       
            
           
           export default {
           
            
             el: "#FDBlog",
             components: {
    FDBlog,
    FDButton
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
            
        .fd-blogs {
            display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 36px;
   
    &__display {
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        gap: 36px;

    }
  
    
    
        }
      
     
           
        @media only screen and (min-width: 734px) {
        .fd-blogs{
            gap: 50px;


        &__display {
            display: grid; 
  grid-template-columns: auto auto; 
  grid-template-rows: auto auto auto; 
  gap: 63px 68px; 
  grid-template-areas: 
    ". ."
    ". ."; 
        }
        h2{
            text-align: left;
        }
      }
    }
           
            
            </style>