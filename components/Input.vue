<template>
  <input
    type="text"
    class="w-full border border-gray-700 rounded focus:ring focus:ring-purple-500 outline-none text-gray-600 transition-all duration-150 ease-in-out"
    v-bind="$attrs"
    :value="value"
    @input="$emit('update:updateModule', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  moduleValue: String | Number,
  value: String | Number,
});

defineEmits(["update:moduleValue"]);
</script>
