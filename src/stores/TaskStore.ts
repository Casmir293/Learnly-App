import { defineStore } from "pinia";

interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

interface TaskStoreState {
  tasks: Task[];
  showSuccessMessage: boolean;
  showCompletedMessage: boolean;
  showDeletedMessage: boolean;
}

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskStoreState => ({
    tasks: [],
    showSuccessMessage: false,
    showCompletedMessage: false,
    showDeletedMessage: false,
  }),

  getters: {
    totalTask: (state): number => {
      return state.tasks.length;
    },

    totalIsFav: (state): number => {
      return state.tasks.filter((task) => task.isFav).length;
    },
  },

  actions: {
    addTask(task: Task): void {
      this.tasks.push(task);
      this.showSuccessMessage = true;

      // feedback message for 1 second
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 1000);
    },

    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.showDeletedMessage = true;

      // feedback message for 1 second
      setTimeout(() => {
        this.showDeletedMessage = false;
      }, 1000);
    },

    toggleFav(id: number): void {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.isFav = !task.isFav;

        if (task.isFav) {
          this.showCompletedMessage = true;

          // feedback message for 1 second
          setTimeout(() => {
            this.showCompletedMessage = false;
          }, 1000);
        }
      }
    },
  },
});
