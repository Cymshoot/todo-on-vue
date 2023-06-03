<template>
  <div class="header-bg">
    <div class="container">
      <div class="logo">
        <img width="126" height="48" src="/assets/Logo.png" />
      </div>

      <div class="input-container">
        <input
          placeholder="Введи заметку..."
          class="input-field"
          type="text"
          v-model="inputValue"
          @keypress.enter="addTask"
        />

        <AppButton class="add-button" @click="addTask">
          Добавить <AppIcon name="plus"></AppIcon>
        </AppButton>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="count-container">
      <div class="count">
        Общее кол-во задач
        <span class="counter-highlight">{{ store.filtredTasks.length }}</span>
      </div>
      <div class="count-completed">
        Выполнено

        <span class="counter-highlight">
          {{ store.completedTaskCount }}
          <template v-if="store.completedTaskCount"
            >из {{ store.filtredTasks.length }}</template
          >
        </span>
      </div>
    </div>

    <div class="task-list-wrapper">
      <TaskItem
        v-for="task in store.filtredTasks"
        :key="task.id"
        :task="task"
        @complete-todo="store.completeTask"
        @delete-task="store.deleteTask"
        @archive-task="store.archiveTask"
      />
    </div>
  </div>

  <router-link to="/archive">
    <AppButton class="bin-container" type="icon" variation="warning">
      <span v-if="store.archivedTasks.length" class="counter-highlight">{{
        store.archivedTasks.length
      }}</span>
      <AppIcon name="bin" size="25px" color="yellow"> </AppIcon>
    </AppButton>
  </router-link>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useTasksStore } from "../store/tasksStore.js";
import TaskItem from "../components/TaskItem.vue";

const store = useTasksStore();

const inputValue = ref("");

function addTask() {
  if (inputValue.value && inputValue.value.trim()) {
    store.tasks.push({
      id: Date.now(),
      title: inputValue.value,
      completed: false,
      archived: false,
    });
    inputValue.value = "";
  }
}

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

<style scoped>
.input-container {
  transform: translate(0px, 50%);
  display: flex;
  align-items: center;
  margin-bottom: 91px;
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
