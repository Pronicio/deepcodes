<template>
    <div>
    <Header/>
    <main>
      <h1>Nos partenaires</h1>
      <p>Voici nos partenaires<br>avec qui nous collaborons étroitement!</p>

      <div class="team">
      <div class="card">
        <img src="../assets/images/partners/RivBoysLogo.png" alt="Les RivBoys" width="300" draggable="false">
        <h3>Les RivBoys</h3>
        <h4>Chaîne YouTube</h4><br>
        <button>Visiter</button><br><br>
        <h3 style="font-size: 25px; font-weight:600">Nous cherchons de nouveaux<br> partenaires, <a href="/contact">contactez-nous</a> pour plus d'infos!</h3>
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
  @import '../assets/style/pages/partners.scss';
  </style>
  