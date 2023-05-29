<template>
  <h1>ToDo List</h1>
  <input type="text" v-model="input" @keypress.enter="addNewTask" />
  <Task
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @task-completed="completedTask"
    @task-deleted="deleteTask"
  />
</template>

<script>
import Task from "./components/Task.vue";

export default {
  components: { Task },
  data() {
    return {
      tasks: [
        { id: 1, title: "awdawd", completed: false },
        { id: 2, title: "taras", completed: true },
        { id: 3, title: "privet", completed: false },
        { id: 4, title: "kak dela", completed: false },
      ],
      input: "",
    };
  },
  methods: {
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    addNewTask() {
      if (this.input && this.input.trim()) {
        this.tasks.push({
          id: Date.now(),
          title: this.input,
          completed: false,
        });
        this.input = "";
      }
    },
    completedTask(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
    },
  },
};
</script>

<style></style>
