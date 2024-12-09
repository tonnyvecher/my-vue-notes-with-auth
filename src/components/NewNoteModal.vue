<template>
  <AppModal>
    <div class="note-modal">
      <div class="note-modal__container">
        <header class="note-modal__header">
          <button
            @click="modalStore.closeModal(modalId)"
            class="note-modal__btn-close"
          >
            <img
              class="note-modal__btn-close__img"
              src="/src/images/close.svg"
              alt=""
            />
          </button>
          <h2>Добавление заметки</h2>
        </header>
        <main>
          <section class="note-modal__main">
            <input
              class="note-modal__input-name"
              v-model="name"
              type="text"
              placeholder="Название"
            />
            <textarea
              class="note-modal__input-text"
              v-model="text"
              placeholder="Содержание заметки"
            ></textarea>
          </section>
        </main>
        <footer class="note-modal__container-add">
          <button @click="addNote" class="note-modal__btn-add">Добавить</button>
        </footer>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import { useModalsStore } from "../stores/modals";
import { useNotesStore } from "../stores/notes";

const modalStore = useModalsStore();
const notesStore = useNotesStore();

const props = defineProps(["modalId"]);

const name = ref("");
const text = ref("");

const addNote = () => {
  notesStore.addNote({ name: name.value, text: text.value });
  modalStore.closeModal(props.modalId);
};
</script>

<style scoped>
.note-modal__container {
  display: grid;
  gap: 40px;
}

.note-modal {
}
.note-modal__header {
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
.note-modal__main {
  display: grid;
  gap: 24px;
}

.note-modal__btn-close {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
}

.note-modal__btn-add {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
}

.note-modal__input-name {
  padding: 22.5px 28px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.note-modal__input-text {
  padding: 16px 28px;
  padding-bottom: 201px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.note-modal__container-add {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .note-modal__header {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }

  .note-modal__main {
    gap: 16px;
  }

  .note-modal__btn-close,
  .note-modal__btn-add {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    float: none;
    margin: 0 auto;
  }

  .note-modal__input-name,
  .note-modal__input-text {
    padding: 12px 16px;
    font-size: 16px;
    line-height: 24px;
  }

  .note-modal__input-text {
    padding-bottom: 100px;
  }

  .note-modal__container-add {
    justify-content: center;
    gap: 16px;
  }
}

@media (max-width: 360px) {
  .note-modal__main {
    gap: 16px;
  }
}
</style>
