<template>
  <div class="logo">
    <img width="126" height="48" src="./assets/Logo.png" />
  </div>

  <div class="input-container">
    <input
      placeholder="Введи заметку..."
      class="input-field"
      type="text"
      v-model="inputValue"
      @keypress.enter="addNewTask"
    />

    <AppButton class="add-button" @click="addNewTask">
      Добавить <AppIcon name="plus"></AppIcon>
    </AppButton>
  </div>

  <div class="count-container">
    <div class="count">
      Общее кол-во заметок
      <span class="counter-highlight">{{ tasks.length }}</span>
    </div>
    <div class="count-completed">
      Выполнено

      <span class="counter-highlight">
        {{ completedTaskCount }}
        <template v-if="completedTaskCount">из {{ tasks.length }}</template>
      </span>
    </div>
  </div>

  <div class="task-list-wrapper">
    <TaskItem
      v-for="(task, idx) in tasks"
      :key="task.id"
      :task="task"
      @complete-todo="completeTask(idx)"
      @delete-task="deleteTask(idx)"
    />
  </div>
</template>

<script setup>
import TaskItem from "./components/TaskItem.vue";
import { ref, onMounted, watch, computed } from "vue";

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

const completedTaskCount = computed(() => {
  return tasks.value.filter((task) => task.completed).length;
});
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  gap: 8px;
}

.input-field {
  color: white;
  padding: 16px;
  height: 54px;
  background: #262626;
  border: 1px solid #0d0d0d;
  border-radius: 8px;
  width: 100%;
}

.add-button {
  font-family: "Inter" !important;
  font-style: normal;
  font-weight: 700 !important;
}

.count-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.count {
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #4ea8de;
}

.count-completed {
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #8284fa;
}

.task-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 736px;
}

.logo {
  margin-top: 72px;
  text-align: center;
  margin-bottom: 53px;
}

.counter-highlight {
  font-size: 12px;
  padding: 2px 8px;
  color: white;
  background-color: #333333;
  border-radius: 999px;
}
</style>
