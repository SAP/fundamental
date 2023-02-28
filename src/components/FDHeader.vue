<template class="fd-header">
  <div class="fd-background">

    
      <span
        v-html="svgs.mobile_rectangles"
        aria-hidden="true"
        class="fd-background__mobile-rectangles"
      >
      </span>
  
      <div
        class="fd_menu_icon"
        @click="toggleMobileNav"
        v-if="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
    
        <svg
          v-if="!mobileNav"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 16C2.22217 15.059 2.98494 14.2963 3.92587 14.2963H23.3333C24.2742 14.2963 25.037 15.059 25.037 16C25.037 16.9409 24.2742 17.7037 23.3333 17.7037H3.92587C2.98494 17.7037 2.22217 16.9409 2.22217 16Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 24.8889C2.22217 23.948 2.98494 23.1852 3.92587 23.1852H14.4444C15.3853 23.1852 16.1481 23.948 16.1481 24.8889C16.1481 25.8298 15.3853 26.5926 14.4444 26.5926H3.92587C2.98494 26.5926 2.22217 25.8298 2.22217 24.8889Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22217 7.11105C2.22217 6.17012 2.98494 5.40735 3.92587 5.40735H27.7777C28.7187 5.40735 29.4814 6.17012 29.4814 7.11105C29.4814 8.05198 28.7187 8.81476 27.7777 8.81476H3.92587C2.98494 8.81476 2.22217 8.05198 2.22217 7.11105Z"
            fill="white"
          />
        </svg>

        <!-- exit -->
        <svg
          v-if="mobileNav"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.79504 6.20471C9.46038 5.53937 10.5391 5.53937 11.2044 6.20471L27.6324 22.6325C28.2977 23.2978 28.2977 24.3766 27.6324 25.0419C26.967 25.7072 25.8883 25.7072 25.223 25.0419L8.79504 8.61411C8.12971 7.94877 8.12971 6.87005 8.79504 6.20471Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.20496 25.2047C8.53962 24.5394 8.53962 23.4606 9.20496 22.7953L25.7048 6.29529C26.3702 5.62995 27.4489 5.62995 28.1142 6.29529C28.7796 6.96063 28.7796 8.03935 28.1142 8.70469L11.6144 25.2047C10.949 25.87 9.87029 25.87 9.20496 25.2047Z"
            fill="white"
          />
        </svg>
      </div>
      <transition name="fd-nav__mobile">
      <ul v-if="mobileNav" class="fd-nav__dropdown">
        <li>
          <router-link
            to="/"
            @click="close"
            class="fd-nav__link"
            aria-label="Agenda"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/agenda"
            @click="close"
            class="fd-nav__link"
            aria-label="Agenda"
            >Agenda</router-link
          >
        </li>
        <li>
          <router-link
            to="/team"
            @click="close"
            class="fd-nav__link"
            aria-label="Our Team"
            >Our Team</router-link
          >
        </li>
        <li>
          <a
            @click="close"
            aria-label="open submit your topic form"
            class="fd-nav__link"
            target="_blank"
            href="https://fundamentalconf-2021.netlify.app"
          >
            Previous Event</a
          >
        </li>
      </ul>
    </transition>

    
      <span
        v-html="svgs.desktop_header"
        aria-hidden="true"
        class="fd-background__desktop"
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
  components: {

  },
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
