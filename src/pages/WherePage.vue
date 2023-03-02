<template>
  <div class="where">
    <kinesis-container>
      <div class="where__inner container">
        <kinesis-element class="title">
          Where?
        </kinesis-element>

        <Circle/>

        <ul class="nav">
          <li class="nav__item nav__item--left">
            <router-link :to="'/'" class="nav__text text">Home</router-link>
          </li>

          <li class="nav__item nav__item--bottom">
            <router-link :to="'/who'" class="nav__text text">Who?</router-link>
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
  name: "WherePage",
  components: {
    Marquee,
    Circle,
  }
}
</script>

<style lang="scss">
.where {
  overflow: hidden;

  &__inner {
    height: 100vh;

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
      background-color: #737eff;
      border: 1px solid #737eff;
      border-radius: 50%;
      filter: blur(38px);
      z-index: -1;
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
    background: #737eff;
  }
}
</style>
