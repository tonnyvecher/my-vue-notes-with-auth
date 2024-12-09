<template>
  <AppModal>
    <div class="app-modal-login__container">
      <header class="app-modal-login__header">
        <button @click="closeModal" class="app-modal-login__header__btn-close">
          <img src="/src/images/close.svg" alt="" />
        </button>
        <h2>Вход в ваш аккаунт</h2>
      </header>
      <main>
        <section class="app-modal-login__section">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="password" type="password" placeholder="Пароль" />
        </section>
      </main>

      <footer class="app-modal-login__container-log">
        <p class="app-modal-login__container-log--condition">
          Нет аккаунта?
          <button
            class="app-modal-login__container-log--href"
            @click="modalStore.createModal(RegistretionModal)"
          >
            Зарегистрироваться
          </button>
        </p>
        <button class="app-modal-login__btn-login" @click="login">Войти</button>
      </footer>
    </div>
  </AppModal>
</template>

<script setup>
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import { useModalsStore } from "../stores/modals";
import RegistretionModal from "./RegistretionModal.vue";
import { useAuthStore } from "../stores/auth";

const props = defineProps(["modalId"]);
const authStore = useAuthStore();
const modalStore = useModalsStore();

const closeModal = () => {
  modalStore.closeModal(props.modalId);
};

const email = ref("");
const password = ref("");

const login = () => {
  authStore.login(email.value);
  closeModal();
};
</script>

<style scoped>
.app-modal-login__container {
  display: grid;
  gap: 40px;
}

.app-modal-login__header {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
}
h2 {
  font-size: 45px;
  font-weight: 600;
  line-height: 72px;
}

.app-modal-login__header__btn-close {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  padding: 20px;
}

.app-modal-login__section {
  display: grid;
  gap: 24px;
}

.app-modal-login__btn-login {
  /* align-items: center; */
  display: grid;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
}

.app-modal-login__container-log {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  /* margin: 20px; */
}
.app-modal-login__container-log--condition {
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.app-modal-login__container-log--href {
  color: #b1c909;
  background: none;
  padding: 0;
  padding-left: 4px;
}

.app-modal-login__container-log--href:hover {
  color: #9da5af;
  cursor: pointer;
}

@media (max-width: 768px) {
  .app-modal-login__header {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  h2 {
    font-size: 48px;
    line-height: 62px;
    text-align: center;
  }

  .app-modal-login__section {
    gap: 16px;
  }

  .app-modal-login__header__btn-close,
  .app-modal-login__btn-login {
    font-size: 16px;
    line-height: 24px;
    float: none;
    margin: 0 auto;
  }

  input {
    padding: 12px 16px;
    font-size: 16px;
    line-height: 24px;
  }

  .app-modal-login__container-log {
    justify-content: center;
    gap: 16px;
  }
}
</style>
