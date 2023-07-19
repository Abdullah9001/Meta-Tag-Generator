<template>
  <div class="flex flex-col space-y-2">
    <Label>{{ label }}</Label>
    <Input
      :type="type"
      :value="value"
      @update:modelValue="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup></script>
