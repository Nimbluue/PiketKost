import {StyleSheet, Text, View, Image} from 'react-native';

export default function Utama(){
  return( 
  <View style={{ flex : 1, backgroundColor : '#FFF8ED', alignItems : 'center', justifyContent : 'center'}}>
    <Image
      source={require('../../assets/images/LOGO-PIKETKOST.png')}
      style={{width: 250, height: 250}}
      resizeMode="contain"
    />
  </View>
);}