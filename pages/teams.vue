<template>
  <Header/>
  <main>
    <h1>Notre Équipe</h1>
    <p>Voici notre équipe dévouée et ayant<br>
      un seul but: votre satisfaction.</p>
    <div class="team">
      <div class="card">
        <img src="../assets/images/team/Aigle.png" alt="Aigle Noir" width="300">
        <h3>Aigle Noir</h3>
        <h4>Fondateur</h4>
        <div class="socials">
          <div class="social">
            <div class="icon instagram"></div>
            <p>@maxime.mssctt</p>
          </div>
          <div class="social">
            <div class="icon discord"></div>
            <p>Aigle Noir#2022</p>
          </div>
          <div class="social">
            <div class="icon youtube"></div>
            <p>Aigle Noir</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script setup>
useMeta({
  title: 'DeepCodes - Teams'
})
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/teams.scss';
</style>
