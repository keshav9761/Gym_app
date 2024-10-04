import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, Card, TextInput, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Services from '../Login/Services/loginServices'
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.login.data)
    console.log("====STATE ===", state)
    const [loginValue, setLoginValue] = useState();

    useEffect(() => {
        if (!state?.data?.token) return;
        AsyncStorage.setItem('token', state.data.token)
    }, [state?.data?.token])

    const handleTextInput = (name, value) => {
        setLoginValue((pre) => ({ ...pre, [name]: value }));
    }
    const handleSubmit = () => {
        console.log("ligib values", loginValue)
        dispatch(Services.authLogin(loginValue))

    }
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={{ textAlign: 'center' }}>Login</Title>
                    <TextInput
                        label='Email'
                        style={styles.input}
                        keyboardType="email-address"
                        mode='outlined'
                        name='email'
                        value={loginValue?.email}
                        onChangeText={(text) => handleTextInput('email', text)}
                    />
                    <TextInput
                        label='Password'
                        style={styles.input}
                        secureTextEntry={true}
                        mode="outlined"
                        name='password'
                        value={loginValue?.password}
                        onChangeText={(text) => handleTextInput('Password', text)}
                    />
                    <Pressable onPress={() => navigate.navigate('ForgetPwd')} style={styles.textAlign}>
                        <Text style={{ color: 'blue' }}>Forget Password ?</Text>
                    </Pressable>
                    <Button
                        style={styles.button}
                        labelStyle={styles.buttonText}
                        onPress={handleSubmit}
                    >
                        Login
                    </Button>
                    <Pressable onPress={() => navigate.navigate('Signup')}>
                        <Text style={{ textAlign: 'center' }}>You havn't an account? Signup </Text>
                    </Pressable>
                </Card.Content>
            </Card>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#663399',
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
        backgroundColor: ' rgb(120, 69, 172)',
    },
    buttonText: {
        color: '#ffffff',
    },
    textAlign: {
        alignItems: 'flex-end',
        color: 'blue'

    }
});
export default Login;