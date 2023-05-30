<template>
  <img class="logo" src="./assets/Logo.png" />
  <div class="input-container">
    <input
      class="input-field"
      type="text"
      v-model="inputValue"
      @keypress.enter="addNewTask"
    />
    <button class="btn" @click="addNewTask">Добавить</button>
  </div>
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
import { ref, onMounted, watch } from "vue";

const tasks = ref([]);

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

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    tasks.value = JSON.parse(localStorage.getItem("tasks"));
  }
});

watch(
  tasks,
  (saveTasks) => {
    localStorage.setItem("tasks", JSON.stringify(saveTasks));
  },
  { deep: true }
);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  display: flex;
  align-items: center;
}

.input-container button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 52px;
  margin-left: 8px;

  width: 90px;
  height: 52px;

  background: #1e6f9f;
  border-radius: 8px;
}

.input-container .input-field {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: 53px;

  width: 638px;
  height: 54px;

  background: #262626;

  border: 1px solid #0d0d0d;
  border-radius: 8px;
}
</style>
