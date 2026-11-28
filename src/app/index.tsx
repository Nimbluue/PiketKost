import { View, Text, Animated, ActivityIndicator, useWindowDimensions} from 'react-native';
import {useRef, useEffect} from 'react';
import {Colours} from '../../src/constants/colours';
import { router } from 'expo-router';

export default function Utama(){
  'use no memo';
  const {height} = useWindowDimensions();
  const bottomSpacing = Math.round(height * 0.10);

  const scaleTitik = useRef(new Animated.Value(1)).current;
  const logors = useRef(new Animated.Value(0)).current;
  const loading = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleTitik, {toValue : 100, duration : 1200, useNativeDriver: true}), //Titik membesar
      Animated.timing(scaleTitik, {toValue : 0, duration : 950, useNativeDriver: true}), //Titik mengecil
      Animated.timing(logors, {toValue : 1, duration : 700, useNativeDriver : true}), //Logo muncul
      Animated.timing(loading, {toValue : 1, duration : 900, useNativeDriver : true}), //Loading muncul
      Animated.delay(700), //Delay fade animasi
      Animated.parallel([
        Animated.timing(logors, {toValue : 0, duration : 300, useNativeDriver : true}), //Logo hilang
        Animated.timing(loading, {toValue : 0, duration : 300, useNativeDriver : true}), //Loading hilang
      ]),
    ]).start(() => {
      router.replace('/main'); //route main
      console.log('done');
    });
  }, []);

  return( 
  <View style={{//Background
    flex : 1, 
    backgroundColor : Colours.background, 
    alignItems : 'center', 
    justifyContent : 'center',
  }}>

    <Animated.View //Titik Loading
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

    <Animated.Image //Logo PiketKost
      source={require('../../assets/images/LOGO-PIKETKOST.png')}
      style={{width: 250, height: 250, position : 'absolute', opacity : logors}}
      resizeMode="contain" 
    />

    <Animated.View //Loading Indicator
      style={{position : 'absolute', opacity : loading, bottom : bottomSpacing}}>
      <ActivityIndicator 
        size="large" color={Colours.LOADING}
      />
      <Text style={{ //Loading Text
        marginTop : 8,
        fontSize : 12,
        fontWeight : 'bold',
        textAlign : 'center',
        color : Colours.loadtext, 
        }}> PIKETKOST </Text>

      <Text style={{ //Loading Text
        fontSize : 12,
        fontWeight : 'bold',
        textAlign : 'center',
        color : Colours.loadtext,
      }}>Piket Rapi, Kost Tetap Bersih</Text>
    </Animated.View>
  </View>
);}

