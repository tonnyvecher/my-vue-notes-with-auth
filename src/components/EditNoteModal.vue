<template>
  <AppModal>
    <div class="edit-modal">
      <div class="edit-modal__container">
        <header class="edit-modal__header">
          <button
            @click="modalStore.closeModal(modalId)"
            class="edit-modal__btn-close"
          >
            <img
              class="edit-modal__btn-close__img"
              src="/src/images/close.svg"
              alt=""
            />
          </button>
          <h2>Редактировать запись</h2>
        </header>
        <main class="edit-modal__main">
          <input
            class="edit-modal__input-name"
            v-model="name"
            type="text"
            placeholder="Название"
          />
          <textarea
            class="edit-modal__input-text"
            v-model="text"
            placeholder="Содержание заметки"
          ></textarea>
        </main>
        <footer>
          <button @click="editNote" class="edit-modal__btn-add">
            Изменить
          </button>
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

const props = defineProps(["modalId", "note"]);

const name = ref(props.note.name);
const text = ref(props.note.text);

const editNote = () => {
  notesStore.editNote({
    id: props.note.id,
    name: name.value,
    text: text.value,
  });
  modalStore.closeModal(props.modalId);
};
</script>

<style scoped>
.edit-modal__container {
  display: grid;
  gap: 40px;
}

.edit-modal__header {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
}

h2 {
  margin: 0;
}

.edit-modal__main {
  display: grid;
  gap: 24px;
}
.edit-modal__input-name {
  padding: 22.5px 28px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.edit-modal__input-text {
  padding: 16px 28px;
  padding-bottom: 201px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.edit-modal__btn-close {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
}
.edit-modal__btn-add {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  float: right;
  padding: 12px 24px 12px 24px;
}

@media (max-width: 768px) {
  .edit-modal__header {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  h2 {
    margin: 0;
  }

  .edit-modal__main {
    gap: 16px;
    padding: 16px;
  }

  .edit-modal__input-name,
  .edit-modal__input-text {
    padding: 12px 16px;
    font-size: 16px;
    line-height: 24px;
  }

  .edit-modal__input-text {
    padding-bottom: 100px;
  }

  .edit-modal__btn-close,
  .edit-modal__btn-add {
    font-size: 16px;
    line-height: 16px;
    float: none;
    margin: 0 auto;
  }
}
</style>
