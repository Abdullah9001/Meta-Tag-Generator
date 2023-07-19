<template>
  <header
    class="w-full h-20 bg-gray-900 px-6 py-1 flex items-center justify-between"
  >
    <div class="flex justify-between items-center">
      <p class="text-2xl font-semibold text-slate-50">Our App</p>
    </div>

    <div class="flex space-x-4 items-center">
      <MenuLink href="/"> Sign In </MenuLink>
      <MenuLink to="/signup"> Sign Up </MenuLink>
    </div>
  </header>
</template>

<script setup></script>
