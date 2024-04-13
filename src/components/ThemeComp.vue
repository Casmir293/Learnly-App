<template>
  <section class="theme" @click="changeTheme">
    <font-awesome-icon icon="fa-solid fa-sun" size="xl" v-show="theme === 'dark'" />
    <font-awesome-icon icon="fa-solid fa-moon" size="xl" v-show="theme === 'light'" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref<string>(localStorage.getItem("theme") || "light");

const changeTheme = (): void => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};
</script>

<style lang="scss" scoped>
.theme {
  position: fixed;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
}
</style>
