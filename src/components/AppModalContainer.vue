<template>
  <Teleport to="body">
    <component
      v-for="modal in modalStore.modals"
      :is="modal.component"
      v-bind="{ modalId: modal.id, ...modal.props }"
    />
  </Teleport>
</template>

<script setup>
import { useModalsStore } from "../stores/modals";

const modalStore = useModalsStore();
</script>
