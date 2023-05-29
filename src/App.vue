<template>
  <div>
    <h1>ToDo List</h1>
    <input type="text" v-model="input" @keypress.enter="addNewTask" />
    <div>
      <div class="task-wrapper" v-for="(task, id) in tasks" :key="id">
        <input type="checkbox" />
        <div>{{ task.title }}</div>
        <div class="delete-task" @click="deleteTask(id)">&times;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [{ title: "awdawd" }],
      input: "",
    };
  },
  methods: {
    deleteTask(id) {
      this.tasks.splice(id, 1);
    },
    addNewTask() {
      if (this.input && this.input.trim()) {
        this.tasks.push({
          title: this.input,
        });
        this.input = "";
      }
    },
  },
};
</script>

<style></style>
