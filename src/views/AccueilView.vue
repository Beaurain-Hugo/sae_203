<template>
  <main class="bg-red-50">
    <div>
      <div class="p-8">
        <h1 class="text-center font-tapestry text-3xl">Redécouvrez l'âge d'or du rock du 14 au 17 juillet 2022 à Bordeaux !</h1>
        <h2 class="pt-4 text-center font-tapestry text-2xl">Gold Rock vous présente la première édition de son festival 100% rock !</h2>
        <img class="mt-3 h-auto w-full" src="../../images/foule_concert_exterieur.jpg" alt="Image du concert de jsp" />
      </div>
    </div>

    <div class="py-4 px-8">
      <div>
        <p class="text-center font-radio-canada text-lg font-bold">
          Des années 1970 à nos jours, de nombreuses stars du rock se sont dévoilées...
        </p>
        <p class="py-2 text-center font-radio-canada text-lg font-bold">Et si elles étaient réunies le temps d'un festival ?</p>
      </div>
      <div>
        <p class="text-center font-radio-canada">À l'occasion de cette première édition, nous avons l'honneur d'accueillir :</p>
        <div class="flex flex-col justify-evenly pt-4 sm:flex-row">
          <carteArtistes class="mb-2" rewards="Récompenses" name="Prénom Nom" img="" />
          <carteArtistes class="mb-2" rewards="Récompenses" name="Prénom No" img="" />
          <carteArtistes class="mb-2" rewards="Récompenses" name="Prénom N" img="" />
        </div>
        <div class="flex justify-center pt-3">
          <router-link
            class="rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
            to="/artistes"
            >Découvrir tous les artistes</router-link
          >
        </div>
      </div>
    </div>
    <div class="py-4 px-8 text-center font-radio-canada">
      <h3>L'ouverture du festival se fera avec Prénom Nom à 18h00 aux Parc des Expositions de Bordeaux, 33300 Bordeaux</h3>
      <img class="mt-3 h-auto w-full" src="../../images/parc_expo_bordeaux.jpg" alt="Image de la place du festival" />
      <div class="flex justify-center pt-3">
        <router-link
          class="rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          to="/programme"
          >Découvrir le reste du programme</router-link
        >
      </div>
    </div>
    <div class="py-4 px-8 text-center font-radio-canada">
      <p>N'attendez plus pour réserver vos places !</p>
      <p>Envie de venir tout le festival ou quelques jours seulement ? Trouvez le forfait convenant à votre besoin !</p>
      <div class="flex justify-center pt-3">
        <router-link
          class="rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          to="/billetterie"
          >Réserver</router-link
        >
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