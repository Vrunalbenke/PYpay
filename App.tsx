import { PermissionsAndroid, SafeAreaView, StyleSheet, Text, View,Alert, Touchable, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const bg = require('./src/assets/image/bg.png')
  const MoneyPrinter = require('./src/assets/image/MoneyPrinter.gif')
  const NOMoney = require('./src/assets/image/NOMoney.gif')


  const [gif,setGIF] = useState(bg)
  const razorpay_ID = 'rzp_test_rRHMJrurbOZIVO'
  const razorpay_Secret = "ddgvHAiBAaIPTom2oND3LOsN"

  
  const amount = 100;
  const currency = "INR";
  
    const handlePayment = () => {
      var options = {
        description: 'Buy BMW CAR',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: currency,
        key: razorpay_ID,
        amount: amount*10000,
        name: 'test order',
        order_id: "", //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
        prefill: {
          email: 'xyz@gmail.com',
          contact: '9999999999',
          name: 'User 1'
        },
        theme: { color: '#F37254' }
      }
  
      RazorpayCheckout.open(options).then((data:any) => {
        // handle success
        // console.log(data)
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
        setGIF(MoneyPrinter)
      })
        .catch((error:any) => {
          // handle failure
          console.log(error)
          Alert.alert(`Error: ${error.code} | ${error.description}`);
          setGIF(NOMoney)
        })
    }



  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={ ['#0075d3', '#006ccf', '#0162ca', '#0d58c4', '#194ebe', '#494ab6', '#6245ae', '#7441a5', '#90479a', '#a25190', '#ae5f8a', '#b46f87']} style={styles.headerContainer}>
        <View>
        <Text style={styles.header}>PYpay</Text>
        <Text style={styles.headerTag}> - simplifying payments</Text>
        </View>
        <Ionicons name="qr-code-outline" size={50}></Ionicons>
      </LinearGradient>
      <View style={styles.bodyContainer}>
        <Image style={styles.Image} source={gif} />
        
          <TouchableOpacity  style={styles.Btn} onPress={handlePayment}>
            <Text style={styles.BtnText}>Pay now</Text>
          </TouchableOpacity>
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
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
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
    backgroundColor:'#6245ae',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  Image:{
    width:350,
    height:350
  },
  Btn:{
    marginTop:20,
    backgroundColor:"#1364f1",
    padding:10,
    // width:100,
    justifyContent:'center',
    alignItems:'center'
  },
  BtnText:{
    fontSize:20,
    fontWeight:'600'
  }
})