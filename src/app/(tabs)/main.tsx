import {StyleSheet, View, Image, Text, Animated, ActivityIndicator, useWindowDimensions} from 'react-native';
import {useRef, useEffect} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {Colours} from '../../../src/constants/colours';
import { router, useRouter } from 'expo-router';

export default function Main(){
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return(
    <View style={{
        flex : 1,
        backgroundColor : Colours.background,
        }}>
        
        <View style={{ //BANNER+LOGO
            paddingTop: insets.top + 16,
            paddingBottom: 16,
            width : '100%',
            height : 132,
            backgroundColor : Colours.banner,
            justifyContent : 'center',
            alignItems : 'center',
        }}>
            <Image source={require('../../../assets/images/LOGO-HORIZONTOL.png')} 
            style={{width : '100%', height : '100%', resizeMode : 'center'}} /> 
        </View>

        <Text style={{
            marginTop : 16,
            fontSize : 32,
            fontFamily : 'Fredoka-Medium',
            color : Colours.ftitle,
            justifyContent:'center',
            alignItems:'center',
            }}>
            Kalender Piket
        </Text>
        
    </View>

);}