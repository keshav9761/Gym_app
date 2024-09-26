import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Pressable, ImageBackground, Text } from 'react-native'
import { Button, Card, TextInput, Title } from 'react-native-paper';
import signupServices from './Services/signupServices';
import { useDispatch, useSelector } from 'react-redux'


function Signup() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state?.signup)
    const [value, setValues] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleTextInput = (name, value) => {
        setValues((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = () => {
        dispatch(signupServices?.authRegister(value))
        console.log('>>>>>>>>value---', value)

    }
    useEffect(() => {
        console.log("useSlector", data)

    }, [])
    return (
        <ImageBackground
            source={require('../../../assets/gym.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container} >
                <Card style={styles.card} >
                    <Card.Content>
                        <Title style={{ textAlign: 'center' }}>Welcome our's GYM </Title>
                        {/* <TextInput
                        label='UserName'
                        style={styles.input}
                        mode='outlined'
                        name='username'
                        value={value.username}
                        onChangeText={(value) => handleTextInput('username', value)}
                    /> */}
                        <TextInput
                            label='Email'
                            style={styles.input}
                            mode='outlined'
                            keyboardType='email-address'
                            name='email'
                            value={value.email}
                            onChangeText={(value) => handleTextInput('email', value)}
                        />
                        <TextInput
                            label='Mobile'
                            style={styles.input}
                            mode='outlined'
                            // secureTextEntry={true}
                            name='mobile'
                            value={value.mobile}
                            onChangeText={(value) => { handleTextInput('mobile', value) }}
                        />
                        <Button
                            style={styles.button}
                            mode='contained'
                            onPress={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Pressable onPress={() => navigate.navigate('Login')}>
                            <Text style={{ textAlign: 'center' }}>Already Have an account? Login </Text>
                        </Pressable>
                    </Card.Content>
                </Card>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        padding: 16,
        // backgroundColor: '#f5f5f5',

    },
    card: {
        padding: 16,
        elevation: 4,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },

});
export default Signup;