import React, {useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Easing,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import YinYang from './YinYang';

const DIRECTION = {
  CLOCKWISE: 'c',
  ANTI_CLOCKWISE: 'ac',
};

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;
  const [maxSize, setMaxSize] = useState(1);
  const [size, setSize] = useState(300);
  const [speed, setSpeed] = useState(1500);
  const [direction, setDirection] = useState(DIRECTION.CLOCKWISE);
  console.log(speed);

  const clockWise = () => {
    setDirection(DIRECTION.CLOCKWISE);
    Animated.timing(anim).stop();
    anim.setValue(0);
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const antiClockWise = () => {
    setDirection(DIRECTION.ANTI_CLOCKWISE);
    Animated.timing(anim).stop();
    anim.setValue(1);
    Animated.loop(
      Animated.timing(anim, {
        toValue: 0,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onLayout = (event) => {
    let {width, height} = event.nativeEvent.layout;
    const newMaxSize = Math.min(width, height);
    if (maxSize !== newMaxSize) {
      setSize(newMaxSize / 2);
    }
    setMaxSize(newMaxSize);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[styles.safeArea, {transform: [{rotate: spin}]}]}
          onLayout={(event) => onLayout(event)}>
          <YinYang size={size} />
        </Animated.View>

        <View style={styles.directionContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.buttonContainer,
              direction === DIRECTION.CLOCKWISE ? styles.active : {},
            ]}
            onPress={clockWise}>
            <Text>Clock Wise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.buttonContainer,
              direction === DIRECTION.ANTI_CLOCKWISE ? styles.active : {},
            ]}
            onPress={antiClockWise}>
            <Text>Anti Clock Wise</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.lable}>SIZE</Text>
          <Slider
            style={styles.slider}
            onValueChange={(value) => {
              setSize(value);
            }}
            step={1}
            value={Math.round(maxSize / 2)}
            minimumValue={0}
            maximumValue={Math.round(maxSize)}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#EEEEEE"
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.lable}>SPEED</Text>
          <Slider
            style={styles.slider}
            onValueChange={(value) => {
              setSpeed(3000 - value);
              if (direction === DIRECTION.CLOCKWISE) {
                clockWise();
              } else {
                antiClockWise();
              }
            }}
            step={10}
            value={1500}
            minimumValue={0}
            maximumValue={2950}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#EEEEEE"
          />
        </View>
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
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#EEEEEE',
    padding: 12,
    borderRadius: 50,
    margin: 4,
  },
  active: {
    backgroundColor: '#BBBBBB',
  },
  sliderContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  slider: {
    // width: '100%',
    flex: 1,
  },
  lable: {
    width: 60,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default App;
