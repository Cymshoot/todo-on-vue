<template>
  <img class="logo" src="./assets/Logo.png" />
  <div class="input-container">
    <input
      :placeholder="placeholder"
      class="input-field"
      type="text"
      v-model="inputValue"
      @keypress.enter="addNewTask"
    />
    <button class="btn" @click="addNewTask">Добавить</button>
  </div>
  <div class="count-container">
    <p class="count">Общее кол-во заметок {{ countTask }}</p>
    <p class="count-completed" v-if="completedTaskCount !== 0">
      Выполнено {{ completedTaskCount }} из {{ countTask }}
    </p>
    <p class="count-completed" v-else>Выполнено {{ completedTaskCount }}</p>
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
import { ref, onMounted, watch, computed } from "vue";

const tasks = ref([]);

const placeholder = ref("Введи заметку");

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

const countTask = computed(() => tasks.value.length);

const completedTaskCount = computed(() => {
  return tasks.value.filter((task) => task.completed).length;
});
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

.count-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.count {
  margin-right: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #4ea8de;
}

.count-completed {
  margin-left: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #8284fa;
}
</style>
