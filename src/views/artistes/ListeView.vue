<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="flex flex-col pt-4" v-for="art in listArt" :key="art.id">
        <img :src="personne.photo" :alt="art.prenom + ' ' + art.nom" />
        <p class="font-tapestry text-4xl">{{ art.nom }}</p>
        <p class="font-tapestry text-4xl">{{ art.prenom }}</p>
        <p class="font-tapestry text-4xl">{{ dateFr(art.jour) }}</p>
        <p class="font-tapestry text-4xl">{{ art.heure }}</p>
        <span title="Suppression">
          <router-link :to="{ name: 'DeleteArtiste', params: { id: part.id } }">
            <i></i>
          </router-link>
        </span>
        <span title="Modification">
          <router-link :to="{ name: 'UpdateArtistes', params: { id: part.id } }">
            <i></i>
          </router-link>
        </span>
      </div>
    </div>
    <table class="table">
      <tbody class="table-auto">
        <tr v-for="art in listArt" :key="art.id">
          <td>
            <img :src="art.photo" :alt="art.prenom + '' + art.nom" />
          </td>
          <td>
            <b>{{ art.nom }}</b>
          </td>
          <td>{{ art.prenom }}</td>
          <td>{{ dateFr(art.jour) }}</td>
          <td>{{ art.heure }}</td>
        </tr>
      </tbody>
    </table>
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
        this.listArtiste.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + personne.photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.photo = url;
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

