<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Choisissez le forfait correspondant à votre envie !</h1>
      </div>
      <div class="flex flex-col py-4 sm:flex-row sm:justify-around">
        <forfait class="m-auto mb-2" text="1 JOUR" prix="40€" />
        <forfait class="m-auto mb-2" text="2 JOUR" prix="65€" />
        <forfait class="m-auto mb-2" text="3 JOUR" prix="85€" />
      </div>
      <div class="flex justify-center pt-4">
        <form>
          <button class="rounded-lg bg-red-500 py-4 px-8 text-center text-xl text-white hover:bg-red-750" type="submit">Réserver</button>
        </form>
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