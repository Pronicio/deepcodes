<template>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>

    <div class="form">
      <img src="../assets/images/logo.png" alt="DeepCodes's logo" width="70">
      <h1>S’inscrire</h1>
      <form v-on:submit.prevent="register">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" required>
        <input v-model="username" type="text" name="text" id="text" placeholder="Pseudo" required>
        <input v-model="password" type="password" name="password" id="password" placeholder="Mot de passe" required>
        <p>Problèmes de connexion?</p>

        <button type="submit">S’inscrire</button>
      </form>
    </div>
    <div class="oauth">
      <div class="icon discord" @click="discord"></div>
      <div class="icon google"></div>
    </div>
    <p>Déjà un compte ? <b @click="toLoginPage">Se connecter</b></p>
  </main>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue';

const config = useRuntimeConfig()

useMeta({
  title: 'DeepCodes - Signup'
})

const email = ref();
const username = ref();
const password = ref();

const register = async () => {
  console.log(email.value, username.value, password.value)

  const res = await fetch(`${config.public.api_url}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      username: username.value,
      password: password.value
    })
  })

  const data = await res.json();
  console.log(data)

  if (data.success) {
    localStorage.setItem("token", data.token)
    localStorage.setItem("username", data.username)
    window.location.href = window.location.origin
  }
}

const discord = () => {
  window.location.href =config.public.discord_oauth
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
