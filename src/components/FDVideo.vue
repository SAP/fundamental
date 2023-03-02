<template>
    <section class="fd-video fd_background_silver" role="region">
      <div class="fd-video__wrap">
        <h2 class="fd_h2-mobile fd_h2-desktop">{{ title }}</h2>
      
        <video controls autoplay class="fd-video__image" ref="video"  >
          <source    :src="require(`@/assets/images/${image}`)"

 type="video/mp4">
          </video>
 
    
        <div class="fd-video__pwrap">
          <h2 class="fd_h2-mobile fd_h2-desktop">{{ title }}</h2>
          <p class="fd-video__paragraph fd_p-mobile fd_p-desktop " aria-label="`Paragraph description`">
            {{ description }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>

  
  export default {
    props: {
      image: String,
      title: String,
      description: String,
      url: String,
    },
  
    name: "FDStructure",
    components: {},
    data() {
      return {

      };
    },
    computed: {
    videoElement () {
      return this.$refs.video;
    }, 
  }
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/styles.scss";
  .fd-video {
 
    gap: 3.5rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: center;
  
    &__wrap {
      display: flex;
      flex-direction: column;
      gap: 2.25rem;
      h2 {
        visibility: visible;
        // font-family: "72-Bold";
        // font-weight: 700;
        // font-size: clamp(1.5rem, 3.5vw, 4.5rem);
        // line-height: 130%;
      }
    }
    &__pwrap {
      display: flex;
      flex-direction: column;
      gap: 2.25rem;
      h2 {
        visibility: hidden;
        display: none;
   
      }
    }
  
    &__image {
      filter: drop-shadow(0px 0px 2px rgba(91, 115, 139, 0.16))
        drop-shadow(0px 8px 16px rgba(91, 115, 139, 0.16));
      border-radius: 24px;
    }
  

  
  }
  
  @media only screen and (min-width: 980px) {
    .fd-video {

      gap: 3.5rem;
      display: flex;
      flex-direction: column;
  
      &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            align-items: center;
        gap: 1;
        gap: 4.5rem;
        h2 {
          visibility: hidden;
          display: none;
          text-align: left;
        }
      }
      &__pwrap {
        display: flex;
        flex-direction: column;
        gap: 2%;
        width: 50%;
        gap: 2rem;
        h2 {
          visibility: visible;
          display: block !important;
          // font-size: clamp(1.5rem, 2.5vw, 3rem);
          line-height: 160%;
          text-align: left;
        }
      }
  
      &__image {
        width: 50%;
        height: 50%;
      }
  
      &__paragraph {
        // font-size: clamp(0.5rem, 1.5vw, 1.5rem);
        // line-height: clamp(100%, 4.5vh, 160%);
      }
      
    }
  }
  </style>
  