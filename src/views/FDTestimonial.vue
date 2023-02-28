<template >
   <section class="fd-testimonial fd_background_silver">
  
    <Carousel>
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h5 class=" fd_h5-desktop fd_h5-mobile ">{{ slide.content }}</h5>
        <h6 class=" fd_h6-desktop fd_h6-mobile " >{{ slide.company }}</h6>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
   </section>
             
    
        </template>
        
        
<script>

import { Carousel, Navigation,Pagination, Slide } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';



    export default {
      
    
      name: "FDTestimonial",
      components: {
           
        Carousel,
    Slide,
    Navigation,
    Pagination,

      },
      data() {
        return {
          slides :[
  { id: '1', content: 'The fundamentals team is amazing to work with! They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals. They are a true asset and incredibly responsive!', company: '~ SAP Fieldglass' },
  { id: '2', content: 'Without fundamental libraries, luigi would probably not exist', company: '~ Project Luigi' },
  { id: '3', content: 'Our solution is built on a modern, reactive stack - where micro frontend UI patterns are applied. By splitting monolithic UI into several micro apps, our teams are able to develop and ship things independently with high velocity. This is awesome as each team can deliver customer value fast, but at the same time this confronts us with challenges. Especially when it comes to ensuring a consistent user experience on the interface across the entire web application suite the Fundamental libraries have helped our teams to bring it all together in a nice, consistent way regardless of stack or framework. We use the Fundamental components, examples and documentation nearly every day as part of our design and development lifecycle.', company: '~ SAP FSM' },
  
]
 
          
        };
      },
    };
        </script>
        
        <style lang="scss" scoped>
@import "@/assets/scss/styles.scss";
@import "vue3-carousel/dist/carousel.css";

   
       .fd-testimonial {
        display: flex;
        flex-direction: column;
       }
   

       .carousel__icon {
        fill: #2FA3C4 !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 6px;
    width: 48px;
    height: 48px;
    background: #FAFAFA;
    border: 2px solid #2FA3C4;
    border-radius: 6px;
    flex: none;
    order: 2;
    flex-grow: 0;
  h5 {
    padding-bottom: 40px;
  }
  h6{
    display: flex;
    justify-content: flex-end;
  }
}

.carousel__slide {
  padding: 68px;

}
.carousel__prev, .carousel__next {
 
background-color:#2FA3C4 !important;
}


.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: #2FA3C4 !important;
    border-radius: 34px !important;
    width: 7px !important;
    height: 7px !important;
}

        @media only screen and (min-width: 980px) {
    
.carousel__prev,
.carousel__next {
 
  box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background: #FAFAFA;
    border: 2px solid #2FA3C4;
    border-radius: 6px;
    color: #2FA3C4;
}


.carousel__pagination-button::after{
  display: block;
    content: '';
    width: var(--vc-pgn-width);
    height: var(--vc-pgn-height);
    /* border-radius: var(--vc-pgn-border-radius); */
    background-color: var(--vc-pgn-background-color);
    /* content: '>'; */
    radius: 50%;
    border-radius: 50%;
    width: 10px;
    height: 10px;
}
  
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: #2FA3C4 !important;

}
    
        }

       
        </style>