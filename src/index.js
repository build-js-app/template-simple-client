import Vue from 'vue';

import App from './components/App';

import '../node_modules/toastr/build/toastr.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
