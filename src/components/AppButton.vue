<template>
  <button :class="['app-button', `--${props.type}`, `--${props.variation}`]">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  variation: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.app-button.--default {
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  &.--primary {
    color: white;
    background: #1e6f9f;
    &:hover {
      background-color: #4ea8de;
    }
  }
}

.app-button.--icon {
  border-radius: 4px;
  padding: 8px;
  &.--alert {
    color: #808080;
    background-color: rgba(255, 255, 255, 0);
    &:hover {
      color: #e25858;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  &.--warning {
    color: #808080;
    background-color: rgba(255, 255, 255, 0);
    &:hover {
      color: rgb(255, 145, 0);
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
