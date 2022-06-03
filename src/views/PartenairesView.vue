<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Ce festival n'existerait pas sans nos partenaires !</h1>
        <h2 class="pt-4 text-2xl">Un grand merci à eux qui ont acceptés de nous faire confiance !</h2>
      </div>

      <div class="flex flex-col pt-4" v-for="part in listPart" :key="part.id">
        <p class="font-tapestry text-4xl"><input class="rounded-lg p-1" type="text" v-model="part.nom" /></p>
        <p class="font-radio-canada text-xl"><textarea class="h-10 w-full rounded-lg p-1" row="10px" type="text" v-model="part.desc" /></p>
        <div class="flex justify-around">
          <button
            class="rounded-lg bg-red-500 py-1 px-2 text-white hover:bg-red-750"
            type="button"
            @click.prevent="updatePart(part)"
            title="Modification"
          >
            <i>Modifier</i>
          </button>
          <button
            class="rounded-lg border-2 border-red-200 py-1 px-2 text-red-500 hover:border-red-400 hover:text-red-750"
            type="button"
            @click.prevent="deletePart(part)"
            title="Suppression"
          >
            <i>Supprimer</i>
          </button>
        </div>
      </div>
      <form action="">
        <p>Nouveau partenaire</p>
        <div class="flex flex-col">
          <input type="text" placeholder="Insérer le nom" v-model="nom" required />
          <input type="text" placeholder="Insérer la description" v-model="desc" required />
          <button type="button" @click="createPart()" title="Création"><i>Créer</i></button>
        </div>
      </form>
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
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
export default {
  data() {
    return {
      nom: null,
      listPart: [],
    };
  },
  mounted() {
    this.getPart();
  },
  methods: {
    async getPart() {
      const firestore = getFirestore();
      const dbPart = collection(firestore, "partenaires");
      const query = await onSnapshot(dbPart, (snapshot) => {
        this.listPart = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async createPart() {
      const firestore = getFirestore();
      const dbPart = collection(firestore, "partenaires");
      const docRef = await addDoc(dbPart, {
        nom: this.nom,
        desc: this.desc,
      });
      console.log("document crée avec le id : ", docRef.id);
    },
    async updatePart(part) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "partenaires", part.id);
      await updateDoc(docRef, {
        nom: part.nom,
        desc: part.desc,
      });
      console.log("document modifié", docRef.id);
    },
    async deletePart(part) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "partenaires", part.id);
      await deleteDoc(docRef);
      console.log("document supprimé", docRef.id);
    },
  },
};
</script>