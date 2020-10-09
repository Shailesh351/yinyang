import React, {useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Easing,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Dimensions} from 'react-native';
import YinYang from './YinYang';

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;
  const maxSize = Dimensions.get('window').width;
  const [size, setSize] = useState(300);

  const clockWise = () => {
    Animated.timing(anim).stop();
    anim.setValue(0);
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const antiClockWise = () => {
    Animated.timing(anim).stop();
    anim.setValue(1);
    Animated.loop(
      Animated.timing(anim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View style={[styles.safeArea, {transform: [{rotate: spin}]}]}>
          <YinYang size={size} />
        </Animated.View>

        <View>
          <Button title="Clock Wise" onPress={clockWise} />
          <Button title="Anti Clock Wise" onPress={antiClockWise} />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            onValueChange={(value) => {
              setSize(value);
            }}
            value={Math.round((maxSize - 16) / 2)}
            minimumValue={0}
            maximumValue={Math.round(maxSize - 16)}
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
  sliderContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  slider: {
    width: '100%',
  },
});

export default App;
