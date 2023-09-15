<script setup lang="ts">
import {ref} from "vue";
import TheForm from "@/components/Form/TheForm.vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

const email = ref<string>('');
const password = ref<string>('');

const submitHandler = () => {
  authStore.register(email.value, password.value);
}
</script>

<template>
  <div>
    <the-form :submit-handler="submitHandler" submit-label="Register">
      <div class="">
        <input
            placeholder="Email"
            class="form-control"
            type="email"
            id="email"
            name="email"
            v-model="email"
        />
      </div>
      <div class="">
        <input
            placeholder="Password"
            class="form-control"
            type="password"
            id="password"
            name="password"
            v-model="password"
        />
      </div>
    </the-form>
  </div>
</template>

<style scoped>

</style>
