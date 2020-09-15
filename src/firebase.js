import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const {
    REACT_APP_API_KEY: apiKey,
    REACT_APP_AUTH_DOMAIN: authDomain,
    REACT_APP_DATABASE_URL: databaseURL,
    REACT_APP_PROJECT_ID: projectId,
    REACT_APP_STORAGE_BUCKET: storageBucket,
    REACT_APP_MESSAGING_SENDER_ID: messagingSenderId,
    REACT_APP_APP_ID: appId,
} = process.env;

const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;