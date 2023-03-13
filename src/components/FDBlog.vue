<template>
  <div class="fd-blog">
    <img
      :src="require(`@/assets/images/${image}`)"
      alt="Image of {{ title }}"
    />
    <div class="fd-blog__container">
      <h3 class="fd-blog__title fd_h3">{{ title }}</h3>
      <p class="fd-blog__paragraph fd_p">{{ description }}</p>
      <a
        class="fd_p"
        :href="url"
        rel="noopener noreferrer"
        target="_blank"
        hreflang="en"
        aria-describedby="Link to the Blog"
        aria-label="Link to the Blog"
      >
        Read article
        <span v-html="svgs.horizontal_arrow" aria-hidden="true"> </span
      ></a>
    </div>
  </div>
</template>

<script>
import svgs from "@/assets/js/svg.js";

export default {
  el: "#FDBlog",
  props: {
    image: String,
    title: String,
    description: String,
    url: String,
  },
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

.fd-blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 24px;
  gap: 36px;

  height: 427px;

  background: #FAFCFF;
  /* Shadows/Grey/Level 1 */
  box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16),
    0px 8px 16px rgba(91, 115, 139, 0.16);
  border-radius: 24px;
  img {
    width: 136px;
    height: 136px;
    border-radius: 16px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      font-family: "72", Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      /* or 22px */
      display: flex;
      align-items: center;
      font-feature-settings: "pnum" on, "lnum" on;
      text-decoration: none;

      /* Aqua / 400 */
      color: #007ea3;
      border-bottom: 2px solid #007ea3;
      width: 110px;

      span {
        width: 16px;
        height: 16px;
        padding-left: 5px;
      }
    }
  }
}

@media only screen and (min-width: 970px) {
  .fd-blog {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 32px 48px;
    gap: 36px;

    width: auto;
    height: 90%;

    background: #FAFCFF;
    /* Shadows/Grey/Level 1 */
    box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16),
      0px 8px 16px rgba(91, 115, 139, 0.16);
    border-radius: 24px;
    &__container {
      a {
        width: 110px;
      }
    }

    img {
      width: 194px;
      height: 194px;
      aspect-ratio: 1 / 1;
    }
  }
}
</style>
