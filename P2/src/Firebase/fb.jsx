import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNI2oP3e4-isUuVoaUQ1bzoSx1_8Jfuvk',
  authDomain: 'p2web-a3b34.firebaseapp.com',
  projectId: 'p2web-a3b34',
  storageBucket: 'p2web-a3b34.appspot.com',
  messagingSenderId: '1084005413432',
  appId: '1:1084005413432:web:c9563babc67423a7ba6ccd',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
