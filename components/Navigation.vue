<script setup lang="ts">
const toggleMenu = ref(true);
const toggle = () => {
  toggleMenu.value = !toggleMenu.value;
}
</script>

<template>
  <nav class="border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <a href="javascript:;" class="flex items-center brand">
        <Brand class="fill-gray-500"/>
      </a>
      <button @click="toggle" type="button"
              class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600"
              aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply block py-2 px-4 rounded hover:bg-emerald-800 border-t border-emerald-800 md:border-0;
}

.brand {
  height: 40px;
}

nav {
  @apply px-8 py-2;
}
</style>