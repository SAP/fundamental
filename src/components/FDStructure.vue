<template>
  <section class="fd-structure fd_background_silver" role="region">
    <div class="fd-structure__wrap">
      <h2 class="fd_h2-mobile fd_h2-desktop">{{ title }}</h2>
      <img
        :src="require(`@/assets/images/${image}`)"
        class="fd-structure__image"
        aria-label="`Graphics `"
      />
      <div class="fd-structure__pwrap">
        <h2 class="fd_h2-mobile fd_h2-desktop">{{ title }}</h2>
        <p class="fd-structure__paragraph fd_p-mobile fd_p-desktop" aria-label="`Paragraph description`">
          {{ description }}
        </p>

        <a
          :href="url"
          :aria-label="`URL of {{title}}`"
          target="_blank"
          rel="noreferrer"
          hreflang="en"
          ><span v-html="svgs.arrow"> </span>Get Inspired</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import svgs from "@/assets/js/svg.js";

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
      svgs,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";
.fd-structure {

  gap: 3.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1;

  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    h2 {
      visibility: visible;
      text-align: left;
    
    }
  }
  &__pwrap {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    h2 {
      visibility: hidden;
      display: none;
      text-align: left;
     
    }
  }

  &__image {
    filter: drop-shadow(0px 0px 2px rgba(91, 115, 139, 0.16))
      drop-shadow(0px 8px 16px rgba(91, 115, 139, 0.16));
    border-radius: 24px;
  }


  a {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 0.313rem;
    width: 10.3rem;

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
}

@media only screen and (min-width: 980px) {
  .fd-structure {

    gap: 3.5rem;
    display: flex;
    flex-direction: column;

    &__wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1;
      gap: 4.5rem;
      h2 {
        visibility: hidden;
        display: none;
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
        // line-height: 160%;
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
    a {
      box-sizing: border-box;

      /* Auto layout */
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 0.313rem;
      width: 10.3rem;

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
    }
  }
}
</style>
