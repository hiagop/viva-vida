import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "../../firebase.conf.js";

Firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();

// export default ({ Vue }) => {
//   // Initialize Firebase from settings
//   Firebase.initializeApp(firebaseConfig);

//   const Auth = Firebase.auth();

//   Vue.prototype.$auth = Auth;
//   Vue.prototype.$firebase = Firebase;
// };
