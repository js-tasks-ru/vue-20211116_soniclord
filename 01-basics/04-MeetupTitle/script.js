import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const RootComponent = defineComponent ({
  name: 'Root'
  , data() {
    return {
      meetupId: null
      , meetupTitle: null
    }
  }
  , watch: {
    meetupId() {
      fetchMeetupById(this.meetupId).then((meetup) => {
        this.meetupTitle = meetup.title;
      });
    }
  }
});

const App = createApp(RootComponent);
const vm = App.mount('#app');