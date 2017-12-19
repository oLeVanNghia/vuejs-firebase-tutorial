import firebase from 'firebase'

// must to refatoring
let config = {
  apiKey: 'AIzaSyBla4gbUAFfIUat5ex0RNerXWK6AFQzigI',
  authDomain: 'vuejs-demo-f96a5.firebaseapp.com',
  databaseURL: 'https://vuejs-demo-f96a5.firebaseio.com',
  projectId: 'vuejs-demo-f96a5',
  storageBucket: 'vuejs-demo-f96a5.appspot.com',
  messagingSenderId: '124976088728'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
