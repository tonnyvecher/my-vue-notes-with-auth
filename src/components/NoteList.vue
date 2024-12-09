<template>
  <div class="notes-page">
    <div class="notes-list">
      <div v-for="note in notesStore.notesList" :key="note.id" class="note">
        <div @click="openEditModal(note)">
          <h4 class="note__name">{{ note.name }}</h4>
          <p class="note__text">{{ note.text }}</p>
        </div>

        <button
          class="note__btn-delete"
          @click="notesStore.deleteNote(note.id)"
        >
          <img
            class="note__btn-delete__img-delete"
            src="/src/images/close.svg"
            alt=""
          />
          Удалить
        </button>
      </div>
    </div>
    <button class="note__btn-add" @click="openNewNoteModal">
      <img class="note__btn-add__image-add" src="/src/images/add.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
import { useModalsStore } from "../stores/modals";
import { useNotesStore } from "../stores/notes";
import EditNoteModal from "./EditNoteModal.vue";
import NewNoteModal from "./NewNoteModal.vue";

const notesStore = useNotesStore();
const modalStore = useModalsStore();

const openNewNoteModal = () => {
  modalStore.createModal(NewNoteModal);
};

const openEditModal = (note) => {
  modalStore.createModal(EditNoteModal, { note });
};
</script>

<style scoped>
.notes-page {
  padding: 20px;
}

/* и вот это менять по макету верстая на мобилки */
.notes-list {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
}

.note {
  display: grid;
  gap: 20px;
  background-color: #b1c909;
  border-radius: 12px 12px 0 12px;
  position: relative;
  padding: 10px;
  clip-path: polygon(0% 0%, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0% 100%);
}

.note::before {
  background-color: #a5bb0c;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 12px;
}
.note__name,
.note__text {
  color: white;
  text-align: left;
  word-break: break-all;
}
.note__name {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  padding: 20px 56px 20px 28px;
}
.note__text {
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  padding: 28px;
  padding-top: 20px;
}

.note__btn-delete {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  justify-self: end;
}

.note__btn-delete__img-delete {
  width: 16px;
  height: 16px;
  padding: 20px 0;
}

.note__btn-add {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  box-shadow: 0px 15px 46px -10px #00000099;
}

@media (max-width: 768px) {
  .notes-page {
    padding: 10px;
  }

  .notes-list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
  }

  .note {
    padding: 16px;
  }

  .note__name {
    font-size: 18px;
    line-height: 24px;
    padding: 12px;
  }

  .note__text {
    font-size: 16px;
    line-height: 24px;
    padding: 12px;
  }

  .note__btn-delete {
    font-size: 16px;
    line-height: 24px;
    /* margin: 0 auto; */
  }

  .note__btn-delete__img-delete {
    width: 12px;
    height: 12px;
    padding: 0;
  }
}

@media (max-width: 360px) {
  .notes-list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
  }
}
</style>
