<template>
  <header id="header">
    <nav id="navbar" class="fd-nav" :class="{ 'hidden-navbar': !showNavbar }">
      <div class="fd-nav__left">
        <span
          v-html="svgs.fundamental_logo"
          aria-hidden="true"
          class="fd-nav__icon"
        >
        </span>
      </div>

      <ul v-if="!mobile" class="fd-nav__right">
        <li>
          <a @click="goto('purpose')">Purpose </a>
          
        </li>
        <li>
          <a @click="goto('libraries')">Fundamental Libraries </a>
          
        </li>
        <li>
          <a @click="goto('versatile')">Versatile </a>
          
        </li>
      </ul>

      <div
        class="fd_menu_icon"
        @click="toggleMobileNav"
        v-if="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
        <!-- menu -->
        <svg
          v-if="!mobileNav"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22461 16C2.22461 15.0591 2.98738 14.2963 3.92831 14.2963H23.3357C24.2767 14.2963 25.0394 15.0591 25.0394 16C25.0394 16.9409 24.2767 17.7037 23.3357 17.7037H3.92831C2.98738 17.7037 2.22461 16.9409 2.22461 16Z"
            fill="#007EA3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22461 24.8889C2.22461 23.948 2.98738 23.1852 3.92831 23.1852H14.4468C15.3878 23.1852 16.1505 23.948 16.1505 24.8889C16.1505 25.8298 15.3878 26.5926 14.4468 26.5926H3.92831C2.98738 26.5926 2.22461 25.8298 2.22461 24.8889Z"
            fill="#007EA3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.22461 7.11108C2.22461 6.17015 2.98738 5.40738 3.92831 5.40738H27.7802C28.7211 5.40738 29.4839 6.17015 29.4839 7.11108C29.4839 8.05201 28.7211 8.81479 27.7802 8.81479H3.92831C2.98738 8.81479 2.22461 8.05201 2.22461 7.11108Z"
            fill="#007EA3"
          />
        </svg>

        <!-- exit -->

        <svg
          v-if="mobileNav"
          width="40"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7112 16.0546C21.1491 14.4925 18.6165 14.4925 17.0544 16.0546C15.4923 17.6167 15.4923 20.1494 17.0544 21.7115L30.843 35.5001L17.0544 49.2886C15.4923 50.8507 15.4923 53.3834 17.0544 54.9455C18.6165 56.5076 21.1491 56.5076 22.7112 54.9455L36.4998 41.1569L50.2884 54.9455C51.8505 56.5076 54.3832 56.5076 55.9453 54.9455C57.5074 53.3834 57.5074 50.8507 55.9453 49.2886L42.1567 35.5001L55.9453 21.7115C57.5074 20.1494 57.5074 17.6167 55.9453 16.0546C54.3832 14.4925 51.8505 14.4925 50.2884 16.0546L36.4998 29.8432L22.7112 16.0546Z"
            fill="#007EA3"
          />
        </svg>
      </div>
    </nav>

    <transition name="fd-nav__mobile">
      <ul v-if="mobileNav" class="fd-nav__dropdown">
        <li>
          <a
            @click="gotomob('purpose')"

            class="fd-nav__link"
            aria-label="Purpose"
            >Purpose</a
          >
        </li>
       <li>
          <a
            @click="gotomob('versatile')"

            class="fd-nav__link"
            aria-label="Agenda"
            >Versatile</a
          >
        </li>
       
       
      </ul>
    </transition>
  </header>

  <main id="main" class="fd-main"></main>


  <FDHeader />
  <FDHome />
  <section ref="purpose">
  <FDPurpose />
</section>
<section ref="libraries">
  <FDLibraries />
  </section>
  <section ref="design standard">
  <FDStructure
    title="SAP Design Standard"
    image="SAPDesign.png"
    description="Fundamental Libraries follow the SAP Design guidelines for all component libraries and layout configurations to bring full alignment with an industry standard visual language."
    url="https://experience.sap.com/fiori-design/"
  />

  <FDVideo
    title="Consistent and Custom"
    image="ConsistencyAndCustomVideo.gif"
    description="Fundamental Library offers a visual layer to meet applications and products where they are and help them seamlessly convert to the consistency and visual standards of SAP Design without compromising the underlying structure."
  />
  <FDVideoRight
    title="Accessible"
    image="AccessibilityVideo.gif"
    description="Fundamental Libraries use proper semantic HTML tags such as button and anchor tags. By using the right HTML markup, the browsers cover about 80% of the accessibility requirements and the Fundamentals team aims to cover the rest by employing ARIA attributes.

Using High-contrast themes in every interface evolution ensures meeting the highest accessibility standards and a consisten experience across ability levels."
  />
</section>
  <section ref="versatile" >
  <FDVersatile />
</section>

<section ref="getstarted">
  <FDGetStarted />
</section>
 <section ref="conference">
  <FDStructure
    title="Fundamental Conference"
    image="FundConf.png"
    description="Connect with the Fundamentals community through our annual conference featuring insightful sessions by industry professionals using and collaborating with the Fundamental Libraries in their work. Revisit past sessions to listen to key insights, applicable strategies, and thought leadership from some of the brightest minds in the industry."
    url="https://fundamentalconf.com/"
  />
</section>
  <FDUsage />
  <FDTestimonial />
  <FDBlogs id="header" />
  <FDConnect />
 

  <FDFooter />
</template>

<script>
import FDHeader from "@/components/FDHeader.vue";
import FDHome from "@/components/FDHome.vue";
import FDPurpose from "@/components/FDPurpose.vue";
import FDGetStarted from "./views/FDGetStarted.vue";
import FDFooter from "@/components/FDFooter.vue";
import FDVideo from "@/components/FDVideo.vue";
import FDStructure from "@/components/FDStructure.vue";
import FDConnect from "./views/FDConnect.vue";
import FDBlogs from "./views/FDBlogs.vue";
import FDLibraries from "./views/FDLibraries.vue";
import FDVideoRight from "@/components/FDVideoRight.vue";
import FDTestimonial from "./views/FDTestimonial.vue";
import FDUsage from "./views/FDUsage.vue";
import FDVersatile from "./views/FDVersatile.vue";
import svgs from "@/assets/js/svg.js";

// import info from "@/assets/js/info.json";

export default {
  el: "#team",
  components: {
    FDHeader,
    FDHome,
    FDPurpose,
    FDVideo,
    FDStructure,
    FDGetStarted,
    FDConnect,
    FDBlogs,
    FDFooter,
    FDLibraries,
    FDVideoRight,
    FDTestimonial,
    FDUsage,
    FDVersatile,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,

      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      svgs,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
    //  this.goto();
  },

  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        // create an Observer instance
        const resizeObserver = new ResizeObserver((entries) => {
          if (
            entries[0].target.clientHeight >=
            savedPosition.top + screen.height
          ) {
            resolve(savedPosition);
            resizeObserver.disconnect();
          }
        });

        // start observing a DOM node
        resizeObserver.observe(document.body);
      } else {
        resolve({ top: 0 });
      }
    });
  },


  created() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
     //scrolls to the particular section of the page and closes the mobile dropdown navigation
    gotomob(refName,e) {
      if (!this.$el.contains(e)) {
        this.mobileNav = !this.mobileNav;
        console.log("closed passed")
      document.documentElement.style.overflow = "auto"}
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top);
      
    },
    //scrolls to the particular section of the page
    goto(refName) {
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top);
      
    },

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

   

    // this hides also the scrolling part when the dropdown is open
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        document.documentElement.style.overflow = "hidden";
      } else document.documentElement.style.overflow = "auto";
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 980) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
   
  },
};
</script>

<style lang="scss" scoped>
// @media screen and (min-width: 980px) {
//   FDHeader {
//     display: none;
// //   }
// }

.fd-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url("@/assets/images/HomePageBackground_whole.png");

  &__backToTop {
    bottom: 1vh;
    height: 3rem;
    right: 0.1rem;
    width: 2.75rem;
    cursor: pointer;
    position: fixed;
    color: #3e86ef;
    box-sizing: border-box;
    background: transparent;
    border-radius: 2.375rem;
    transition: all 0.2s linear;
    border: 1px solid transparent;

    &:active,
    &:hover {
      color: #7352ad;
    }

    &:focus {
      color: #2865be;
      border-color: #7352ad;
      box-shadow: 1.54842px 3.09685px 9.29055px rgb(123 92 178 / 35%),
        0 0 0 0.0625rem #7352ad;
    }
  }
}

.fd_menu_icon {
  display: none;
}

nav#navbar.fd-nav.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

.fd-nav {
 position:absolute;
 top:58%;
 left: 3%;
 z-index: 9999;
 &__icon {
     visibility: hidden;
    }

    &__right {
      display: flex;
flex-direction: column;
z-index: 9999;


      li {
        list-style: circle;
        color:#1A9ABF;
        font-size: 20px;
        a {
          
          border:none;
          list-style: circle;
          color:#1A9ABF;
          width: 40px;
   
        }
      }
      li:hover{
        list-style: disc;
        // content: "•"; 
        color:#1A9ABF;
   width: 1em; 
}
    }

 
  .fd-nav__mobile-enter-active,
  .fd-nav__mobile-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }

  .fd-nav__mobile-enter-from,
  .fd-nav__mobile-leave-to {
    opacity: 0;
  }

  .fd-nav__mobile-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }

  .fd-nav__mobile-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }

  .fd-nav__mobile-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }

  .fd-nav__mobile-inner-leave-to {
    transform: scale(0.8);
  }

  
  &__right {
    display: flex;
    gap: 0.5rem;
    width: 10rem;
  }

  &__left {
    a:focus {
      outline: none;
    }

    ::v-deep .fd-conf-logo {
      display: block;
    }

    ::v-deep .fd-conf-logo-mobile {
      display: none;
    }
  }

  .fd-nav__mobile-enter-active {
    transition: all 0.3s ease;
  }

  .fd-nav__mobile-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fd-nav__mobile-enter, 
  .fd-nav__mobile-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  &__dropdown {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: rgba(255, 255, 255, 0.75);
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow: hidden;
    /* Nav Background Blur */
    backdrop-filter: blur(8px);
    line-height: 5rem;
    padding: 10rem 0;
    opacity: 1;
    font-size: 2rem;
    height: 100vh;
    z-index: 1;
  }

  &__link {
    color:#1A9ABF;
    outline: none;
    position: relative;
    min-width: 10rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.25rem;
    outline-offset: 1.25rem;
    transition: all 0.3s ease-in-out;
    border: 0.125rem solid transparent;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;

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
      background-color: #c5a4fa;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover {
      color: #c5a4fa;
      &::after {
        transform: scale(1);
      }
    }

    &:focus {
      color: #fff;
      border-color: #82deff;
    }

    &:focus:hover {
      &::after {
        transform: scale(0);
      }
    }

    &.router-link-active {
      &::after {
        transform: scale(1);
      }
    }
  }
}

.container {
  max-height: calc(100vh - 3.75rem);
  overflow-y: scroll;
}

.normal {
  scroll-snap-align: start;
  scroll-snap-type: none;
}

@media (max-width: 980px) {
  .fd-nav {

    display: flex;
    padding: 1rem;
    height: 3.75rem;
    align-items: center;
    justify-content: space-between;
    width: auto;
    z-index: 9999;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
  background: rgba(255, 255, 255, 0.45);
  /* Nav Background Blur */
  backdrop-filter: blur(8px);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;


    &__left {
      a:focus {
        outline: none;
      }

      ::v-deep .fd-conf-logo {
        display: none;
      }

      ::v-deep .fd-conf-logo-mobile {
        display: block;
      }
    }

    &__icon {
      width: 60%;
      display: inherit;
      visibility: visible;
    }
  }

  .fd_menu_icon {
    display: flex;
  }

  .fd-conf-logo-mobile {
    display: none;
  }

  .container {
    scroll-snap-type: none;
  }

  .container .panel {
    scroll-snap-align: start;
    scroll-snap-type: none;
  }
}
</style>
