<template>
  <main class="bg-red-50">
    <div class="p-8 text-center font-tapestry">
      <h1 class="text-3xl">Ce festival n'existerait pas sans nos partenaires !</h1>
      <h2 class="pt-4 text-2xl">Un grand merci à eux qui ont acceptés de nous faire confiance !</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Desc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="part in listPart" :key="part.id">
          <td>{{ part.id }}</td>
          <td>{{ part.nom }}</td>
          <td>{{ part.desc }}</td>
          <td>
            <!--<input type="text" v-model="part.nom" /> -->
          </td>
          <td>
            <button @click.prevent="updatePart(part)">
              <i></i>
            </button>
          </td>
          <button @click.prevent="deletePart(part)">
            <i></i>
          </button>
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
  },
};
</script>