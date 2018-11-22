import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCltQAED7kw9fS9Aqi0Xs3J25k-qcVmA5w",
  authDomain: "cryptopandore-1.firebaseapp.com",
  databaseURL: "https://cryptopandore-1.firebaseio.com",
  projectId: "cryptopandore-1",
  storageBucket: "cryptopandore-1.appspot.com",
  messagingSenderId: "780098589988"
  };

const db = Firebase.initializeApp(config);
db.firestore().settings({ timestampsInSnapshots: true})

export default db.firestore()



