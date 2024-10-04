import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const naviagte = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            naviagte.navigate('Login')
        },2000)
    },[])
    return (
        <Animatable.View
            style={styles.container}
            animation="fadeIn"         // Specify the animation
            easing="ease-in-out"       // Apply ease-in-out effect
            duration={3000}            // Duration of the animation (1 second)
        >
            <Animatable.Image
                source={require('../../../assets/gym-logo.png')}
                style={styles.image}
                animation="bounceIn"     // Different animation for the image (optional)
                easing="ease-in-out"     // Ease-in-out effect for the image
                duration={3500}
            />
        </Animatable.View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20
    }
})