<template>
  <div class="switcher">
    <div class="switcher__icon">
      <img class="switcher__svg"
           src="../assets/lang-switcher-icon.svg"
           alt="Open Menu">
    </div>

    <ul class="switcher__list">
      <li class="switcher__item">RU</li>
      <li class="switcher__item">UA</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher"
}
</script>

<style lang="scss">
.switcher {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 19px;
  top: 28px;
  gap: 40px;
  z-index: 9;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
    left: 16px;
    top: 16px;
  }

  &:hover .switcher__item {
    opacity: 1;
  }

  &__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__item {
    font-family: 'Grtsk Giga';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #373737;
    opacity: 0;
    @media (max-width: 1024px) {
      font-size: 14px;
    }

    &:nth-child(1) {
      transition: all .5s ease-in-out;
    }

    &:nth-child(2) {
      transition: all 1.5s ease-in-out;
    }
  }

  &__icon {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    padding: 10px 11px 7px 12px;

    img {
      width: 14px;
      height: 20px;
    }
  }
}
</style>
