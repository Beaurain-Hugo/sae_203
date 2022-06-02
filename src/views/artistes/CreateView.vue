<template>
  <div>
    <form @submit.prevent="createArtiste">
      <div>
        <div>
          <p>Création d'artiste</p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <img :src="imageData" alt="" />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span>Nom</span>
                </div>
                <input placeholder="Nom de l'artiste" v-model="artiste.nom" required />
              </div>
              <br />
              <div>
                <div>
                  <span>Prénom</span>
                </div>
                <input placeholder="Prénom de l'artiste" v-model="artiste.prenom" required />
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
                  <span>Schedule</span>
                </div>
                <input type="date" format="dd/mm/yyyy" v-model="artiste.jour" required />
                <input type="time" v-model="artiste.heure" required />
              </div>
              <br />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Créer</button>
          <button><router-link to="/artistes">Annuler</router-link></button>
        </div>
      </div>
    </form>
  </div>
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