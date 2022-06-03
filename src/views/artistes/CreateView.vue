<template>
  <main class="bg-red-50">
    <div class="p-8">
      <form @submit.prevent="createArtiste">
        <div>
          <div>
            <p class="font-tapestry text-3xl">Création d'artiste</p>
          </div>
          <div class="font-radio-canada">
            <div>
              <div>
                <div class="pt-4">
                  <input class="rounded-lg p-1" placeholder="Prénom de l'artiste" v-model="artiste.prenom" required />
                </div>
                <br />
                <div>
                  <input class="rounded-lg p-1" placeholder="Nom de l'artiste" v-model="artiste.nom" required />
                </div>
                <br />
                <div class="flex flex-col sm:flex-row">
                  <div>
                    <span>Photo</span>
                  </div>
                  <div>
                    <input type="file" ref="file" id="file" @change="previewImage" />
                  </div>
                  <div>
                    <div>
                      <img class="h-auto w-60 rounded-lg" :src="imageData" alt="" />
                    </div>
                  </div>
                </div>
                <br />
                <div class="">
                  <div>
                    <span>Date et heure</span>
                  </div>
                  <input class="rounded-lg p-1" type="date" format="dd/mm/yyyy" v-model="artiste.jour" required />
                  <input class="rounded-lg p-1" type="time" v-model="artiste.heure" required />
                </div>
                <br />
              </div>
            </div>
          </div>
          <div>
            <button class="rounded-lg bg-red-500 py-1 px-2 text-white hover:bg-red-750" type="submit">Créer</button>
            <button class="rounded-lg border-2 border-red-200 py-1 px-1 text-red-500 hover:border-red-400 hover:text-red-750">
              <router-link to="/artistes">Annuler</router-link>
            </button>
          </div>
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
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {
  name: "CreateArtistes",
  data() {
    return {
      imageData: null,
      listArt: [],
      artiste: {
        nom: null,
        prenom: null,
        photo: null,
        jour: null,
        heure: null,
      },
    };
  },
  mounted() {},
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.photo = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createArtiste() {
      const storage = getStorage();
      const refStorage = ref(storage, "artistes/" + this.artiste.photo);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artistes"), this.artiste);
      });
      this.$router.push("/artistes");
    },
  },
};
</script>