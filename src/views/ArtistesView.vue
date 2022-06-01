<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Les plus grands artistes du rock réunis en une place !</h1>
        <h2 class="pt-4 text-2xl">Et ils sont présents seulement pour vous !</h2>
        <img class="mt-3 h-auto w-full" src="../../images/imagine_dragon.jpg" alt="Photographie du groupe Imagine Dragons" />
      </div>
      <div class="mt-5 text-center">
        <p class="font-radio-canada text-xl">Vendredi 15 juillet</p>
        <div class="flex flex-col justify-evenly pt-4 sm:flex-row">
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom Nom" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom No" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom N" img="" />
        </div>
      </div>
      <div class="mt-5 text-center">
        <p class="font-radio-canada text-xl">Samedi 16 juillet</p>
        <div class="flex flex-col justify-evenly pt-4 sm:flex-row">
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom Nom" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom No" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom N" img="" />
        </div>
        <div class="flex flex-col justify-evenly sm:flex-row">
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom Nom" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom No" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom N" img="" />
        </div>
      </div>
      <div class="mt-5 text-center">
        <p class="font-radio-canada text-xl">Dimanche 17 juillet</p>
        <div class="flex flex-col justify-evenly pt-4 sm:flex-row">
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom Nom" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom No" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom N" img="" />
        </div>
        <div class="flex flex-col justify-evenly sm:flex-row">
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom Nom" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom No" img="" />
          <carteArtistes class="m-auto mb-2" schedule="Date et heure" name="Prénom N" img="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import carteArtistes from "../components/CarteArtistes.vue";

export default {
  components: { carteArtistes },
};
</script>