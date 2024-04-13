<template>
  <div class="task">
    <div class="icons d-inline">
      <font-awesome-icon icon="fa-solid fa-square-check" size="xl" @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }" />
    </div>
    <h5 class="d-inline ps-2 main-task" @click="taskStore.toggleFav(task.id)">
      {{ task.title }}
    </h5>
    <br />

    <div class="d-flex justify-content-between">
      <button class="btn btn-sm btn-danger mt-3" @click="taskStore.deleteTask(task.id)">
        Delete
      </button>

      <!-- Date Selection Input -->
      <div class="d-flex justify-content-end align-items-end">
        <input type="date" class="form-control mt-3 w-50" />
        <font-awesome-icon icon="fa-solid fa-heart" size="xl" class="ms-2" :class="{ 'text-danger': isHeartRed }"
          @click="toggleHeartColor" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";
import { defineProps, ref, Ref } from "vue";

interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

const props = defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();

const isHeartRed: Ref<boolean> = ref(false);

const toggleHeartColor = (): void => {
  isHeartRed.value = !isHeartRed.value;
};
</script>

<style lang="scss" scoped>
svg {
  opacity: 0.3;
  transition: 1s;
  cursor: pointer;
}

.active {
  opacity: 1;
  transition: 1s;
}

.main-task {
  cursor: pointer;
}

.text-danger {
  opacity: 1 !important;
  transition: opacity 1s;
}
</style>
