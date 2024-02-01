<template>
  <div class="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-xl">
    <div class="text-2xl font-semibold flex items-center gap-2">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>
