<template>
  <div class="header__inner container">

   <LanguageSwitcher/>

    <LogoTemplate/>

    <BurgerMenu/>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LogoTemplate from "@/components/LogoTemplate";
import BurgerMenu from "@/components/BurgerMenu";

export default {
  name: "HeaderTemplate",
  components: {
    BurgerMenu,
    LogoTemplate,
    LanguageSwitcher
  }
}
</script>

<style lang="scss">
.header {
  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
