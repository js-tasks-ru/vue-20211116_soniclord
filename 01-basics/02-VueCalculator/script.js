import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent ({
    name: 'Root'
    , data() {
        return {
            number1: 0
            , number2: 0
            , operation: ""
        }
    }
    , computed: {
        result() {
            var n1 = this.number1;
            var n2 = this.number2;
            
            switch(this.operation) {
            case "sum":
                return n1 + n2;
                break;
            case "subtract":
                return n1 - n2;
                break;
            case "multiply":
                return n1 * n2;
                break;
            case "divide":
                return n1 / n2;
            }
        }
      }
});

const App = createApp(RootComponent);
const vm = App.mount('#app');