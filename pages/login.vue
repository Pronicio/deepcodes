<template>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>

    <div class="form">
      <img src="../assets/images/logo.png" alt="DeepCodes's logo" width="70">
      <h1>Connexion</h1>
      <form v-on:submit.prevent="login">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" required>
        <input v-model="password" type="password" name="password" id="password" placeholder="Mot de passe" required>
        <p>Problèmes de connexion?</p>

        <button type="submit">Se connecter</button>
      </form>
    </div>
    <div class="oauth">
      <div class="icon discord"></div>
      <div class="icon google"></div>
    </div>
    <p>Pas de compte ? <b @click="toSignUpPage">S’inscrire</b></p>
  </main>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue';

useMeta({
  title: 'DeepCodes - Login'
})

const email = ref();
const password = ref();

const login = () => {
  console.log(email.value, password.value)
}

function toSignUpPage() {
  window.location.href = window.location.origin + "/signup"
}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/login.scss';
</style>
