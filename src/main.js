import Vue from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/vue";
Vue.config.productionTip = false


Sentry.init({
  Vue,
  dsn: "https://4581aa878c696e61652a9baa13d13298@o4506386935775232.ingest.sentry.io/4506386999083008",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


new Vue({
  render: h => h(App),
}).$mount('#app')


