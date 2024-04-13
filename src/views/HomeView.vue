<template>
  <section class="content px-3 px-sm-5" :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">
    <!-- Header -->
    <header><header-comp /></header>

    <!-- Main -->
    <main>
      <!-- Task action feedback message -->
      <section>
        <transition name="feedback">
          <div v-if="taskStore.showSuccessMessage" class="alert alert-success fixed-top text-center">
            You added a new task.
          </div>
        </transition>

        <transition name="feedback">
          <div v-if="taskStore.showCompletedMessage" class="alert alert-info fixed-top text-center">
            <b>Bravo!</b>You completed a task.
          </div>
        </transition>

        <transition name="feedback">
          <div v-if="taskStore.showDeletedMessage" class="alert alert-danger fixed-top text-center" role="alert">
            You deleted a task.
          </div>
        </transition>
      </section>
      <!-- Theme prop -->
      <theme-comp @click="changeTheme" class="text-dark" />

      <div class="rounded-3 shadow bg-light p-3 pb-1 p-sm-5 pb-sm-3 mb-2 task-frame">
        <!-- Task input Prop -->
        <task-input />

        <!-- List of Tasks -->
        <p class="text-dark d-flex justify-content-between">
          <span><b>Completed Task: </b><i class="text-success fs-3">{{ taskStore.totalIsFav }}</i></span>
          <span>
            <b>Total Task: </b><i class="text-danger fs-3">{{ taskStore.totalTask }}</i></span>
        </p>
        <ul class="p-0">
          <li v-for="task in taskStore.tasks">
            <div class="my-3 p-3 p-sm-4 shadow-sm rounded-3 text-light bg-secondary">
              <div class="row">
                <div class="my-1 col-md-10 col-lg-11">
                  <div class="ps-2"><task-details :task="task" /></div>
                </div>
                <div class="col-md-2 col-lg-1"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>

    <!-- Footer -->
    <footer><footer-comp /></footer>
  </section>
</template>

<script setup lang="ts">
// Import files
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import ThemeComp from "@/components/ThemeComp.vue";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskInput from "@/components/TaskInputComp.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { ref, watch } from "vue";

// Pinia store
const taskStore = useTaskStore();

const props = defineProps(["task"]);

const theme = ref<string>(localStorage.getItem("theme") || "light");

const isDarkTheme = ref<boolean>(theme.value === "dark");

// Toggle light and dark theme
const changeTheme = (): void => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};

// Implement theme toggle in real time
watch(theme, (newTheme: string) => {
  isDarkTheme.value = newTheme === "dark";
});
</script>

<style lang="scss" scoped>
// Page align start
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

// Page align end

// Theme start
.light-theme {
  background-color: #d6d6d6;
  color: #000;
}

.dark-theme {
  background-color: #053662;
  color: #f5f5f5;
}

// Theme end

.button {
  box-shadow: 12px 12px 16px 0 #00000040, -8px -8px 12px 0 #ffffff4d;
  background: linear-gradient(135deg, #00000038, #ffffff40);
  border-radius: 50px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: none;
  }
}

ul {
  li {
    list-style: none;
  }
}

.content {
  transition: color 1s ease, background-color 1s ease;
}

.feedback-enter-from {
  opacity: 0;
}

.deleted-feedback-enter-to {
  opacity: 1;
}

.feedback-enter-active,
.feedback-leave-active {
  transition: opacity 1s ease;
}

.feedback-leave-from {
  opacity: 1;
}

.feedback-leave-to {
  opacity: 0;
}

//  Media Query for Ipads
@media (min-width: 576px) {
  .task-frame {
    width: 80%;
    margin: auto;
  }
}

//  Media Query for Laptops
@media (min-width: 992px) {
  .task-frame {
    width: 60%;
  }
}
</style>
