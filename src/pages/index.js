import { Link } from 'gatsby';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from '../../App'

const IndexPage = () => {
  return (
    <View>
      <App/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 16
  }
})

export default IndexPage