import { PermissionsAndroid, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={ ['#0075d3', '#006ccf', '#0162ca', '#0d58c4', '#194ebe', '#494ab6', '#6245ae', '#7441a5', '#90479a', '#a25190', '#ae5f8a', '#b46f87']} style={styles.headerContainer}>
        <Text style={styles.header}>PYpay</Text>
        <Text style={styles.headerTag}> - simplifying payments</Text>
      </LinearGradient>
      <View style={styles.bodyContainer}>

      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root:{
    flex:1,
  },
  headerContainer:{
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
    padding:15
  },
  header:{
    color:'white',
    fontSize:28,
    fontWeight:'600'
  },
  headerTag:{
    color:'white',
    fontSize:20,
    fontWeight:'400'
  },
  bodyContainer:{
    backgroundColor:'#03052c',
    flex:1
  }
})