<template>
  <div class="movelines">
    <Vue3Marquee class="movelines__item movelines__item--reverse" :clone="true">
      <span class="movelines__text" v-for="(word, index) in words" :key="index">
        {{ word }}
      </span>
    </Vue3Marquee>

    <Vue3Marquee class="movelines__item" :clone="true">
      <span class="movelines__text" v-for="(word, index) in words" :key="index">
        {{ word }}
      </span>
    </Vue3Marquee>
  </div>
</template>

<script>
import 'vue3-marquee/dist/style.css'

export default {
  name: "MarqueeTemplate",

  data() {
    return {
      words: [
        'Full-Cycle Event Agency',
      ],
    };
  },
}
</script>

<style lang="scss">
.movelines {
  display: flex;
  flex-direction: column;
  width: 120%;
  gap: 10px;
  position: absolute;
  top: 51%;
  left: 50%;
  z-index: -2;
  transform: translate(-50%, -50%) rotate(-26deg);
  @media (max-width: 1024px) {
    width: 200%;
    transform: translate(-50%, -50%) rotate(-40deg);
  }
  @media (max-width: 991px) {
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  @media (max-width: 767px) {
    width: 300%;
    transform: translate(-50%, -50%) rotate(-51deg);
  }
  @media (max-width: 600px) {
    width: 300%;
    transform: translate(-50%, -50%) rotate(-60deg);
  }
  @media (max-width: 414px) {
    width: 300%;
    transform: translate(-50%, -50%) rotate(-64deg);
  }
  @media (max-width: 414px) {
    width: 300%;
    transform: translate(-50%, -50%) rotate(-66deg);
  }
  @media (max-width: 375px) {
    width: 300%;
    transform: translate(-50%, -50%) rotate(-62deg);
  }
  @media (max-width: 375px) {
    transform: translate(-50%, -50%) rotate(-71deg);
  }


  &__item {
    overflow: hidden;

    &--reverse {
      transform: rotate(180deg);
    }
  }

  &__text {
    font-family: 'Grtsk Giga';
    font-style: italic;
    font-weight: 700;
    font-size: 52px;
    -webkit-text-stroke: 1px #1B1B1B;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.1;
    color: transparent;
    @media (max-width: 1024px) {
      font-size: 42px;
    }
    @media (max-width: 767px) {
      font-size: 28px;
    }
  }
}
</style>
