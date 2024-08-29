/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjYjkre7Puddstq-XksYR-L57zvg_gFEU",
  authDomain: "sp-booking-image.firebaseapp.com",
  projectId: "sp-booking-image",
  storageBucket: "sp-booking-image.appspot.com",
  messagingSenderId: "1077386773267",
  appId: "1:1077386773267:web:895d78a49a04a0afe190e6",
};

const app = initializeApp(firebaseConfig);

export const imageUploadDB = getStorage(app);
