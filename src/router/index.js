import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import BilletterieView from '../views/BilletterieView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import PartenairesView from '../views/PartenairesView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/billetterie', name: 'Billetterie', component: BilletterieView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/partenaires', name: 'Partenaires', component: PartenairesView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentions-legales', name: 'MentionsLegalse', component: MentionsLegalesView },
    // ici les autre routes
  ]
})

export default router
