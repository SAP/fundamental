<template>
    <section class="fd-connect  fd_background_silver">
      <h2 class="fd_h2-mobile fd_h2-desktop">Connect With Us
      </h2>
      <p class=" fd_p-mobile fd_p-desktop">Join our vibrant community of developers and help drive the Fundamental Libraries forward! Take part in the conversation through our various communication channels and stay up to date with the latest news on Fundamentals through out social channels.</p>
      <div class="fd-connect__socials">
        <a href="https://github.com/SAP/fundamental-styles"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.github" aria-hidden="true"> </span> GitHub</a>
    <a href="https://ui-fundamentals.slack.com/"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.slack" aria-hidden="true"> </span> Slack</a>
    <a href="https://www.linkedin.com/company/sap-graph"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.linkedin" aria-hidden="true"> </span> LinkedIn</a>
    <a href="mailto:fundamental@sap.com"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.email" aria-hidden="true"> </span> Email</a>
    <a href="https://twitter.com/fundamental_lib"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.twitter" aria-hidden="true"> </span> Twitter</a>
    <a href=" https://www.youtube.com/channel/UCkq8zSSBngKze-rUypz0t2w"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en">
    <span v-html="svgs.youtube" aria-hidden="true"> </span> Youtube</a>
  
      </div>
    </section>
   
    
    </template>
    
    <script>
 import svgs from "@/assets/js/svg.js";


export default {

 
  el: "#FDGetStarted",
  components: {


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
    
    .fd-connect{
        display: flex;
        flex-direction: column;
        text-align: center;
    gap: 24px;
    


        &__tittle {
            font-family: '72';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;
/* identical to box height, or 34px */
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #000000;
        }

        &__paragraph {
            font-family: '72';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 140%;
/* or 22px */
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #000000;

        }

        &__socials {
 
            display: grid; 
  grid-template-columns: auto auto; 
  grid-template-rows: auto auto auto; 
  gap: 30px 68px; 
  grid-template-areas: 
    ". ."
    ". ."
    ". ."; 




            a  {
                text-decoration: none;
                color:black;
           
               
            }
        }
    }

    @media only screen and (min-width: 734px) {
   
      .fd-connect{
        display: flex;
        flex-direction: column;
        text-align: center;
    gap: 60px;
    


        &__tittle {
            font-family: '72';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;
/* identical to box height, or 34px */
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #000000;
        }

        &__paragraph {
            font-family: '72';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 140%;
/* or 22px */
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #000000;

        }

        &__socials {
 
            display:flex;
            flex-direction: row;




            a  {
                text-decoration: none;
                color:black;
           
               
            }
        }
    }  
  
  
  }
    
    
    </style>