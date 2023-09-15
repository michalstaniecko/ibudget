<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import TheForm from '@/components/Form/TheForm.vue';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const submitHandler = () => {
  console.log('submitHandler', email.value, password.value);
  authStore.login(email.value, password.value);
}

</script>

<template>
  <div>
    <the-form :submit-handler="submitHandler" submit-label="Login">
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
