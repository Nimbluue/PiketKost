import {StyleSheet, View, Image, Text, Animated, ActivityIndicator, useWindowDimensions} from 'react-native';
import {useRef, useEffect} from 'react';
import {Colours} from '../../src/constants/colours';
import { router, useRouter } from 'expo-router';

export default function Main(){
    const router = useRouter();

    return(
    <View style={{
        flex : 1,
        backgroundColor : '#262626',
        alignItems : 'center',
        justifyContent : 'center',
        }}>
        
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>HI</Text>
        <Text style={{ //Loading Text
        marginTop : 8,
        fontSize : 12,
        fontWeight : 'bold',
        textAlign : 'center',
        color : Colours.loadtext, 
        }}> PIKETKOST </Text>
    </View>

);}