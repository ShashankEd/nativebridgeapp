import React,{ useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Animated,
    TouchableOpacity 
} from 'react-native';
const AnimationHook = () => {
    //Shake device and open perf monitor, and check the JS and UI thread
    const fadeValue = useState(new Animated.Value(0))[0];
    startAnimation = () => {
        Animated.timing(fadeValue, {
            toValue:1,
            duration:1000,
            useNativeDriver:true //If useNativeDriver true then the animation will be handled by the native OS not the JS
        }).start();
        
        //For testing running the above animation on main thread, and JS thread does the below computation 
        setTimeout(() => {
            for (let index = 0; index < 9998800000; index++) {
            }
        },1000);
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={() => startAnimation()}>
            <Text style={styles.textBtn}>Start</Text>
          </TouchableOpacity>
          <Animated.View
            style={{
              opacity: fadeValue,
              height: 250,
              width: 200,
              margin: 5,
              borderRadius: 12,
              backgroundColor: "#347a2a",
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>Fade </Text>
          </Animated.View>
        </View>
      )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "center"
    },
    item: {},
    btn: {
      backgroundColor: "#480032",
      width: 100,
      height: 40,
      padding: 3,
      justifyContent: "center",
      borderRadius: 6
    },
    text: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center"
    },
    item1: {
      backgroundColor: "red",
      padding: 20,
      width: 100,
      margin: 10
    },
  
    textBtn: {
      color: "#f4f4f4",
      fontWeight: "bold",
      textAlign: "center"
    }
  });

export default AnimationHook;