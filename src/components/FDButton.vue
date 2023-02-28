<template >

    <a
          :href=url
          :aria-label="`URL of title `"
          target="_blank"
          rel="noreferrer"
          hreflang="en"
          class="fd-button-lib"
          ><span v-html="svgs.arrow"> </span>{{buttonName}}</a
        >
         

    </template>
    
    
    <script>
    import svgs from "@/assets/js/svg.js";

export default {
  props: {
    title: String,
    url: String,
    buttonName: String,
  },

  name: "FDButton",
  components: {},
  data() {
    return {
      svgs,
    };
  },
};
    </script>
    
    <style lang="scss" scoped>

    .fd-button-lib {
    
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 0.313rem;
  

    border: 2px solid #007ea3;
    border-radius: 6px;
    text-decoration: none;
    font-family: "72";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    /* Blue/500 Regular */
    color: #007ea3;

    span {
      width: 24px;
      height: 24px;
      color: #007ea3;
    }
  
    
}
   
    @media only screen and (min-width: 980px) {
  
    .fd-button-lib {
      box-sizing: border-box;

      /* Auto layout */
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 0.313rem;
 

      border: 2px solid #2fa3c4;
      border-radius: 6px;
      text-decoration: none;
      font-family: "72";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.125rem;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      /* Blue/500 Regular */
      color: #007ea3;
      &:hover {
        background: #e3eeff;
        border-color: #054569;
        color: #054569;
        box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);
      }

      &:focus {
        outline: 0.125rem solid #7352ad;
        outline-offset: 0.0625rem;
        background: #e3eeff;
        border-color: #2865be;
      }

      span {
        width: 24px;
        height: 24px;
        color: #007ea3;
        &:hover {
          color: #054569;
        }
    }
}}
    </style>