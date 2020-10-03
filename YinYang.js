import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const size = 300;

const YinYang = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.middle}>
          <View style={styles.middleWhite}>
            <View style={styles.innerBlack} />
          </View>
          <View style={styles.middleBlack}>
            <View style={styles.innerWhite} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outer: {
    width: size,
    height: size,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: size / 2,
    overflow: 'hidden',
  },
  black: {
    flex: 1,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  white: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  middle: {
    flex: 1,
    height: size / 2,
    position: 'absolute',
    top: size / 4,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  middleWhite: {
    width: size / 2,
    backgroundColor: 'white',
    borderRadius: size / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBlack: {
    width: size / 8,
    height: size / 8,
    borderRadius: size,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  middleBlack: {
    width: size / 2,
    backgroundColor: 'black',
    borderRadius: size / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWhite: {
    width: size / 8,
    height: size / 8,
    borderRadius: size,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});

export default YinYang;
