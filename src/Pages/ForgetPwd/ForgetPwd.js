import React, { useState } from "react";
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, Pressable } from "react-native";
import { Button, Card, TextInput, Title } from "react-native-paper";
import Services from './Services/ForgetServices'
import { useSelector, useDispatch } from "react-redux";


function ForgetPwd() {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    const [PwdValue, setPwdValue] = useState();

    const handleTextInput = (name, value) => {
        setPwdValue((pre) => ({ ...pre, [name]: value }));
    }
    const handleSubmit = () => {
        dispatch(Services.forgetPWd(PwdValue))
        console.log("FORGET----------->>",PwdValue)
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={{ textAlign: 'center' }}>Reset Your Password</Title>
                    <TextInput
                        label='Enter your Email'
                        style={styles.input}
                        keyboardType="email-address"
                        mode='outlined'
                        name='email'
                        value={PwdValue?.email}
                        onChangeText={(text) => handleTextInput('email', text)}
                    />

                    <Button
                        style={styles.button}
                        labelStyle={styles.buttonText}
                        onPress={handleSubmit}
                    >
                        Go To Your Register Mail
                    </Button>
                    <Pressable onPress={() => navigate.navigate('Login')}>
                        <Text style={{ textAlign: 'center' ,color:'blue'}}>Try again for Login </Text>
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
        backgroundColor: '#B1AFFF',
    },
    card: {
        padding: 16,
        elevation: 4,
        backgroundColor: '#f5f5f5'
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
export default ForgetPwd;
