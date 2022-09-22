<template>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>

    <div class="form">
      <img src="../assets/images/logo.png" alt="DeepCodes's logo" width="70">
      <h1>S’inscrire</h1>
      <form v-on:submit.prevent="login">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" required>
        <input v-model="name" type="text" name="text" id="text" placeholder="Pseudo" required>
        <input v-model="password" type="password" name="password" id="password" placeholder="Mot de passe" required>
        <p>Problèmes de connexion?</p>

        <button type="submit">S’inscrire <img src="../assets/images/icons/arrow-right.svg" alt="En savoir plus" width="20"></button>
      </form>
    </div>
    <div class="oauth">
      <div class="icon discord"></div>
      <div class="icon google"></div>
    </div>
    <p>Déjà un compte ? <b @click="toLoginPage">Se connecter</b></p>
  </main>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue';

useMeta({
  title: 'DeepCodes - Login'
})

const email = ref();
const name = ref();
const password = ref();

const login = () => {
  console.log(email.value, name.value, password.value)
}

function toLoginPage() {
  window.location.href = window.location.origin + "/login"
}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/login.scss';
</style>
