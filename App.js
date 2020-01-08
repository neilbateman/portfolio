import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Neil's Portfolio</Text>
      <Text>Created with Gatsby and Expo</Text>
      <Text>Aiming for a truly platform agnostic application</Text>
      <Text>this bad boy uses Gatsby pr-rendering for a performant</Text>
      <Text>webview, downloadable on IOS and Android.</Text>
      <Text>Stay tuned for updates!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
