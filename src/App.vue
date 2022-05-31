<template>
  <header class="bg-gray-700 py-3">
    <nav class="flex hidden flex-initial flex-wrap justify-center justify-between gap-2 sm:flex">
      <ul class="flex text-gray-300">
        <li class="pl-2 font-radio-canada"><router-link to="/">Accueil</router-link></li>
        <li class="pl-2 font-radio-canada"><router-link to="/programme">Programme</router-link></li>
        <li class="pl-2 font-radio-canada"><router-link to="/billetterie">Billetterie</router-link></li>
        <li class="pl-2 font-radio-canada"><router-link to="/artistes">Artistes</router-link></li>
        <li class="pl-2 font-radio-canada"><router-link to="/partenaires">Partenaires</router-link></li>
      </ul>
      <ul class="flex">
        <li class="pr-2 font-radio-canada">
          <router-link to="#" class="rounded-lg bg-red-500 py-1 px-2 text-white">SE CONNECTER</router-link>
        </li>
        <li class="pr-2 font-radio-canada">
          <router-link to="#" class="rounded-lg border-2 border-red-200 py-1 px-2 text-red-500">S'INSCRIRE</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex justify-between">
      <button class="relative z-50 text-xl sm:hidden">
        <MenuIcon class="w- h-10" />
        <span class="sr-only">Menu</span>
      </button>
      <button
        class="relative text-xl text-gray-300 sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <MenuIcon class="w- h-10" />
      </button>
    </div>
    <div
      id="menu"
      class="
        fixed
        inset-0
        flex
        translate-x-full
        flex-col
        justify-center
        bg-gray-700
        motion-safe:transition-transform motion-safe:duration-1000
      "
      :class="{ 'translate-x-0': menuOuvert }"
    >
      <button
        class="absolute top-3 right-0 text-xl text-gray-300 sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <XIcon class="h-10 w-10" />
      </button>
      <nav>
        <ul class="text-center text-gray-300">
          <li class="my-4 font-radio-canada"><router-link to="/">Accueil</router-link></li>
          <li class="my-4 font-radio-canada"><router-link to="/programme">Programme</router-link></li>
          <li class="my-4 font-radio-canada"><router-link to="/billetterie">Billetterie</router-link></li>
          <li class="my-4 font-radio-canada"><router-link to="/artistes">Artistes</router-link></li>
          <li class="my-4 font-radio-canada"><router-link to="/partenaires">Partenaires</router-link></li>
        </ul>
        <ul class="text-center">
          <li class="mb-4 font-radio-canada">
            <router-link to="#" class="rounded-lg bg-red-500 py-1 px-2 text-white">SE CONNECTER</router-link>
          </li>
          <li class="mt-6 font-radio-canada">
            <router-link to="#" class="rounded-lg border-2 border-red-200 py-1 px-2 text-red-500">S'INSCRIRE</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="bg-red-500 py-6">
    <nav>
      <ul class="flex hidden justify-around sm:flex">
        <li class="font-radio-canada"><router-link to="/programme">Programme</router-link></li>
        <li class="font-radio-canada"><router-link to="/billetterie">Billetterie</router-link></li>
        <li class="font-radio-canada"><router-link to="/artistes">Artistes</router-link></li>
        <li class="font-radio-canada"><router-link to="/partenaires">Partenaires</router-link></li>
        <li class="font-radio-canada"><router-link to="/contact">Nous contacter</router-link></li>
        <li class="font-radio-canada"><router-link to="/mentions-legales">Mentions légales</router-link></li>
      </ul>
    </nav>
    <nav class="sm:hidden">
      <ul class="flex flex-col flex-wrap text-center">
        <li class="my-2 font-radio-canada"><router-link to="/programme">Programme</router-link></li>
        <li class="my-2 font-radio-canada"><router-link to="/billetterie">Billetterie</router-link></li>
        <li class="my-2 font-radio-canada"><router-link to="/artistes">Artistes</router-link></li>
        <li class="my-2 font-radio-canada"><router-link to="/partenaires">Partenaires</router-link></li>
        <li class="my-2 font-radio-canada"><router-link to="/contact">Nous contacter</router-link></li>
        <li class="my-2 font-radio-canada"><router-link to="/mentions-legales">Mentions légales</router-link></li>
      </ul>
    </nav>
    <div class="pt-4">
      <p class="mx-8 flex justify-center pb-2 text-center font-radio-canada">
        Pour être à jour sur nos actualités, abonnez-vous à notre newsletter !
      </p>
      <form class="flex flex-col text-center">
        <label class="mb-2"><input class="w-3/5 rounded-lg px-2 py-4" type="text" placeholder="Insérez votre nom" /></label>
        <label class="mb-2"><input class="w-3/5 rounded-lg px-2 py-4" type="email" placeholder="Insérez votre email" /></label>
        <button class="mx-auto rounded-lg border-2 border-red-200 py-1 px-2 font-radio-canada text-black" type="submit">Envoyer</button>
      </form>
    </div>
    <div class="flex justify-center pt-4">
      <p class="mx-8 text-center font-radio-canada">Suivez-nous sur nos réseaux sociaux pour plus de rock !</p>
    </div>
    <div class="flex justify-around pt-2">
      <a href="#"><twitter class="h-10 w-10" /></a>
      <a href="#"><instagram class="h-10 w-10" /></a>
      <a href="#"><facebook class="h-10 w-10" /></a>
    </div>
  </footer>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
import twitter from "./components/icons/TwitterView.vue";
import instagram from "./components/icons/InstagramView.vue";
import facebook from "./components/icons/FacebookView.vue";
export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
  components: { MenuIcon, XIcon, twitter, instagram, facebook },
};
</script>