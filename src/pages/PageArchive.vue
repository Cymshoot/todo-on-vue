<template>
  <div class="logo">
    <img width="126" height="48" src="/assets/Logo.png" />
  </div>

  <div class="count-container">
    <div class="count">
      Общее кол-во заархивированных задач
      <span class="counter-highlight">{{ store.archivedTasks.length }}</span>
    </div>
  </div>

  <div class="task-list-wrapper">
    <TaskItem
      v-for="task in store.archivedTasks"
      :key="task.id"
      :task="task"
      @complete-todo="store.completeTask"
      @delete-task="store.deleteTask"
      @unarchive-task="store.unarchiveTask"
    />
  </div>

  <router-link to="/">
    <AppButton class="bin-container" type="icon" variation="warning">
      <AppIcon name="bin" size="25px" color="yellow"> </AppIcon>
    </AppButton>
  </router-link>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useTasksStore } from "../store/tasksStore.js";
import TaskItem from "../components/TaskItem.vue";

const store = useTasksStore();

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    store.tasks = JSON.parse(localStorage.getItem("tasks"));
  }
});

watch(
  () => store.tasks,
  (saveTasks) => {
    localStorage.setItem("tasks", JSON.stringify(saveTasks));
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
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

.bin-container {
  position: absolute;
  top: 16px;
  right: 25px;
}
</style>
