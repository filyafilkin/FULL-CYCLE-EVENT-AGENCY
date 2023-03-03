<template>
  <div class="burger" @click="menuOpen" :class="{active:menuActive}">
    <div class="burger__item"></div>
    <div class="burger__item"></div>
  </div>

  <ul class="nav-mobile" :class="{active:menuActive}">
    <li class="nav-mobile__item">
      <router-link class="nav-mobile__text text" :to="'/'" @click="menuOpen">
        Home
      </router-link>
    </li>

    <li class="nav-mobile__item">
      <router-link class="nav-mobile__text text" :to="'/where'" @click="menuOpen">
        Where?
      </router-link>
    </li>

    <li class="nav-mobile__item">
      <router-link class="nav-mobile__text text" :to="'/who'" @click="menuOpen">
        Who?
      </router-link>
    </li>

    <li class="nav-mobile__item">
      <router-link class="nav-mobile__text text" :to="'/what'" @click="menuOpen">
        What?
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BurgerMenu",
  methods: {
    menuOpen() {
      this.menuActive=!this.menuActive;
      this.$emit('menuActive');
    }
  },
  data() {
    return {
      menuActive: false,
    }
  }
}
</script>

<style lang="scss">
.burger {
  display: none;
  flex-direction: column;
  position: absolute;
  right: 6px;
  top: 17px;
  cursor: pointer;
  z-index: 10;
  gap: 8px;
  padding: 10px;
  @media (max-width: 767px) {
    display: flex;
  }
  @media (max-height: 480px) {
    display: flex;
  }

  &__item {
    width: 22px;
    height: 1px;
    background-color: #000000;
    transition: all .5s;
  }
}

.active.burger {
  .burger__item {
    &:nth-child(1) {
      transform: translateY(4.3px) rotate(45deg);
    }

    &:nth-child(2) {
      transform: translateY(-4.5px) rotate(-45deg);
    }
  }
}

.nav-mobile {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(120%);
  right: 5px;
  transition: 1s;
  z-index: 10;
  @media (max-width: 767px) {
    display: flex;
  }
  @media (max-height: 480px) {
    display: flex;
  }

  &__item {
    position: relative;
  }
}

.active.nav-mobile {
  transform: translateY(-50%) translateX(0);
}

</style>
