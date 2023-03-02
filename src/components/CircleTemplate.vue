<template>
  <div class="circle">
    <svg viewBox="0 0 100 100">
      <defs>
        <path id="circle"
              d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
      </defs>

      <text class="circle__text">
        <textPath xlink:href="#circle">
          showreel showreel showreel
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "CircleTemplate"
}
</script>

<style lang="scss">
.circle {
  position: absolute;
  bottom: 22%;
  right: 36%;
  cursor: pointer;
  animation: spin 10s infinite linear;
  animation-play-state: paused;
  @media (max-width: 1280px) {
    bottom: 26%;
    right: 28%;
  }
  @media (max-width: 1024px) {
    bottom: 25%;
    right: 21%;
  }
  @media (max-width: 1024px) {
    bottom: 20%;
    right: 16%;
  }
  @media (max-width: 767px) {
    bottom: 31%;
  }

  &:hover {
    animation-play-state: running;
  }

  svg {
    display: block;
    width: 115px;
    height: 115px;
    @media (max-width: 1024px) {
      width: 110px;
      height: 110px;
    }
    @media (max-width: 767px) {
      width: 88px;
      height: 87px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
  }

  &__text {
    font-size: 9px;
    fill: white;
    font-family: 'Grtsk Giga';
    font-style: normal;
    font-weight: 600;
    word-spacing: 10px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
