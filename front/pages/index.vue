<template>
  <div>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>


  <h1>Le codage <b>n'a pas de<br> secrets pour nous.</b></h1>
    <p>Nous sommes des pionniers dans le niveau du dévelopemment<br>
      francophone. Avec nous, vous trouverez votre comble.</p>
      <button @click="scrollToNext">En savoir plus</button>

    <div class="arrow_down" @click="scrollToNext"></div>
  </main>
  <section id="about">
    <h3>Qui sommes nous?</h3>
    <p>DeepCodes est une nouvelle communauté regroupant des passionnés d'informatique, de technologie mais surtout de
      développement de partout dans le monde. Notre but est de faire rayonner cette belle passion pour la faire
      connaître aux autres. Nous voulons aussi fournir un endroit où l'on peut parler de ce domaine facilement. De plus,
      nous avons des salons d'entraide sur notre Discord ainsi que tes outils pour les développeurs gratuits!</p>
    <button @click="toToolsPage">Nos outils</button>
  </section>
  <section id="why">
    <h3>Pourquoi DeepCodes?</h3><br><br>
    <div class="grid">
      <img src="../assets/images/worker.png" alt="Worker" draggable="false" width="300" class="worker">
      <div class="infos">
        <div class="card">
          <img src="../assets/images/icons/community.svg" alt="Community" draggable="false" width="80">
          <p>Communauté axée<br>dévelopemment</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/tools.svg" alt="Tools" draggable="false" width="80">
          <p>Outils pour<br>développeurs</p>
        </div>
        <div class="card">
          <img src="../assets/images/icons/schedule.svg" alt="Schedule" draggable="false" width="80">
          <p>Supers évènements<br>avec cash prize</p>
        </div>
      </div>
    </div>
    <br><br>
  </section>
  <section id="donators">
    <br><br><br><br><br>
    <h3>Nos donateurs :</h3>
    <div class="podium">
      <div class="classement first">
        <img src="../assets/images/podium/1.svg" alt="1er">
        <h4>Luciferdawns <small><br>A donné 60$ et a boosté le serveur x2</small></h4>
      </div>
      <div class="classement second">
        <img src="../assets/images/podium/2.svg" alt="2eme">
        <h4>Nolaxy <small><br>A donné 5$ et a boosté le serveur x2</small></h4>
      </div>
      <div class="classement third">
        <img src="../assets/images/podium/3.svg" alt="3eme">
        <h4>Someone...</h4>
      </div>
    </div>
    <div class="goal">
      <h5>Montant Total:</h5>
      <div class="progress_bar">
        <div class="container" style="width:70%">65% (65$ CAD/100$ CAD)</div>
      </div>
    </div>
    <h4>Envie de nous soutenir? <a href="https://paypal.me/Flayglou" target="_blank">Faire un don</a></h4>
    <br><br><br><br><br>
  </section>
  <Footer/>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
const route = useRoute()
const config = useRuntimeConfig()

useMeta({
  title: 'DeepCodes - Home'
})

onMounted(async () => {
  if (route.query.token) {
    localStorage.setItem("token", route.query.token)

    const res = await fetch(`${config.public.api_url}/auth/info`, {
      method: 'POST',
      body: JSON.stringify({
        token: route.query.token
      })
    })

    const data = await res.json();

    localStorage.setItem("username", data.username)
    window.location.href = window.location.origin
  }
})

function scrollToNext() {
  document.getElementById('about').scrollIntoView();
}

function toToolsPage() {
  window.location.href = window.location.origin + "/tools"
}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/home.scss';
</style>
