<template>
  <section class="my-4 d-flex align-items-center pb-2">
    <img
      src="https://a0.anyrgb.com/pngimg/1242/2024/action-item-shopping-list-task-project-management-project-management-organization-yellow-icons-technology.png"
      alt="logo" class="rounded" />
    <h2 class="ps-3">Teachmate Task Manager</h2>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: auto;
}

section {
  border-bottom: 1px dotted;
}

//  Media Query for Ipads
@media (min-width: 576px) {
  section {
    width: 80%;
    margin: auto;
  }
}

//  Media Query for Laptops
@media (min-width: 992px) {
  section {
    width: 60%;
  }
}
</style>
