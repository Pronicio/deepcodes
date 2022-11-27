<template>
  <div>
  <Header/>
  <main>
    <h1>Notre Équipe</h1>
    <p>Voici notre équipe dévouée et ayant<br>
      un seul but: votre satisfaction.</p>
    <div class="team">
      <div class="card">
        <img src="../assets/images/team/Aigle.png" alt="Aigle Noir" width="300">
        <h3>Artix</h3>
        <h4>Fondateur</h4>
        <div class="socials">
          <div class="social">
            <div class="icon discord"></div>
            <p>Aigle Noir#2022</p>
          </div>
          <div class="social">
            <div class="icon globe"></div>
            <p href="https://artiix.me">https://artiix.me</p>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/images/team/Flaym3r.png" alt="Flaym3r" width="300">
        <h3>Flaym3r</h3>
        <h4>Fondateur</h4>
        <div class="socials">
          <div class="social">
            <div class="icon instagram"></div>
            <p>@flaym3r_qc</p>
          </div>
          <div class="social">
            <div class="icon discord"></div>
            <p>Flaym3r#0007</p>
          </div>
          <div class="social">
            <div class="icon youtube"></div>
            <p>Team Kebec</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</div>
</template>

<script setup>
useMeta({
  title: 'DeepCodes - Notre équipe'
})
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/teams.scss';
</style>
