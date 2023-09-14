<script setup lang="ts">
import {computed, ref} from "vue";
  import LoginForm from "@/components/Login/LoginForm.vue";
  import RegisterForm from "@/components/Login/RegisterForm.vue";

  const typeRef = ref('login');

  const changeForm = (type: typeType) => {
    typeRef.value = type;
  }

  const getType = computed(() => typeRef.value)

  type typeType = 'login' | 'register';

</script>

<template>
  <div>
    <div class="btn-group">
      <button class="btn btn-link"  @click.prevent="changeForm('login')">Login</button>
      <button class="btn btn-link" @click.prevent="changeForm('register')">Register</button>
    </div>
    <div>
      <LoginForm v-if="typeRef === 'login'"/>
      <RegisterForm v-if="typeRef === 'register'" />
    </div>
  </div>
</template>

<style scoped>

</style>
