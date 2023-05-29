<template>
  <h1>ToDo List</h1>
  <input type="text" v-model="inputValue" @keypress.enter="addNewTask" />
  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @complete-todo="completedTask"
    @delete-task="deleteTask"
  />
</template>

<script setup>
import TaskItem from "./components/TaskItem.vue";
import { ref } from "vue";

const tasks = ref([
  { id: 1, title: "awdawd", completed: false },
  { id: 2, title: "taras", completed: true },
  { id: 3, title: "privet", completed: false },
  { id: 4, title: "kak dela", completed: false },
]);
const inputValue = ref("");

const deleteTask = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
};

const addNewTask = () => {
  if (inputValue.value && inputValue.value.trim()) {
    tasks.value.push({
      id: Date.now(),
      title: inputValue.value,
      completed: false,
    });
    inputValue.value = "";
  }
};

const completedTask = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    const task = tasks.value[index];
    task.completed = !task.completed;
  }
};
</script>

<style></style>
