import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import BilletterieView from '../views/BilletterieView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import PartenairesView from '../views/PartenairesView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import CreateView from '../views/artistes/CreateView.vue'
import ListeView from '../views/artistes/ListeView.vue'
import UpdateView from '../views/artistes/UpdateView.vue'
import DeleteView from '../views/artistes/DeleteView.vue'
import Page404View from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/billetterie', name: 'Billetterie', component: BilletterieView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/partenaires', name: 'Partenaires', component: PartenairesView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegalesView },
    { path: '/connexion', name: 'Connexion', component: ConnexionView },
    { path: '/artistes/create', name: 'CreateArtistes', component: CreateView },
    { path: '/artistes/liste', name: 'ListeArtistes', component: ListeView },
    { path: '/artistes/update/:id', name: 'UpdateArtistes', component: UpdateView },
    { path: '/artistes/delete/:id', name: 'DeleteArtistes', component: DeleteView },
    { path: '/:pathMatch(.*)*', name: 'page404View', component: Page404View },
    // ici les autre routes
  ]
})

export default router
