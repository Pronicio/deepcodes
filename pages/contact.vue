<template>
  <Header/>
  <main>
    <div class="filter"></div>
    <div class="bubble_1"></div>
    <div class="bubble_2"></div>

    <div class="form">
      <img src="../assets/images/logo.png" alt="DeepCodes's logo" width="70">
      <h1>Nous contacter</h1>
      <form v-on:submit.prevent="sendMessage">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email" required>
        <textarea v-model="message" id="story" name="story" rows="5" cols="33" placeholder="Message..."></textarea>

        <button type="submit">Se connecter <img src="../assets/images/icons/arrow-right.svg" alt="En savoir plus" width="20"></button>
      </form>
    </div>
  </main>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue';

useMeta({
  title: 'DeepCodes - Contact'
})

const email = ref();
const message = ref();

const sendMessage = () => {
  console.log(email.value, message.value)
}
</script>

<style lang="scss">
@import '../assets/style/style.scss';
</style>


<style scoped lang="scss">
@import '../assets/style/pages/login.scss';
</style>
