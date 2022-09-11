<template>
  <nav>
    <div class="navbar">
      <a href="#" class="active">Accueil</a>
      <a href="#">À Propos</a>
      <a href="#">Notre Équipe</a>
    </div>
    <h3>DeepCodes</h3>
    <button class="mobile_menu_btn" @click="toggleMobileMenu"></button>
    <div class="navbar">
      <a href="#">Nos outils</a>
      <a href="#">Contact</a>
      <button>Se connecter</button>
    </div>
  </nav>
  <div id="mobile_menu">
    <a href="#" class="active">Accueil</a>
    <a href="#">À Propos</a>
    <a href="#">Notre Équipe</a>
    <a href="#">Nos outils</a>
    <a href="#">Contact</a>
    <button>Se connecter</button>
  </div>
</template>

<script setup>
function toggleMobileMenu() {
  const state = document.getElementById("mobile_menu");
  state.classList.toggle("open");
}
</script>

<style scoped lang="scss">
@import '../assets/style/components/header.scss';
</style>
