<template>
  <main class="bg-red-50">
    <div class="p-8">
      <div>
        <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
          <div>
            <div>
              <p>Mise à jour des artistes</p>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <img :src="imageData" />
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <span>Nom</span>
                    </div>
                    <input placeholder="Nom de la personne" v-model="artiste.nom" required />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Prénom</span>
                    </div>
                    <input placeholder="Prénom de la personne" v-model="artiste.prenom" required />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Photo</span>
                    </div>
                    <div>
                      <input type="file" ref="file" id="file" @change="previewImage" />
                      <label for="file">Sélectionner l'image</label>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Jour</span>
                    </div>
                    <input type="date" required v-model="artiste.jour" format="dd/mm/yyyy" />
                  </div>
                  <br />
                  <div>
                    <div>
                      <span>Heure</span>
                    </div>
                    <input type="time" required v-model="artiste.heure" />
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-evenly">
            <button class="rounded-lg bg-red-500 py-1 px-2 text-white hover:bg-red-750" type="submit">Modifier</button>
            <button class="rounded-lg border-2 border-red-200 py-1 px-1 text-red-500 hover:border-red-400 hover:text-red-750">
              <router-link to="/artistes/liste">Annuler</router-link>
            </button>
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
  name: "UpdateArtistesView",
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
      refArtiste: null,
      imgModifiee: false,
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
      console.log("artiste", this.refArtiste);
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadURL", error);
        });
    },
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.photo = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async updateArtiste() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artistes/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artistes/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artiste);
      this.$router.push("/artistes/liste");
    },
  },
};
</script>