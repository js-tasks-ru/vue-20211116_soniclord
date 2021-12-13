import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    date: {
      type: Number,
      require: true,
    },
    organizer: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
  },

  methods: {
    convertDateFull(timestamp) {
      let date = new Date(timestamp);
      return date.toLocaleDateString(navigator.language, { year: 'numeric', month: 'long', day: 'numeric' });
    },
    convertDateShort(timestamp) {
      return new Date(timestamp).toISOString().substr(0, 10);
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="convertDateShort(date)">{{ convertDateFull(date) }}</time>
      </li>
    </ul>`,
});
