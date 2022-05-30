<template>
  <header class="bg-gray-700 py-3">
    <nav class="flex hidden flex-initial flex-wrap justify-center justify-between gap-2 sm:flex">
      <ul class="flex text-gray-300">
        <li class="pl-2"><router-link to="/">Accueil</router-link></li>
        <li class="pl-2"><router-link to="/programme">Programme</router-link></li>
        <li class="pl-2"><router-link to="/billetterie">Billetterie</router-link></li>
        <li class="pl-2"><router-link to="/artistes">Artistes</router-link></li>
        <li class="pl-2"><router-link to="/partenaires">Partenaires</router-link></li>
      </ul>
      <ul class="flex">
        <li class="pr-2"><router-link to="#" class="rounded-lg bg-red-500 py-1 px-2 text-white">SE CONNECTER</router-link></li>
        <li class="pr-2"><router-link to="#" class="rounded-lg border-2 border-red-200 py-1 px-2 text-red-500">S'INSCRIRE</router-link></li>
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
        items-center
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
        <XIcon class="w- h-10" />
      </button>
      <nav>
        <ul class="text-center text-gray-300">
          <li class="my-4"><router-link to="/">Accueil</router-link></li>
          <li class="my-4"><router-link to="/programme">Programme</router-link></li>
          <li class="my-4"><router-link to="/billetterie">Billetterie</router-link></li>
          <li class="my-4"><router-link to="/artistes">Artistes</router-link></li>
          <li class="my-4"><router-link to="/partenaires">Partenaires</router-link></li>
        </ul>
        <ul class="text-center">
          <li class="mb-4"><router-link to="#" class="rounded-lg bg-red-500 py-1 px-2 text-white">SE CONNECTER</router-link></li>
          <li class="mt-6">
            <router-link to="#" class="rounded-lg border-2 border-red-200 py-1 px-2 text-red-500">S'INSCRIRE</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer></footer>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
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
  components: { MenuIcon, XIcon },
};
</script>