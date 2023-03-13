<template>
  <div class="fd-box">
    <h3 class="fd_h3">{{ number }}</h3>
    <p class="fd_p">{{ description }}</p>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";
.fd-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 26%;
  padding: 32px 24px;
  text-align: center;
  justify-content: center;
  /* Grey/Grey 1 */
  background: #FAFCFF;
  /* Shadows/Grey/Level 1 */
  box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16),
    0px 8px 16px rgba(91, 115, 139, 0.16);
  border-radius: 24px;
}
.fd_h3{
  color:#1a9abf;
}
@media only screen and (min-width: 980px) {
  .fd-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: auto;
    height: 50%;
  }
}
</style>
