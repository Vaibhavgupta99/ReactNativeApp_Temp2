import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'lightblue'}></StatusBar>
      <View style={styles.container}>
        <LinearGradient 
          colors={["red",'yellow','blue']}
          style={styles.lg} />
          <Text>Hello World</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgreen'

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  lg: {
    width:'100%',
    height:'100%',
    position:'absolute',
  }
})