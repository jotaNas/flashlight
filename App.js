import  React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
import lightOn from './assets/icons/eco-light.png'
import lightOff from './assets/icons/eco-light-off.png'
import logoDioWhite from './assets/icons/logo-dio-white.png'
import logoDio from './assets/icons/logo-dio.png'

const App = () => {
  const [toggle, setToggle ] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)

useEffect(()=>{
  Torch.switchState(toggle)
}, [toggle])

useEffect(() =>{
  const subscription = RNShake.addListener(()=>{
    handleChangeToggle(oldToggle => !oldToggle)
  })
  return () => subscription.remove();
}, [])

  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={() => {handleChangeToggle}}>
      <Image
        style={toggle ? style.LightingOn : style.LightingOff}
        source={toggle ? lightOn : lightOff}
      />
      <Image
        style={toggle ? style.LightingOn : style.LightingOff}
        source={toggle ? logoDio : logoDioWhite}
      />
    </TouchableOpacity>
  </View>
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundCoor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundCoor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  LightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }
});