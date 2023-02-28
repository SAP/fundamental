<template>
    <footer class="fd-footer" id="footer" role="contentinfo">
      <div class="fd-footer__left">
        <div class="fd-footer__left-about">
          <h6>About</h6>
          <a href="https://sap.github.io/fundamental/"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Key Features</a
        >
        </div>

        <div class="fd-footer__left-libraries">
          <h6>Our libraries</h6>
          <a href="https://sap.github.io/fundamental-styles/?path=/docs/introduction--overview"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Fundamental Styles</a
        >
        <a href="https://sap.github.io/fundamental-ngx/fundamental-ngx#/core/home"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Fundamental NGX</a
        >
        <a href="https://sap.github.io/fundamental-ngx/fundamental-ngx#/platform/home"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Fundamental Platform</a
        >
        </div>

        <div class="fd-footer__left-resources">
          <h6>Resources</h6>
          <a href="https://community.sap.com/search/?ct=blog&q=fundamental+library"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >SAP Blog</a
        >
        <a href="https://medium.com/fundamental-library"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Medium</a
        >
        </div>
        <div class="fd-footer__left-connect">
          <h6>Connect</h6>
          <a
          href="https://ui-fundamentals.slack.com/archives/CFE1121S6"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Slack</a
        >
          <a
          href="https://www.youtube.com/c/FundamentalLibrary"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Youtube</a
        >
        <a
          href="https://www.linkedin.com/company/sap-graph/"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >LinkedIn</a
        >
        <a href="https://twitter.com/fundamental_lib" rel="noopener noreferrer" target="_blank" hreflang="en">Twitter</a>
        </div>
      
     
  
        <!-- <a href="https://community.sap.com/topics/fundamental-library" rel="noopener noreferrer" target="_blank" hreflang="en">SAP Community</a> -->
      </div>
      <div class="fd-footer__right">
        <span v-html="svgs.fundamental_logo" aria-hidden="true"> </span>
        <a
          href="https://www.sap.com/about/legal/privacy.html"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Privacy</a
        >
        <a
          href="https://www.sap.com/corporate/en/legal/terms-of-use.html"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Terms of Use</a
        >
        <a
          href="https://www.sap.com/about/legal/impressum.html"
          rel="noopener noreferrer"
          target="_blank"
          hreflang="en"
          >Legal Disclosure</a
        >
        <p>© Copyright 2022, SAP SE</p>
        <p>Fundamental Library is released under the Apache License 2.0</p>
        <img
          alt="SAP logo"
          src="@/assets/images/SAP_Best_R_grad_blk_scrn.png"
          class="fd-sap-logo"
        />
        <img
          alt="SAP logo"
          aria-hidden="true"
          src="@/assets/images/SAP_Best_R_grad_blk_scrn.png"
          class="fd-sap-logo-mobile"
        />
      </div>
    </footer>
  </template>
  
  <script>
  import svgs from "@/assets/js/svg.js";
  export default {
  el: "#footer",
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
  .fd-footer {
    display: flex;
    flex-direction: column;
    background: #f5f6f7;
    justify-content: space-between;
    line-height: 1.5rem;
    gap: 3.5rem;
   padding:2rem;
      
    font-family: "72";
  
    &__nav {
      color: black;
      display: block;
      cursor: pointer;
      font-size: 1.2rem;
  
      width: fit-content;
      align-self: left;
  
      div {
        margin: 2rem;
        border-bottom: 0.125rem solid blue;
      }
    }
  
    &__left,
    &__right {
      gap: 0.25rem;
      display: flex;
      color: black;
      flex-direction: column;
  
  
      p {
        padding: 0;
        font-size: 1rem;
      }
    }
  
    &__left{
      display: grid; 
      height:auto;
  grid-template-columns: auto auto; 
  grid-template-rows: auto auto; 
  justify-content: space-evenly;
  gap: 28px 20px; 
  grid-template-areas: 
    ". ."
    ". .";

&-about, &-libraries, &-resources, &-connect{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap:12px;

  h6 {

font-family: '72';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #1A9ABF;


  }
 
}
    }
    &__right {
      align-items: center;
      text-align: center;
      span {
        width:12rem;
        height:1.625rem;
      }
    }
  
    a {
      color:black;
      outline: none;
      position: relative;
      width: fit-content;
      text-decoration: none;
      border-radius: 0.25rem;
      outline-offset: 1.25rem;
      transition: all 0.3s ease-in-out;
      border: 0.125rem solid transparent;
      font-family: "72";
      font-size: 14px;
  
      &::after {
        left: 0;
        bottom: 0;
        opacity: 1;
        content: "";
        width: 100%;
        height: 0.1em;
        position: absolute;
        transform: scale(0);
        transform-origin: center;
        background-color: #2cacd1;
        transition: opacity 300ms, transform 300ms;
      }
  
      &:hover {
        color: #007ea3;
  
        &::after {
          transform: scale(1);
        }
      }
  
      &:active {
        color: #fff;
      }
  
      &:focus {
        border-color: #82deff;
      }
  
      &:focus:hover {
        &::after {
          transform: scale(0);
        }
      }
    }
  }
  
  .fd-sap-logo {
    fill: #008fd3;
    max-width: 10rem;
    display: none;
  }
  
  .fd-sap-logo-mobile {
    fill: #008fd3;
    max-width: 10rem;
    margin: 1rem auto;
    display: block;
  }
  

  
  @media only screen and (min-width: 734px) {
    .fd-footer{
      flex-direction: row-reverse;
      text-align: left;
      align-items: flex-start;
      padding:4.5rem;

      &__right {
        align-items: flex-start;
        text-align: left;
      }

      &__left {
        display: flex;
        flex-direction: row;
      }
      a{
        font-size: 18px;
      }
      &-about, &-libraries, &-resources, &-connect{

  h6 {


font-size: 20px;



  }
 
}
    }
    .fd-sap-logo {
      display: block;
    }
  
    .fd-sap-logo-mobile {
      width: 4rem;
      fill: #008fd3;
      max-width: 6.25rem;
      display: none;
      margin: 1rem auto;
    }
  }

 


  </style>
  