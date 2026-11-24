import {StyleSheet, View, Image, Text, Animated, ActivityIndicator, useWindowDimensions} from 'react-native';
import {useRef, useEffect} from 'react';
import {Colours} from '../../../src/constants/colours';
import { router, useRouter } from 'expo-router';

export default function Main(){
    const router = useRouter();

    return(
    <View style={{
        flex : 1,
        backgroundColor : Colours.background,
        alignItems : 'center',
        justifyContent : 'center',
        }}>
        
        <View>style={{
            width : '100%' ,
            
        }}
        </View>
    </View>

);}