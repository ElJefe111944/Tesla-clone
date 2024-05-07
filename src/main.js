import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';

// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import './style.css';







import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap';