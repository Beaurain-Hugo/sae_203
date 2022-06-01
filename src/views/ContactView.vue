<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Une question ou une remarque à nous faire ?</h1>
        <h2 class="pt-4 text-2xl">Utilisez le formulaire ci-dessous pour nous contacter !</h2>
      </div>
      <div class="font-radio-canada">
        <form class="mt-4 flex flex-col text-center">
          <label class="mb-2" for="lastname">
            <input class="w-3/5 rounded-lg px-2 py-4" type="text" id="lastname" name="last-name" value="" placeholder="Nom" size="" />
          </label>

          <label class="mb-2">
            <input class="w-3/5 rounded-lg px-2 py-4" type="text" id="firstname" name="first-name" value="" placeholder="Prénom" size="" />
          </label>

          <label class="mb-2" for="email">
            <input
              class="w-3/5 rounded-lg px-2 py-4"
              type="email"
              id="email"
              name="email"
              value=""
              placeholder="E-mail*"
              size=""
              required
            />
          </label>

          <label class="mb-2" for="message">
            <textarea class="w-3/5 rounded-lg px-2 py-4" id="message" name="message" placeholder="Message*" rows="10" required></textarea>
          </label>
          <div class="flex items-center justify-center">
            <input class="" type="checkbox" required />
            <p>J'ai compris et j'accepte⁽²⁾</p>
          </div>
          <button class="mx-auto my-4 rounded-lg bg-red-500 px-4 py-2 text-center text-xl text-white hover:bg-red-750" type="submit">
            Envoyer
          </button>
        </form>
        <div class="m-auto flex w-4/5 flex-col">
          <p>* Champs obligatoires</p>
          <p>
            (2) En communicant mes informations,je consens à être recontacté par voie électronique par l'équipe du festival Gold Rock. Ces
            données seront conservées durant 30 jours afin de pouvoir traiter au mieux ma demande. Je pourrais modifier ou supprimer mes
            informations sur simple demande
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>