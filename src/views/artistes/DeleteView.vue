<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div>
        <form enctype="multipart/form-date" @submit.prevent="deleteArtiste">
          <div>
            <div>
              <p>Suppression d'un participant</p>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <img :src="photoActuelle" />
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <span>Nom</span>
                    </div>
                    <input placeholder="Nom de la personne" v-model="artiste.nom" disabled />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Prénom</span>
                    </div>
                    <input placeholder="Prénom de la personne" v-model="artiste.prenom" disabled />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Jour</span>
                    </div>
                    <input type="date" v-model="artiste.jour" format="dd/mm/yyyy" disabled />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Heure</span>
                    </div>
                    <input type="time" v-model="artiste.heure" disabled />
                  </div>
                  <br />
                </div>
                <br />
                <p>Attention vous allez supprimer cet artiste, cette action est irréversible !</p>
              </div>
              <div class="flex justify-evenly">
                <button class="rounded-lg bg-red-500 py-1 px-2 text-white hover:bg-red-750" type="submit">Supprimer</button>
                <button class="rounded-lg border-2 border-red-200 py-1 px-1 text-red-500 hover:border-red-400 hover:text-red-750">
                  <router-link to="/artistes">Annuler</router-link>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  name: "DeleteView",
  data() {
    return {
      artiste: {
        nom: null,
        prenom: null,
        photo: null,
        jour: null,
        heure: null,
      },

      refArtiste: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("Artiste inexistant");
      }

      const storage = getStorage();
      const spaceRef = ref(storage, "artistes/" + this.artiste.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadURL", error);
        });
    },

    async deleteArtiste() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artistes/" + this.artiste.photo);
      deleteObject(docRef);
      this.$router.push("/artistes/liste");
    },
  },
};
</script>