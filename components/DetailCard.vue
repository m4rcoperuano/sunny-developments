<template>
  <div class="rounded">
    <div class="text-lg text-zinc-300 font-semibold flex items-center gap-2">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>
