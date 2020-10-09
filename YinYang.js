import React from 'react';
import {View} from 'react-native';

const YinYang = (props) => {
  const styles = yinYangStyles(props.size || 1);
  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.middle}>
          <View style={[styles.middleCommon, styles.middleWhite]}>
            <View style={[styles.innerCommon, styles.innerBlack]} />
          </View>
          <View style={[styles.middleCommon, styles.middleBlack]}>
            <View style={[styles.innerCommon, styles.innerWhite]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const yinYangStyles = (size) => {
  return {
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
    middleCommon: {
      width: size / 2,
      borderRadius: size / 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerCommon: {
      width: size / 8,
      height: size / 8,
      borderRadius: size,
      overflow: 'hidden',
    },
    middleWhite: {
      backgroundColor: 'white',
    },
    innerBlack: {
      backgroundColor: 'black',
    },
    middleBlack: {
      backgroundColor: 'black',
    },
    innerWhite: {
      backgroundColor: 'white',
    },
  };
};

export default YinYang;
