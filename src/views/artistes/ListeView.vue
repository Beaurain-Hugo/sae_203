<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Les plus grands artistes du rock réunis en une place !</h1>
        <h2 class="pt-4 text-2xl">Et ils sont présents seulement pour vous !</h2>
        <img class="mt-3 h-auto w-full" src="/images/imagine_dragon.jpg" alt="Photographie du groupe Imagine Dragons" />
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex flex-col justify-center pt-4" v-for="artistes in listArtiste" :key="artistes.id">
          <div class="w-2/3 rounded-md border-4 border-red-200 text-center font-radio-canada sm:w-1/4">
            <img class="sm:m-h-32 sm:w-auto" :src="artistes.photo" :alt="artistes.prenom + ' ' + artistes.nom" />
            <p class="font-tapestry text-4xl">{{ artistes.prenom }}</p>
            <p class="font-tapestry text-4xl">{{ artistes.nom }}</p>
            <p class="font-tapestry text-4xl">{{ dateFr(artistes.jour) }}</p>
            <p class="font-tapestry text-4xl">{{ artistes.heure }}</p>
            <span title="Suppression">
              <router-link :to="{ name: 'DeleteArtistes', params: { id: artistes.id } }">
                <i>Supprimer </i>
              </router-link>
            </span>
            <span title="Modification">
              <router-link :to="{ name: 'UpdateArtistes', params: { id: artistes.id } }">
                <i>Modifier</i>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  name: "ListArtistesView",
  data() {
    return {
      listArtiste: [],
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "artistes");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.listArtiste.forEach(function (artistes) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + artistes.photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              artistes.photo = url;
            })
            .catch((error) => {
              console.log("erreur de downloadURL", error);
            });
        });
      });
    },
    dateFr(d) {
      let date = d.split("-");
      return date[2] + "/" + date[1] + "/" + date[0];
    },
  },
};
</script>

