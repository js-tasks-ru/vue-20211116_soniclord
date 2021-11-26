import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent ({
    name: 'Root'
    , data() {
        return {
            count: 0
        }
    }
});

const App = createApp(RootComponent);
const vm = App.mount('#app');