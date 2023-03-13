<template>
  <section class="fd-video fd_background_silver" role="region">
    <div class="fd-video__wrap">
      <h2 class="fd_h2">{{ title }}</h2>
      <keep-alive>
      <video controls autoplay muted loop playsinline class="fd-video__image" ref="video" preload="none">
        <source :src="require(`@/assets/images/${image}`)" type="video/mp4" />
      </video>
    </keep-alive>
      <div class="fd-video__pwrap">
        <h2 class="fd_h2">{{ title }}</h2>
        <p class="fd_p" aria-label="`Paragraph description`">
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";
.fd-video {
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
}

@media only screen and (min-width: 980px) {
  .fd-video {
    gap: 3.5rem;
    display: flex;
    flex-direction: column;

    &__wrap {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 1;
      gap: 4.5rem;
      align-items: center;
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

   
  }
}
</style>
