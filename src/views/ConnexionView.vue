<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="rounded-md bg-red-200">
        <p class="font-radio-canada">Se connecter</p>
        <form @submit.prevent="onCnx()">
          <div class="">
            <div class="">
              <button class="">Email :</button>
            </div>
            <input type="mail" v-model="user.email" required />
          </div>
          <div>
            <div>
              <button>Mot de passe :</button>
            </div>
            <input type="password" v-model="user.password" required />
          </div>
          <div class="" v-if="message != null">{{ message }}</div>
          <div>
            <button @click="onDcnx()">Deconnexion</button>
            <button type="submit">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>



<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
    };
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user déconnecté", this.user);
          this.message = "User déconnecté";
        })
        .catch((error) => {
          console.log("erreur de déconnexion", error);
        });
    },
  },
};
</script>   
