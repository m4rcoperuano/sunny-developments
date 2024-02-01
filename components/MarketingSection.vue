<script setup lang="ts">

</script>

<template>
  <div class="">
    <div class="text-xl font-bold dark:text-white mb-1">
      <slot name="title" />
    </div>
    <div class="content dark:text-gray-300">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>

</style>