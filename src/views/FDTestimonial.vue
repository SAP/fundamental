<template>
  <section class="fd-testimonial fd_background_silver">
    <Carousel>
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <p class="fd_h5">{{ slide.content }}</p>
          <p class="fd_h6">{{ slide.company }}</p>
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
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

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
      slides: [
        {
          id: "1",
          content:
            "The fundamentals team is amazing to work with! They were willing to work with our existing stack, and continue to go above and beyond to help us meet our consistency goals. They are a true asset and incredibly responsive!",
          company: "~ SAP Fieldglass",
        },
        {
          id: "2",
          content:
            "Without fundamental libraries, luigi would probably not exist",
          company: "~ Project Luigi",
        },
        {
          id: "3",
          content:
            "Our solution is built on a modern, reactive stack - where micro frontend UI patterns are applied. By splitting monolithic UI into several micro apps, our teams are able to develop and ship things independently with high velocity. This is awesome as each team can deliver customer value fast, but at the same time this confronts us with challenges. Especially when it comes to ensuring a consistent user experience on the interface across the entire web application suite the Fundamental libraries have helped our teams to bring it all together in a nice, consistent way regardless of stack or framework. We use the Fundamental components, examples and documentation nearly every day as part of our design and development lifecycle.",
          company: "~ SAP FSM",
        },
      ],
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

.carousel__slide {
  padding: 68px;
}
</style>
