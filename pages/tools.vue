<template>
  <Header/>
  <main>
    <h1>Nos outils :</h1>
    <p>Voici nos outils pour développeurs<br>
      faits main juste pour vous!</p>
    <section class="tools">
      <div class="card">
        <img src="../assets/images/tools/fontsy.png" alt="Fontsy" width="500">
        <div class="text">
          <h4>Outil</h4>
          <h3>Fontsy</h3>
          <p>Fontsy est un site de référencement de polices où vous<br> pouvez trouver les polices parfaites pour vos projets
            en 3<br> clics!</p>
          <a href="https://fontsy.xyz/">https://fontsy.xyz/</a>
        </div>
      </div>
      <div class="card">
        <img src="../assets/images/tools/templatex.png" alt="Templatex" width="500">
        <div class="text">
          <h4>Outil</h4>
          <h3>TemplateX</h3>
          <p>Fontsy est un site de référencement de polices où vous<br> pouvez trouver les polices parfaites pour vos projets
            en 3<br> clics!</p>
          <a href="https://templatex.xyz/">https://templatex.xyz/</a>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</template>

<script setup>
useMeta({
  title: 'DeepCodes - Tools'
})
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/tools.scss';
</style>
