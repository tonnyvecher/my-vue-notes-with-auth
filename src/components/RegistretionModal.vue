<template>
  <AppModal>
    <div class="reg-modal__container">
      <header class="reg-modal__header">
        <button
          class="reg-modal__header__btn-close"
          @click="modalStore.closeModal(modalId)"
        >
          <img
            class="reg-modal__header__img"
            src="/src/images/close.svg"
            alt=""
          />
        </button>
        <h2 class="reg-modal__header__h2">Регистрация</h2>
      </header>

      <section class="reg-modal__section">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Новый пароль" />
        <input
          v-model="repeatPassword"
          type="password"
          placeholder="Подтвердите пароль"
        />
      </section>

      <footer class="reg-modal__footer">
        <p class="reg-modal__footer-return">
          У вас есть аккаунт?
          <button
            class="reg-modal__footer-return--href"
            @click="modalStore.closeModal(modalId)"
          >
            Войдите
          </button>
        </p>

        <button
          class="reg-modal__btn-reg"
          @click="registration"
          :disabled="!email"
        >
          Зарегистрироваться
        </button>
      </footer>
    </div>
  </AppModal>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useModalsStore } from "../stores/modals";
import AppModal from "./AppModal.vue";
import LoginModal from "./LoginModal.vue";

const modalStore = useModalsStore();
const authStore = useAuthStore();
const props = defineProps(["modalId"]);

const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const registration = () => {
  authStore.registration(email.value);
  modalStore.closeModal(props.modalId);
};
</script>

<style scoped>
.reg-modal__container {
  display: grid;
  gap: 40px;
}

.reg-modal__header {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
}
.reg-modal__header__h2 {
  font-size: 45px;
  font-weight: 600;
  line-height: 72px;
}

.reg-modal__section {
  display: grid;
  gap: 24px;
}
.reg-modal__header__img {
  /* width: 16px;
  height: 16px;
  border: 2px; */
}
.reg-modal__header__btn-close {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  padding: 20px;
}

.reg-modal__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
}
.reg-modal__btn-reg {
  display: grid;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
}

.reg-modal__footer-return {
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.reg-modal__footer-return--href {
  color: #b1c909;
  background: none;
  padding: 0;
  padding-left: 4px;
}
.reg-modal__footer-return--href:hover {
  color: #9da5af;
  cursor: pointer;
}

@media (max-width: 768px) {
  .reg-modal__header {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .reg-modal__header__h2 {
    font-size: 48px;
    line-height: 72px;
    text-align: center;
  }

  .reg-modal__header__btn-close {
    font-size: 16px;
    margin: 0 auto;
  }

  .reg-modal__section {
    gap: 16px;
    padding: 16px;
  }

  .reg-modal__footer {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .reg-modal__btn-reg {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    float: none;
    margin: 0 auto;
  }

  .reg-modal__footer-return {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
