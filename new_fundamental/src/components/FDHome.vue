<template>
<section class="fd-home fd_background_silver">
    <div class="fd-home__wrapper">
    <div class="fd-home__text">
        <span v-html="svgs.fundamental_logo" aria-hidden="true" class="fd-home__icon"> </span>
        <h1 class="fd-home__title fd_h1-mobile fd_h1-desktop">
            Create consistent user interface across web applications
        </h1>
        <p class="fd-home__paragraph fd_p-mobile fd_p-desktop">
            Fundamental Library is a robust open-source toolkit allowing seamless alignment of application interfaces with the signature SAP Design theming and versatility.
        </p>
        <div class="fd-home__buttons">
          <a class="fd-home__buttons-filled"    rel="nofollow"
                  target="_blank" href="https://sap.github.io/fundamental-styles/?path=/docs/introduction--overview">
            Fundamental Styles
          </a>
        <a class="fd-home__buttons-unfilled"    rel="nofollow" 
                  target="_blank"  href="https://sap.github.io/fundamental-ngx/#/core/home">
            Fundamental NGX
        </a>
    </div>
    </div>
   
    <img src="@/assets/images/FLBanner-Desktop.png" class="fd-home__image"/> 
</div>
</section>

</template>


<script>


import svgs from "@/assets/js/svg.js";



export default {
  el: "#home",
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

.fd-home {

    display: flex;
    flex-direction: column;
    padding-top: 18%;

    &__icon{
      visibility: hidden;
    }
 &__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.25rem;
    padding-top: 12%;

   
 }

 &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
   

    
    
 }
 &__title{
  
  
 }
 &__paragraph {
    font-family: "72-Light";
    font-style: normal;
font-weight: 300;
font-size: 1.125rem;
line-height: 140%;
 }
 &__buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;


    &-filled{
        box-sizing: border-box;
        text-decoration: none;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 0.375rem;
border: 0.125rem solid transparent;

width: auto;
height: 2.625rem;

background: linear-gradient(73.81deg, #007EA3 0.22%, #1DC4FF 99.78%);
border-radius: 6px;
color:white;
font-family: '72';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
display: flex;

    }
 
 &-unfilled {
    box-sizing: border-box;
    text-decoration: none;
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 6px;
width: auto;
height: 2.625rem;


border: 1px solid #1A9ABF;
border-radius: 6px;
background: white;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
font-family: '72';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #1A9ABF;

 }}
 &__image {
    width:100%;
 }



}
@media only screen and (min-width: 980px) {
  .fd-home {

    display: flex;
    flex-direction: column;
    padding-top: 18%;
    &__icon{
      visibility: visible;
      width: 357.01px;
    }
 &__wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.25rem;
    z-index: 20;
    padding-top:24%;
    

 }

 &__text {
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    
 }

 &__buttons {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;


    &-filled{
        box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 0.375rem;
border: 0.125rem solid transparent;

width: 12.375rem;
height: 2.625rem;

background: linear-gradient(73.81deg, #007EA3 0.22%, #1DC4FF 99.78%);
border-radius: 6px;
color:white;
font-family: '72';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
display: flex;

    }
 
 &-unfilled {
    box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 6px;
width: 13.375rem;
height: 2.625rem;
text-decoration: none;

border: 1px solid #1A9ABF;
border-radius: 6px;
background: white;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
font-family: '72';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;

color: #1A9ABF;

 }}
 &__image {
  width:58%;
    
 }



}
}

</style>