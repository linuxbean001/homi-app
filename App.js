import React from 'react';
import Bootstrap from './containers/Bootstrap';
import firebase from 'firebase';

// For testing purposes
firebase.auth().signOut();

export default function App() {
  return (
    <Bootstrap />
  );
}
