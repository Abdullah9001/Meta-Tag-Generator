<template>
  <form class="w-full flex flex-col space-y-3"></form>
</template>

<script setup>
const formProps = defineProps({
  type: {
    type: String,
    validator: (value) => ["login", "register"].includes(value),
  },
});
</script>
