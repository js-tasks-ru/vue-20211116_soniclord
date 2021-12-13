import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupInfo,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      meetup: 1,
      status: 'load',
    };
  },

  watch: {
    meetupId() {
      this.status = 'load';
      fetchMeetupById(this.meetupId).then(
        (meetup) => {
          this.status = 'success';
          this.meetup = meetup;
        },(error) => {
          this.status = error;
      });
    },
  },

  created(){
    fetchMeetupById(this.meetupId).then(
      (meetup) => {
        this.status = 'success';
        this.meetup = meetup;
      },(error) => {
        this.status = 'Test Error';
      });
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup.agenda && status === 'success'" :meetup="meetup"/>

      <ui-container>
        <ui-alert v-if="status === 'load'">Загрузка...</ui-alert>
        <ui-alert v-else> {{ status }}</ui-alert>
      </ui-container>

    </div>`,
});
