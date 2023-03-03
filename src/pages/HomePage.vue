<template>
  <div class="home">
    <kinesis-container>
      <div class="home__inner container">
        <kinesis-element class="title">
          Full-Cycle Event Agency
        </kinesis-element>

        <Circle/>

        <ul class="nav">
          <li class="nav__item nav__item--left">
            <router-link class="nav__text text" :to="'/where'">
                Where?
            </router-link>
          </li>

          <li class="nav__item nav__item--bottom">
            <router-link :to="'/who'" class="nav__text text">
              Who?
            </router-link>
          </li>

          <li class="nav__item nav__item--right">
            <router-link :to="'/what'" class="nav__text text">
              What?
            </router-link>
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
  name: "HomePage",
  components: {
    Marquee,
    Circle,
  }
}
</script>

<style lang="scss">
.home {
  overflow: hidden;

  &__inner {
    height: 100vh;
    height: var(--app-height);

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 578px;
      width: 100%;
      max-height: 578px;
      height: 100%;
      background-color: #FFCB46;
      border: 1px solid #FFCB46;
      border-radius: 50%;
      filter: blur(38px);
      @media (max-width: 1024px) {
        max-width: 482px;
        max-height: 482px;
      }
      @media (max-width: 767px) {
        max-width: 294px;
        max-height: 294px;
      }
      @media (max-width: 374px) {
        max-width: 254px;
        max-height: 254px;
      }
    }
  }

  .el {
    background: #FFCB46;
  }
}
</style>
