<template>
  <div class="task-wrapper">
    <input
      type="checkbox"
      @change="$emit('complete-todo')"
      :checked="task.completed"
    />
    <div :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.title }}
    </div>
    <div class="delete-task" @click="$emit('delete-task')">&times;</div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.task-wrapper {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  margin-top: 12px;

  width: 736px;
  height: 72px;

  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
</style>
