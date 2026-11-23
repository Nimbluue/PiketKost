import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import {useRef, useEffect} from 'react';
import {Colors} from '../../src/constants/colors';

export default function Utama(){
  const scaleTitik = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleTitik, {toValue : 100, duration : 2000, useNativeDriver: true}),
      Animated.timing(scaleTitik, {toValue : 0.5, duration : 1000, useNativeDriver: true}),
    ]).start();
  }, []);

  return( 
  <View style={{
    flex : 1, 
    backgroundColor : Colors.background, 
    alignItems : 'center', 
    justifyContent : 'center'
  }}>
    <Animated.View
      style={{
        width : 20, 
        height : 20,
        backgroundColor : Colors.ssdot, 
        borderRadius : 50,
        transform : [{scale : scaleTitik}]
      }}>
    </Animated.View>

    {/* <Image
      source={require('../../assets/images/LOGO-PIKETKOST.png')}
      style={{width: 250, height: 250}}
      resizeMode="contain"
    /> */}
  </View>
);}

