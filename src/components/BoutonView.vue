<template>
  <router-link class="rounded-lg bg-red-500 py-1 px-2 text-center text-white" to="/">{{ texte }}</router-link>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>