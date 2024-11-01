import React, { useState } from 'react'
import { Button, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import HomeScreen from './Tab/HomeScreen';
import SettingScreen from './Tab/SettingScreen';
import Notifications from './Tab/Notifications';
import Profile from './Tab/Profile';

const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarShowlabel: false,
    headerShown: false,
    tabBarActiveTintColor: '#FFFFFF',
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#00895E',
        elevation: 0, // remove shadow on Android

        height: Platform.OS === 'ios' ? 90 : 60
    }
}
export default function Dashboard() {

    return (
        <NavigationContainer independent={true}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Welcome to  Dashboard
                    </Text>
                </View>
            </View>
            <Tab.Navigator screenOptions={screenOptions} sceneContainerStyle={{ backgroundColor: '#FFFEFF' }}>
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon name="home"
                                color={focused ? '#FFD700' : '#FFFFFF'}
                                size={focused ? 45 : 40}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="setting"
                    component={SettingScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon name="settings"
                                color={focused ? '#FFD700' : '#FFFFFF'}
                                size={focused ? 45 : 40}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="notification"
                    component={Notifications}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Icon name="notifications"
                                color={focused ? '#FFD700' : '#FFFFFF'}
                                size={focused ? 45 : 40}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Avatar.Image
                                    size={focused ? 50 : 40}
                                    source={require('../../../assets/gym-logo.png')}
                                />


                                {/* <Icon name="notifications"
                                    color={focused ? '#FFD700' : '#FFFFFF'}
                                    size={focused ? 45 : 40}
                                /> */}
                            </View>

                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 2
    },
    header: {
        backgroundColor: '#2A92DF',
        width: '100%',
        height: 60,
        justifyContent: 'center', // Align vertically
        alignItems: 'center',     // Align horizontally        
    },
    headerText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold', // Optional: To make the text bold
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
})