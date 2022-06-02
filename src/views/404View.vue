<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">ERREUR 404</h1>
        <h2 class="pt-4 text-xl">Il n'y a rien ici, navré</h2>
      </div>
      <div class="py-4 font-radio-canada">
        <p class="text-center">Vous cherchiez sans doute :</p>
        <div class="flex justify-center pt-2">
          <router-link
            to="/"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Accueil
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/programme"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Programme
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/artistes"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Artistes
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/billetterie"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Billetterie
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/partenaires"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Partenaires
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/contact"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Nous contacter
          </router-link>
        </div>
        <div class="flex justify-center pt-2">
          <router-link
            to="/mentions-legales"
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Mentions légales
          </router-link>
        </div>
      </div>
      <form
        action="https://google.com/"
        method="GET"
        class="flex flex-col"
        x-data="{ q:'', }"
        x-on:submit="q = q + ' site:gold-rock.beaurain-hugo.fr'"
      >
        <label for="q" class="my-4 text-center">Sinon</label>
        <div class="flex justify-center">
          <input class="mb-2 rounded-md" type="text" placeholder="Rechercher" id="q" name="q" x-model="q" />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="flex justify-center rounded-lg bg-red-500 py-2 px-4 text-center text-white hover:bg-red-750 sm:py-4 sm:px-8 sm:text-xl"
          >
            Rechercher
          </button>
        </div>
      </form>
    </div>
  </main>
</template>