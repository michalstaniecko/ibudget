<script setup lang="ts">
import {computed, ref} from "vue";
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";

const typeRef = ref<typeType>('login');

const changeForm = (type: typeType) => {
  typeRef.value = type;
}

const getActiveClass = (type: typeType) => {
  return typeRef.value === type ? 'btn-dark' : 'btn-outline-dark';
}

type typeType = 'login' | 'register';


</script>

<template>
  <div>
    <div class="btn-group py-3">
      <button
          class="btn"
          :class="[getActiveClass('login')]"
          @click.prevent="changeForm('login')"
      >
        Login
      </button>
      <button
          class="btn"
          :class="[getActiveClass('register')]"
          @click.prevent="changeForm('register')"
      >
        Register
      </button>
    </div>
    <div>
      <LoginForm v-if="typeRef === 'login'"/>
      <RegisterForm v-if="typeRef === 'register'"/>
    </div>
  </div>
</template>

<style scoped>

</style>
