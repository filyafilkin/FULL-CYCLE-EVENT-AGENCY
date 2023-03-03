<template>
  <header class="header">
    <Header/>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

</template>

<script>
import Header from './components/HeaderTemplate.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import url("@/style/reset.css");

@font-face {
  font-family: "Grtsk Giga";
  src: local("Grtsk Giga"),
  url(./font/GrtskGiga/GrtskGiga-Regular.woff) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Regular.ttf) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Regular.woff2) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Regular.eot) format("truetype");
}
@font-face {
  font-family: "Grtsk Giga";
  src: local("Grtsk Giga"),
  url(./font/GrtskGiga/GrtskGiga-Semibold.eot) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Semibold.ttf) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Semibold.woff) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Semibold.woff2) format("truetype");
}
@font-face {
  font-family: "Grtsk Giga";
  src: local("Grtsk Giga"),
  url(./font/GrtskGiga/GrtskGiga-Bold.eot) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Bold.ttf) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Bold.woff) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Grtsk Giga";
  font-style: italic;
  src: local("Grtsk Giga"),
  url(./font/GrtskGiga/GrtskGiga-BoldItalic.ttf) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-BoldItalic.woff2) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-BoldItalic.woff) format("truetype"),
  url(./font/GrtskGiga/GrtskGiga-BoldItalic.eot) format("truetype");
}

$bg: #BEBEBE;
$gray: #373737;
$yellow: #FFCB46;
$white: #FFFFFF;
$black: #000000;

* {
  box-sizing: border-box;
}

body {
  background-color: $bg;
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
}

.container {
  max-width: 100%;
  width: 100%;
  padding: 0 19px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Grtsk Giga';
  font-style: normal;
  font-weight: 700;
  font-size: 82px;
  line-height: 110%;
  text-transform: uppercase;
  text-align: center;
  max-width: 1023px;
  width: 100%;
  z-index: 2;
  @media (max-width: 1440px) {
    max-width: 70%;
    font-size: 58px;
  }
  @media (max-width: 767px) {
    font-size: 34px;
    max-width: 100%;
    transform: translate3d(0, 0, 0) !important;
  }
}

.text {
  font-family: 'Grtsk Giga';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: $gray;
  text-decoration: none;
  transition: all .4s ease-in-out;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 14px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 2px;
    border-radius: 50%;
    background-color: $white;
    left: -100%;
    transition: all .4s ease-in-out;
    opacity: 0;
  }

  &:hover {
    color: $white;

    &:after {
      left: 0;
      opacity: 1;
    }
  }
}

.nav {
  @media (max-width: 767px) {
    visibility: hidden;
  }
  @media (max-height: 480px) {
    visibility: hidden;
  }

  &__item {
    position: absolute;

    &--left {
      left: -19px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
    }

    &--bottom {
      bottom: 19px;
      left: 50%;
      transform: translateX(-50%);
    }

    &--right {
      right: -19px;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
  }
}

.el {
  z-index: 11;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  animation: slide 1s;
}

@keyframes slide {
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

</style>
