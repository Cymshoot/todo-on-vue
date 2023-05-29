<template>
  <h1>ToDo List</h1>
  <input type="text" v-model="inputValue" @keypress.enter="addNewTask" />
  <TaskItem
    v-for="(task, idx) in tasks"
    :key="task.id"
    :task="task"
    @complete-todo="completeTask(idx)"
    @delete-task="deleteTask(idx)"
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

const deleteTask = (idx) => {
  tasks.value.splice(idx, 1);
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

const completeTask = (idx) => {
  const task = tasks.value[idx];
  task.completed = !task.completed;
};
</script>

<style></style>
