import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({ tasks: [] }),
  getters: {
    completedTaskCount: (state) =>
      state.tasks.filter((task) => task.completed && task.archived !== true)
        .length,
    filtredTasks: (state) =>
      state.tasks.filter((task) => task.archived !== true),
    archivedTasks: (state) =>
      state.tasks.filter((task) => task.archived === true),
  },
  actions: {
    completeTask(id) {
      const idx = this.tasks.findIndex((task) => {
        return task.id === id;
      });
      const task = this.tasks[idx];
      task.completed = !task.completed;
    },
    deleteTask(id) {
      const idx = this.tasks.findIndex((task) => {
        return task.id === id;
      });
      this.tasks.splice(idx, 1);
    },
    archiveTask(id) {
      const idx = this.tasks.findIndex((task) => {
        return task.id === id;
      });
      this.tasks[idx].archived = true;
    },
    unarchiveTask(id) {
      const idx = this.tasks.findIndex((task) => {
        return task.id === id;
      });
      this.tasks[idx].archived = false;
    },
  },
});
