/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  Platform
} from 'react-native';

const App = () => {

  return (
      <View style={{flex:1, alignItems: "center", justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          if(Platform.OS == "android"){
            NativeModules.NativeToastModule.showMessage("My first bridge code ", 10000);
          }
        }}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </View>
  );
};

export default App;
