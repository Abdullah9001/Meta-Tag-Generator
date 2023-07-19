<template>
  <div class="flex flex-col space-y-2">
    <Label>{{ label }}</Label>
    <Input
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @update:modelValue="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  value: String | Number,
  modelValue: String | Number,
  errorMessage: String,
});

defineEmits(["update:modelValue"]);
</script>
