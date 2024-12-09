import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const storageKeyUser = "user";
  const initialUser = JSON.parse(localStorage.getItem(storageKeyUser)) || null;
  const user = ref(initialUser);

  const router = useRouter();

  const storageKey = "userList";
  const initialUsersList = JSON.parse(localStorage.getItem(storageKey)) || [];
  const usersList = ref(initialUsersList);

  const login = (email) => {
    const isValid = usersList.value.includes(email);
    if (isValid) {
      user.value = { email };
      router.replace("/");
    }
  };

  const logout = () => {
    user.value = null;
    router.replace("/login");
  };

  const registration = (user) => {
    usersList.value.push(user);
  };

  watch(
    () => usersList.value,
    (newUserList) => {
      localStorage.setItem(storageKey, JSON.stringify(newUserList));
    },
    { deep: true }
  );

  watch(
    () => user.value,
    (newUser) => {
      localStorage.setItem(storageKeyUser, JSON.stringify(newUser));
    },
    { deep: true }
  );

  return { user, login, logout, registration };
});
