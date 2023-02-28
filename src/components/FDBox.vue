<template >
<div class ="fd-box">
    <h4 class="fd_h4-mobile fd_h4-desktop">{{ number }}</h4>
    <p class="fd_p-mobile fd_p-desktop">{{description}}</p>
</div>
         

    </template>
    
    
    <script>


export default {
  props: {
    number: String,
    description: String,
  },

  name: "FDButton",
  components: {},
  data() {
    return {
      
    };
  },
};
    </script>
    
    <style lang="scss" scoped>
    @import "@/assets/scss/styles.scss";
.fd-box {
    display: flex;
    flex-direction: column;
    gap:8px;
    width: 26%;
    padding: 32px 24px;
text-align: center;
justify-content: center;
/* Grey/Grey 1 */
background: #F5F6F7;
/* Shadows/Grey/Level 1 */
box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16), 0px 8px 16px rgba(91, 115, 139, 0.16);
border-radius: 24px;
}

   
    @media only screen and (min-width: 980px) {

  .fd-box {
    display: flex;
    flex-direction: column;
    gap:16px;
 width:auto;
 height:50%;


}
    }
    </style>