import { createApp } from 'vue';
import Button from './components/Button.vue';
import Button2 from './components/Button2.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(Button);
  app.mount('#button');

  const app2 = createApp(Button2);
  app2.mount('#button2');
});
