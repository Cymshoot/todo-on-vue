<template>
  <div class="task-wrapper">
    <input type="checkbox" @change="completedTask" :checked="task.completed" />
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
  emits: ["complete-todo", "deleted-task"],
  methods: {
    completedTask() {
      this.$emit("complete-todo", this.task.id);
    },
    deleteTask() {
      this.$emit("deleted-task", this.task.id);
    },
  },
};
</script>

<style></style>
