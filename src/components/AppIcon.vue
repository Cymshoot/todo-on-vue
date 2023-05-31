<template>
  <div class="app-icon"></div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "20px",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});

const iconName = computed(
  () => `url("/icons/${props.name}.svg") no-repeat center`
);
</script>

<style scoped>
.app-icon {
  width: v-bind(size);
  height: v-bind(size);
  background-color: v-bind(color);

  mask: v-bind(iconName);
  -webkit-mask: v-bind(iconName);
  mask-size: contain;
  -webkit-mask-size: contain;
}
</style>
