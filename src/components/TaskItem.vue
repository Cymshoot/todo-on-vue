<template>
  <div class="task-wrapper">
    <input
      type="checkbox"
      @change="$emit('complete-todo', task.id)"
      :checked="task.completed"
    />
    <div :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.title }}
    </div>
    <div class="delete-task" @click="$emit('delete-task', task.id)">
      &times;
    </div>
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

<style></style>
