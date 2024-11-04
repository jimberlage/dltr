<template>
  <p-button variant="destructive" @click="onClick">
    Delete
  </p-button>
  <confirm-delete-modal @delete="onDelete" @update:showModal="onUpdateShowModal" :showModal="shouldShow" name="foo"></confirm-delete-modal>
</template>

<script lang="ts" setup>
  import { ConfirmDeleteModal } from '@prefecthq/prefect-ui-library';
  import { ref } from 'vue';

  const shouldShow = ref(false);

  const onUpdateShowModal = (shouldNowShow: boolean) => {
    shouldShow.value = shouldNowShow;
  }

  const onClick = () => {
    onUpdateShowModal(true);
  }

  const onDelete = () => {
    // TODO: Something more interesting
    console.log("Deleted");

    onUpdateShowModal(false);
  }
</script>
