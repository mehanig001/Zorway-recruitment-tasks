import {getApp,getApps,initializeApp} from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDVyYhAai3XFnVZRijiWRskpkB-lJ6-Ojs",
    authDomain: "manit-cms.firebaseapp.com",
    projectId: "manit-cms",
    storageBucket: "manit-cms.appspot.com",
    messagingSenderId: "940061883707",
    appId: "1:940061883707:web:10a488277d2e336b828b1e"
  };
  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
  export {app};