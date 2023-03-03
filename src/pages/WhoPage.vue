<template>
  <div class="who">
    <kinesis-container>
      <div class="who__inner container">
        <kinesis-element class="title">
          Who?
        </kinesis-element>

        <Circle/>

        <ul class="nav">
          <li class="nav__item nav__item--left">
            <router-link :to="'/where'" class="nav__text text">Where?</router-link>
          </li>

          <li class="nav__item nav__item--bottom">
            <router-link :to="'/'" class="nav__text text">Home</router-link>
          </li>

          <li class="nav__item nav__item--right">
            <router-link :to="'/what'" class="nav__text text">What?</router-link>
          </li>
        </ul>
      </div>

      <Marquee/>

    </kinesis-container>

    <div class="el"></div>
  </div>
</template>

<script>
import Marquee from "@/components/MarqueeTemplate";
import Circle from "@/components/CircleTemplate";

export default {
  name: "WhoPage",

  components: {
    Marquee,
    Circle,
  }
}
</script>

<style lang="scss">
.who {
  overflow: hidden;

  &__inner {
    height: 100vh;
    height: var(--app-height);

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 578px;
      width: 100%;
      max-height: 578px;
      height: 100%;
      background-color: #73ff7c;
      border: 1px solid #73ff7c;
      border-radius: 50%;
      filter: blur(38px);
      z-index: 1;
      @media (max-width: 1024px) {
        max-width: 482px;
        max-height: 482px;
      }
      @media (max-width: 767px) {
        max-width: 294px;
        max-height: 294px;
      }
    }
  }

  .el {
    background: #73ff7c;
  }
}
</style>
