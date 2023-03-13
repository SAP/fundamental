<template class="fd-header">
  <div class="fd-background">
    <span
      v-html="svgs.mobile_rectangles"
      aria-hidden="true"
      class="fd-background__mobile-rectangles"
      alt="Elements of the background view for design purpose"
    >
    </span>

    <span
      v-html="svgs.desktop_header"
      aria-hidden="true"
      class="fd-background__desktop"
      alt="Elements of the background view for design purpose"
    >
    </span>
  </div>
</template>

<script>
import svgs from "@/assets/js/svg.js";

export default {
  props: {
    conference: {},
  },

  name: "FDHeader",
  components: {},
  data() {
    return {
      svgs,
      mobile: null,
      mobileNav: null,
      windowWidth: null,

      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },

  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      this.scrollValue = window.scrollY;
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },

    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
      if (this.scTimer) {
        document.documentElement.style.overflow = "hidden";
      } else document.documentElement.style.overflow = "auto";
    },

    //this hides also the scrolling part when the dropdown is open
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        document.documentElement.style.overflow = "hidden";
      } else document.documentElement.style.overflow = "auto";
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },

  mounted() {
    // run the function when the component's mount

    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);

    //     var intro = gsap.timeline({
    //     paused: false
    // });

    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // let mobile = document.querySelector(".fd-background__mobile"),
    //     mobile_rectangles = bar.querySelector(".fd-background__mobile-rectangles"),
    //     icon = bar.querySelector(".fd-header__icon"),
    //     nav = bar.querySelector(".fd-header__icon");

    // ScrollTrigger.create({
    //   start: 1,
    //   end: "max",
    //   onEnter: () => {
    //     let state = Flip.getState([bar, input], {props: "opacity"});
    //     Flip.makeAbsolute(text);
    //     gsap.to(text, {y: "-=60", autoAlpha: 0, overwrite: true});
    //     Flip.from(state);
    //   },
    //   onLeaveBack: () => {
    //     let state = Flip.getState([bar, input], {props: "opacity"});
    //     gsap.set(text, {
    //       position: "relative",
    //       clearProps: "transform,opacity,visibility,width,height",
    //       overwrite: true
    //     });
    //     gsap.from(text, {y: -60, autoAlpha: 0});
    //     Flip.from(state);
    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
.fd-header {
  margin-top: 0;

  &__icon {
    position: absolute;
    display: inline;
    top: 110px;
    left: 92px;
    width: 50%;
  }
}
.fd-background {
  z-index: 0;
  &__mobile {
    position: absolute;
    width: 100%;

    &-rectangles {
      position: absolute;
      width: 100%;
    }
  }

  &__desktop {
    visibility: hidden;
    position: absolute;
    clear: left;
  }
}

@media only screen and (min-width: 979px) {
  .fd-header {
    &__icon {
      visibility: hidden;
    }
  }
  .fd-background {
    &__desktop {
      position: absolute;
      width: 100%;
      visibility: visible;
      z-index: 0;
    }
    &__mobile {
      visibility: hidden;
      position: absolute;

      &-rectangles {
        visibility: hidden;
        position: absolute;
      }
    }
  }
}
</style>
