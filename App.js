/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  Platform,
  Dimensions,
  StyleSheet
} from 'react-native';

import AnimationHook from './components/AnimationHook';
const App = () => {
  const [sum, setSum] = useState(0)

  const getSum = (num1,num2) => {
    NativeModules.NativeToastModule.sum(num1,num2,(sum) => setSum(sum))
  }

  getSum(100,200)
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          if(Platform.OS == "android"){
            NativeModules.NativeToastModule.showMessage("My first bridge code ", 10000);
          }
        }}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
        <Text>{`Sum from native method: ${sum}`}</Text>
        <AnimationHook/>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: Dimensions.get("screen").height * 0.15
  }
})
export default App;
