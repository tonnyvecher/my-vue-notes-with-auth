import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";

export const useModalsStore = defineStore("modals", () => {
  const modals = shallowRef([]);

  const createModal = (modal, props) => {
    modals.value = [
      ...modals.value,
      { id: Math.random(), component: modal, props },
    ];
  };

  const closeModal = (id) => {
    modals.value = modals.value.filter((modal) => modal.id !== id);
  };

  const closeAllModals = () => (modals.value = []);

  return { modals, createModal, closeModal, closeAllModals };
});
