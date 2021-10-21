import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { Navigation } from './Navigation/Navigation';

export default function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
