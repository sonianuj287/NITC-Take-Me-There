import React, { useState } from 'react';
import navigator from './Navigation/DashNavigator';
import opencage from 'opencage-api-client';

import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import DashNavigator from './Navigation/DashNavigator';

export default function App() {
  return (
  <DashNavigator/>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
