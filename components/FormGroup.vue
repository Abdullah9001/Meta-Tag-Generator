<template>
  <div class="flex flex-col space-y-2">
    <Label>{{ label }}</Label>
    <Input :type="type" :value="value" @update="moduleValue"
  </div>
</template>

<script setup></script>
