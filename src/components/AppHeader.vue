<template>
  <header class="app-header">
    <div class="app-header__container">
      <img class="app-header__logo" src="/src/images/logo.svg" alt="" />

      <button
        class="app-header__button-login"
        v-if="!authStore.user"
        @click="openModal"
      >
        <img
          class="app-header__button-login__img"
          src="/src/images/Vector.svg"
        />
        Вход
      </button>
      <button
        class="app-header__button-logout"
        v-else
        @click="authStore.logout"
      >
        Выход
      </button>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useModalsStore } from "../stores/modals";
import LoginModal from "./LoginModal.vue";

const authStore = useAuthStore();
const modalStore = useModalsStore();

const openModal = () => {
  modalStore.createModal(LoginModal);
};
</script>

<style scoped>
.app-header {
  display: grid;
  padding: 40px 0;
}

.app-header__container {
  max-width: 1600px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  gap: 22px;
}

.app-header__logo {
  max-width: 100%;
}

.app-header__button-login {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  padding: 12px 24px;
  gap: 12px;
}
.app-header__button-login__img {
  max-width: 100%;
  height: 32px;
}

.app-header__button-logout {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  padding: 12px 24px;
}

@media (max-width: 768px) {
  .app-header {
    padding: 20px 0;
  }
}

@media (max-width: 360px) {
  .app-header {
    padding: 20px 0;
  }
}
</style>
