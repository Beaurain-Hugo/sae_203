<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div class="text-center font-tapestry">
        <h1 class="text-3xl">Ce festival n'existerait pas sans nos partenaires !</h1>
        <h2 class="pt-4 text-2xl">Un grand merci à eux qui ont acceptés de nous faire confiance !</h2>
      </div>

      <div class="flex flex-col pt-4" v-for="part in listPart" :key="part.id">
        <p class="font-tapestry text-4xl"><input type="text" v-model="part.nom" /></p>
        <p class="font-radio-canada text-xl"><input type="text" v-model="part.desc" /></p>

        <button type="button" @click.prevent="updatePart(part)" title="Modification"><i>Modifier</i></button>
        <button type="button" @click.prevent="deletePart(part)" title="Suppression"><i>Supprimer</i></button>
      </div>
      <form action="">
        <p>Nouveau partenaire</p>
        <div>
          <div><span>Nom</span></div>
          <input type="text" v-model="nom" required />
          <div><span>Description</span></div>

          <input type="text" v-model="desc" required />
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
      listePart: [],
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
    },
  },
};
</script>