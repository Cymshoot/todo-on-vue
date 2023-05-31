<template>
  <div class="task-wrapper">
    <AppCheckbox
      :model-value="task.completed"
      @update:model-value="$emit('complete-todo')"
    ></AppCheckbox>

    <div
      class="task-text"
      :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
    >
      {{ task.title }}
    </div>

    <div class="button-container">
      <AppButton
        class="delete-task"
        type="icon"
        variation="alert"
        @click="$emit('delete-task')"
      >
        <AppIcon name="trash" size="18px"></AppIcon>
      </AppButton>

      <AppButton
        class="delete-task"
        type="icon"
        variation="warning"
        @click="$emit('delete-task')"
      >
        <AppIcon name="arhive" size="18px"></AppIcon>
      </AppButton>
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

<style>
.task-wrapper {
  display: flex;
  align-items: center;
  padding: 16px;

  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  justify-content: space-between;
}

.button-container {
  display: flex;
  gap: 4px;
}

.task-text {
  color: white;
  margin-left: 12px;
  width: 100%;
  word-break: break-all;
  margin-right: 12px;
}
</style>
