<template>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>

    <h1>Le codage <b>n'a pas de<br> secrets pour nous.</b></h1>
    <p>Nous sommes des pionniers dans le niveau du dévelopemment<br>
      francophone. Avec nous, vous trouverez votre comble.</p>
    <button>En savoir plus <img src="../assets/images/icons/arrow-right.svg" alt="En savoir plus" width="20"></button>

    <div class="arrow_down"></div>
  </main>
  <section class="about">
    <h3>Qui sommes nous?</h3>
    <p>DeepCodes est une nouvelle communauté regroupant des passionnés d'informatique, de technologie mais surtout de
      développement de partout dans le monde. Notre but est de faire rayonner cette belle passion pour la faire
      connaître aux autres. Nous voulons aussi fournir un endroit où l'on peut parler de ce domaine facilement. De plus,
      nous avons des salons d'entraide sur notre Discord ainsi que tes outils pour les développeurs gratuits!</p>
    <button>Nos outils <img src="../assets/images/icons/arrow-right.svg" alt="En savoir plus" width="20"></button>
  </section>
  <section class="why">
    <h3>Pourquoi DeepCodes ?</h3>
    <div class="grid">
      <img src="../assets/images/worker.png" alt="Worker" width="300" class="worker">
      <div class="infos">
        <div class="card">
          <img src="../assets/images/icons/community.svg" alt="Community" width="80">
          <p>Communauté axée<br>dévelopemment</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/tools.svg" alt="Tools" width="80">
          <p>Outils pour<br>développeurs</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/schedule.svg" alt="Schedule" width="80">
          <p>Supers évènements<br>avec cash prize</p>
        </div>
      </div>
    </div>
  </section>
  <section class="donators">
    <h3>Nos donateurs :</h3>
    <div class="podium">
      <div class="classement first">
        <img src="../assets/images/podium/1.svg" alt="1er">
        <h4>Someone...</h4>
      </div>
      <div class="classement second">
        <img src="../assets/images/podium/2.svg" alt="2eme">
        <h4>Someone...</h4>
      </div>
      <div class="classement third">
        <img src="../assets/images/podium/3.svg" alt="3eme">
        <h4>Someone...</h4>
      </div>
    </div>
    <div class="goal">
      <h5>Montant Total:</h5>
      <div class="progress_bar">
        <div class="container" style="width:70%">70% (179,63$ CAD)</div>
      </div>
    </div>
    <h4>Envie de nous soutenir? <a href="#">Faire un don</a></h4>
  </section>
  <Footer/>
</template>

<style lang="scss">
@import '../assets/style/style.scss';
@import '../assets/style/pages/home.scss';
</style>
