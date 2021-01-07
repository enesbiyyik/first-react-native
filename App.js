/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle= "default" />
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
  },
  box1: {
    backgroundColor: 'aquamarine',
    width: 300,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  box2: {
    backgroundColor: 'pink',
    width: 300,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
  }
});

export default App;
