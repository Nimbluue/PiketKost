import {StyleSheet, View, Image, Animated, ActivityIndicator, useWindowDimensions} from 'react-native';
import {useRef, useEffect} from 'react';
import {Colours} from '../../src/constants/colours';

export default function Utama(){
  const {height} = useWindowDimensions();
  const bottomSpacing = Math.round(height * 0.10);

  const scaleTitik = useRef(new Animated.Value(1)).current;
  const logors = useRef(new Animated.Value(0)).current;
  const loading = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleTitik, {toValue : 100, duration : 1200, useNativeDriver: true}),
      Animated.timing(scaleTitik, {toValue : 0, duration : 950, useNativeDriver: true}),
      Animated.timing(logors, {toValue : 1, duration : 700, useNativeDriver : true}),
      Animated.timing(loading, {toValue : 1, duration : 900, useNativeDriver : true}),
    ]).start();
  }, []);

  return( 
  <View style={{
    flex : 1, 
    backgroundColor : Colours.background, 
    alignItems : 'center', 
    justifyContent : 'center',
  }}>

    <Animated.View
      style={{
        width : 20, 
        height : 20,
        backgroundColor : Colours.ssdot, 
        borderRadius : 50,
        alignItems : 'center', 
        justifyContent : 'center',
        position : 'absolute',
        transform : [{scale : scaleTitik}]
      }}>
    </Animated.View>

    <Animated.Image
      source={require('../../assets/images/LOGO-PIKETKOST.png')}
      style={{width: 250, height: 250, position : 'absolute', opacity : logors}}
      resizeMode="contain" 
    />

    <ActivityIndicator 
      size="large"
      color={Colours.LOADING} 
      style={{position : 'absolute', opacity : loading, bottom : bottomSpacing}}
    />
  </View>
);}

