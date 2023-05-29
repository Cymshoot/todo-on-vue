<template>
  <div class="task-wrapper">
    <input
      type="checkbox"
      @change="completedTask(task.id)"
      :checked="task.completed"
    />
    <div :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
      {{ task.title }}
    </div>
    <div class="delete-task" @click="deleteTask(task.id)">&times;</div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  emits: ["task-completed", "task-deleted"],
  methods: {
    deleteTask() {
      this.$emit("task-deleted", this.task.id);
    },
  },
};
</script>

<style></style>
