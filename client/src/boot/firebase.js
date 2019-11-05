import Firebase from "firebase/app";
import 'firebase/firestore' // eslint-disable-line
import firebaseConfig from "../../firebase.conf.js";

export default ({ Vue }) => {
  // Initialize Firebase from settings
  Firebase.initializeApp(firebaseConfig);

  Vue.prototype.$firebase = Firebase;
};