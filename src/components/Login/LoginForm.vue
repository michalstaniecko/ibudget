<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";

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
    <form @submit.prevent="submitHandler" novalidate>
      <div class="d-grid gap-3">
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
        <div class="">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
