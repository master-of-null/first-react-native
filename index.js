// Import a library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
