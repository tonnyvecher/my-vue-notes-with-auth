import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

export const useNotesStore = defineStore("notes", () => {
  const storageKey = "notesList";
  const initialNotesList = JSON.parse(localStorage.getItem(storageKey)) || [];

  const notesList = ref(initialNotesList);

  // в note хранится объект {name: "", text: ""}
  const addNote = (note) => {
    notesList.value.push({ id: crypto.randomUUID(), ...note });
  };

  // в note хранится объект {name: "", text: "", id: ...}
  const editNote = (note) => {
    notesList.value = notesList.value.map((item) => {
      if (item.id === note.id) {
        return { ...item, ...note };
      }
      return item;
    });
  };

  const deleteNote = (id) => {
    notesList.value = notesList.value.filter((item) => item.id !== id);
  };

  watch(
    () => notesList.value,
    (newNotesList) => {
      localStorage.setItem(storageKey, JSON.stringify(newNotesList));
    },
    { deep: true }
  );
  return { notesList, addNote, editNote, deleteNote };
});
