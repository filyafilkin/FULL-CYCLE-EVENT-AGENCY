<template>
  <div class="what">
    <kinesis-container>
      <div class="what__inner container">
        <kinesis-element class="title">
          What?
        </kinesis-element>

        <Circle/>

        <ul class="nav">
          <li class="nav__item nav__item--left">
            <router-link :to="'/where'" class="nav__text text">Where?</router-link>
          </li>

          <li class="nav__item nav__item--bottom">
            <router-link :to="'/who'" class="nav__text text">Who?</router-link>
          </li>

          <li class="nav__item nav__item--right">
            <router-link :to="'/'" class="nav__text text">Home</router-link>
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
  name: "WhatPage",
  components: {
    Marquee,
    Circle,
  }
}
</script>

<style lang="scss">
.what {
  overflow: hidden;

  &__inner {
    height: 100vh;
    height: -webkit-fill-available;

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
      background-color: #ff4772;
      border: 1px solid #ff4772;
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
    background: #ff4772;
  }
}
</style>
