<template>
  <form class="w-full flex flex-col space-y-3" @submit.prevent="process">
    <FormGroup
      v-if="type == 'register'"
      label="Full Name"
      type="text"
      :value="userForm.name"
      :errorMessages="errorBag.name"
    />
    <FormGroup
      label="Email"
      type="text"
      :value="userForm.email"
      :errorMessages="errorBag.email"
    />
    <FormGroup
      label="Password"
      type="text"
      :value="userForm.password"
      :errorMessages="errorBag.password"
    />

    <Button class="bg-blue-500 text-white" type="submit">
      {{ type == "login" ? "login" : "register" }}
    </Button>
  </form>
</template>

<script setup>
const formProps = defineProps({
  type: {
    type: String,
    validator: (value) => ["login", "register"].includes(value),
  },
});

const userForm = reactive({
  name: "",
  email: "",
  password: "",
});

const { errorBag, login, signUp } = useAuth();

function process() {
  if (formProps.type == "login") login(userForm);
  else signUp(userForm);
}
</script>
