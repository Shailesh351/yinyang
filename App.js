import React, {useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Easing,
  View,
} from 'react-native';
import YinYang from './YinYang';

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;

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
          <YinYang size={300} />
        </Animated.View>

        <View>
          <Button title="Clock Wise" onPress={clockWise} />
          <Button title="Anti Clock Wise" onPress={antiClockWise} />
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
});

export default App;
