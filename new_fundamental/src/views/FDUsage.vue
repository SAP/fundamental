<template >
    <section class="fd-usage fd_background_silver">
     <h2 class="fd_h2-desktop fd_h2-mobile">Used by Many</h2>
     <div class="fd-usage__wrap">
     <FDBox number="180+" description="Products"/>
     <FDBox number="53K+" description="Downloads"/>
     <FDBox number="60+" description="Contributors"/>
    </div>
 
    </section>
              
     
         </template>
         
         
 <script>
 import FDBox from '@/components/FDBox.vue';
 
     export default {
       
     
       name: "FDUsage",
       components: {
         FDBox,
       },
       data() {
         return {
  
           
         };
       },
     };
         </script>
         
         <style lang="scss" scoped>
 @import "@/assets/scss/styles.scss";
    
        .fd-usage {
         display: flex;
         flex-direction: column;
         gap:36px;

         &__wrap {
            display: flex;
            flex-direction: column;
            gap:36px;
            align-items: center;
         }
        }
         @media only screen and (min-width: 980px) {
            .fd-usage {
         gap:48px;

         &__wrap {
            flex-direction: row;
    justify-content: center;
        }
    
     
         }}
         </style>