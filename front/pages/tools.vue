<template>
  <div>
  <Header/>
  <main>
    <h1>Nos outils :</h1>
    <p>Voici nos outils pour développeurs<br>
      faits main juste pour vous!</p>
    <section class="tools">
      <div class="card">
        <img src="../assets/images/tools/fontsy.png" alt="Fontsy" draggable="false" width="500">
        <div class="text">
          <h4>Outil</h4>
          <h3>Fontsy</h3>
          <p>Fontsy est un site de référencement de polices où vous<br> pouvez trouver les polices parfaites pour vos projets
            en 3<br> clics!</p>
          <a href="/">SOON</a>
        </div>
      </div>
      <div class="card">
        <img src="../assets/images/tools/templatex.png" alt="Templatex" draggable="false" width="500">
        <div class="text">
          <h4>Outil</h4>
          <h3>TemplateX</h3>
          <p>Trouvez des templates en tous genres pour votre projets en quelques<br>minutes!</p>
          <a href="/">SOON</a>
        </div>
      </div>
      <div class="card">
        <img src="../assets/images/tools/templatex.png" alt="Templatex" draggable="false" width="500">
        <div class="text">
          <h4>Outil</h4>
          <h3>TemplateX</h3>
          <p>DHost est un hébergeur à petit prix pour de grands projets pour<br> vous aider à lancer vos projets! En passant par les VPS aux offres games,<br> du web au Node.JS, vous êtes servis!</p>
          <a href="/">SOON</a>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</div>
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
