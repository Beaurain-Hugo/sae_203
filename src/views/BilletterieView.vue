<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Choisissez le forfait correspondant à votre envie !</h1>
      </div>
    </div>
  </main>
</template>

<script>
import forfait from "../components/ForfaitView.vue";

export default {
  components: { forfait },
};
</script>