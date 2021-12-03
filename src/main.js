import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'; 
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDewhwZcwmfYLgcrewgCHKfMs-XnRXk9Nc",
  authDomain: "linect-bc1f0.firebaseapp.com",
  projectId: "linect-bc1f0",
  storageBucket: "linect-bc1f0.appspot.com",
  messagingSenderId: "518504299720",
  appId: "1:518504299720:web:7d02150e2102c36bceb9fd",
  measurementId: "G-D003ZZN26B"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  app,
  firebase,
  render: h => h(App)
}).$mount('#app')

