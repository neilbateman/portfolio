// @generated: @expo/next-adapter@2.0.0-beta.7
import React from 'react';
import { StyleSheet, Text, Platform, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

function ExpoText() {
  const style = Platform.select({
    default: {
      textShadowColor: '#F4C6F4',
      textShadowRadius: 0,
      textShadowOffset: { width: 2, height: 2 },
    },
    web: {
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-webkit-text-stroke-width': '2px',
      '-webkit-text-stroke-color': '#F4C6F4',
    }
  })
  return (
    <React.Fragment>
      <Text style={[styles.newLetter, style]}>E</Text>
      <Text style={[styles.newLetter, style]}>X</Text>
      <Text style={[styles.newLetter, style]}>P</Text>
      <Text style={[styles.newLetter, style]}>O</Text>
    </React.Fragment>
  )
}

export default function App() {

  React.useEffect(() => {
    Font.loadAsync('OutRun', require('./outrun-future.otf'))
  }, []);

  const sunsetStyle = Platform.select({
    default: {
      textShadowColor: '#F4C6F4',
      textShadowRadius: 0,
      textShadowOffset: { width: 2, height: 2 },
    },
    web: {
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-webkit-text-stroke-width': '2px',
      '-webkit-text-stroke-color': 'white',
    }
  })

  return (
    <LinearGradient locations={[0.40, 0.41, 0.6]} colors={['#0C141F', '#CF33D9', '#0C141F']} style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.landscape}></View>
        <View style={[styles.landscape, styles.landscapeHorizontal]}></View>
      </View>
      <View style={styles.nrw}>
        <Text style={styles.new}>
          <ExpoText />
        </Text>
        <Text style={styles.retro}>
          <Text style={[styles.retroLetter, sunsetStyle]}>sunset</Text>
        </Text>
        <Text style={styles.wave}>
          <Text style={styles.waveLetter}>cyberspace</Text>
        </Text>
      </View>
      <View style={styles.triangle}></View>
    </LinearGradient>
  );
}

const glow = {
  '0%': { filter: 'drop-shadow(0 0 6px #CF33D9) drop-shadow(0 0 6px #CF33D9)' },
  '50%': { filter: 'drop-shadow(0 0 1px #CF33D9) drop-shadow(0 0 1px #CF33D9)' },
  '100%': { filter: 'drop-shadow(0 0 6px #CF33D9) drop-shadow(0 0 6px #CF33D9)' },
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'block',
    marginVertical: 0,
    marginHorizontal: 'auto',
    perspective: 180,
    perspectiveOrigin: '50% 40%'
  },
  landscape: {
    position: 'absolute',
    width: '200%',
    left: '-50%',
    height: '130%',
    bottom: '-30%',
    display: 'block',
    backgroundImage: '-webkit-linear-gradient(top, #CF33D9 2px, transparent 2px)',
    backgroundSize: '50px 50px',
    backgroundPosition: '-1px -1px',
    transform: [{ rotateX: '85deg' }]
  },
  landscapeHorizontal: {
    backgroundImage: '-webkit-linear-gradient(left, #CF33D9 2px, transparent 2px)',
    backgroundSize: '80px 80px',
  },
  nrw: {
    zIndex: 50,
  },
  new: {
    position: 'relative',
    display: 'block',
    transform: [{ rotate: '-10deg' }, { skew: '-20deg' }],
    marginLeft: -100,
    marginBottom: -36,
    textAlign: 'center',
  },
  newLetter: {
    letterSpacing: -8,
    fontSize: '5.2em',
    textTransform: 'uppercase',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: 'transparent',
    WebkitFontSmoothing: 'always',
    marginTop: -8,
    display: 'inline-block',
    paddingVertical: 0,
    paddingHorizontal: 1,
    animationKeyframes: glow,
    animationDuration: '2.5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  retro: {
    display: 'block',
    transform: [{ rotate: "-10deg" }, { skew: '-10deg' }],
    marginBottom: -20,
  },
  retroLetter: {
    textTransform: 'uppercase',
    fontSize: '5.5em',
    fontWeight: 800,
    letterSpacing: 2,
    WebkitFontSmoothing: 'always',
    display: 'inline-block',
    // This fixes gradient background not filling text
    paddingHorizontal: 10,
    marginHorizontal: -10,
    backgroundImage: 'linear-gradient(rgb(24, 25, 26) 32%, rgb(21, 123, 230) 40%, rgb(255, 255, 255) 52%, rgb(24, 25, 26) 56%, rgb(21, 123, 230) 85%, rgb(255, 255, 255))',
    backgroundClip: 'text',
    color: 'transparent',
  },
  wave: {
    zIndex: 100,
    top: '0.3rem',
    display: 'block',
    transform: [{ rotate: '-5deg' }, { skew: '-3deg' }]
  },
  waveLetter: {
    fontFamily: 'OutRun', // 'Helvetica', sans-serif
    fontSize: "3.3em",
    color: '#FA26F7',
    textTransform: 'uppercase',
    letterSpacing: -10,
  },
  triangle: {
    zIndex: 0,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(5, 5, 5, 0.33)',
    borderLeftWidth: 200,
    borderRightWidth: 250,
    borderBottomWidth: 200,
    transform: [{ rotate: '15deg' }]
  },
});
