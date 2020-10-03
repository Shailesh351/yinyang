import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import YinYang from './YinYang';

const App = () => {
  console.log('Shell');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <YinYang size={300} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
