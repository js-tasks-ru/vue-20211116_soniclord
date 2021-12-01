import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Создайте Vue приложение
const RootComponent = defineComponent ({
  name: 'Root'
  , data() {
      return {
        emails: emails
        , filter: {
          search: ''
        }
      }
  }
  , computed: {
    filterEmails() {
      let all = {};
      this.emails.forEach(element => {       
        all[element] = {
          marked : this.filter.search && element.toLowerCase().indexOf(this.filter.search.toLowerCase()) > -1
          , email: element
        }    
      });
      
      return all;
    }
  }  
});

const App = createApp(RootComponent);
const vm = App.mount('#app');