<template>
  <div class="app-page">
    <div class="app-page__container">
      <AppHeader />
      <main class="app__main">
        <RouterView />
      </main>
    </div>
  </div>
  <AppModalContainer />
</template>

<script setup>
import { RouterView } from "vue-router";
import AppModalContainer from "./components/AppModalContainer.vue";
import AppHeader from "./components/AppHeader.vue";
</script>

<style scoped>
.app-page {
  padding-inline: 80px;
}

.app-page__container {
  max-width: 1600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .app-page {
    padding-inline: 40px;
  }
}

@media (max-width: 360px) {
  .app-page {
    padding-inline: 20px;
  }
}
</style>
