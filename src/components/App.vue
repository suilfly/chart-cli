<script setup lang="ts">
import { ref } from 'vue';
const message = ref('hello, world');
</script>
<template>
  <div class="vue-title">vue</div>
  <div>{{ message }}</div>
</template>
<style lang="scss" scoped>
.vue-title {
  border-radius: 5px;
  width: 100px;
  background-color: lightgreen;
}
</style>
