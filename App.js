import React from 'react';
import { StyleSheet } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Subscription from './src/components/Subscription/Subscription';

const App = () => {
  setTimeout(() => {
    RNBootSplash.hide();
  }, 2000);

  return (
    <>
      <Subscription />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});