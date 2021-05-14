import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { writable } from "svelte/store";

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();

export const authUI = new firebaseui.auth.AuthUI(auth);
export const authUIConfig: firebaseui.auth.Config = {
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const authenticatedUser = writable(null);
auth.onAuthStateChanged((user) => {
  authenticatedUser.set(user);
});
