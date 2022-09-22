<template>
  <nav>
    <div class="navbar">
      <a href="/" :class="isRouteActive('index') ? 'active' : ''">Accueil</a>
      <a href="/" :class="isRouteActive('about') ? 'active' : ''">À Propos</a>
      <a href="/teams" :class="isRouteActive('teams') ? 'active' : ''">Notre Équipe</a>
    </div>
    <h3>DeepCodes</h3>
    <button class="mobile_menu_btn" @click="toggleMobileMenu"></button>
    <div class="navbar">
      <a href="/tools" :class="isRouteActive('tools') ? 'active' : ''">Nos outils</a>
      <a href="/contact" :class="isRouteActive('contact') ? 'active' : ''">Contact</a>
      <button @click="toLoginPage">Se connecter</button>
    </div>
  </nav>
  <div id="mobile_menu">
    <a href="/" :class="isRouteActive('index') ? 'active' : ''">Accueil</a>
    <a href="/" :class="isRouteActive('about') ? 'active' : ''">À Propos</a>
    <a href="/teams" :class="isRouteActive('teams') ? 'active' : ''">Notre Équipe</a>
    <a href="/tools" :class="isRouteActive('tools') ? 'active' : ''">Nos outils</a>
    <a href="/contact" :class="isRouteActive('contact') ? 'active' : ''">Contact</a>
    <button @click="toLoginPage">Se connecter</button>
  </div>
</template>

<script setup>
const route = useRoute()

function toggleMobileMenu() {
  const state = document.getElementById("mobile_menu");
  state.classList.toggle("open");
}
function isRouteActive(name) {
  return route.name === name
}
function toLoginPage() {
  window.location.href = window.location.origin + "/login"
}
</script>

<style scoped lang="scss">
@import '../assets/style/components/header.scss';
</style>
