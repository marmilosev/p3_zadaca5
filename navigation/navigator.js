import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { MyProfileScreen } from '../screens/MyProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();
export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Screen' }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About Screen' }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ title: 'MyProfile Screen' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'HOME',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
           tabBarIcon: (tabInfo) => {
            return (
            <Ionicons
            name="home-outline"
            size={20}
            color={tabInfo.focused ? "#3f5cc0" : "#7b7b84"}
          />
        );
      },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'SETTINGS',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons
            name="settings-outline"
            size={20}
            color={tabInfo.focused ? "#3f5cc0" : "#7b7b84"}
          />
        );
      },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitle: 'ABOUT',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons
            name="information-circle-outline"
            size={20}
            color={tabInfo.focused ? "#3f5cc0" : "#7b7b84"}
          />
        );
      },
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{
            headerTitle: 'MY PROFILE',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Ionicons
            name="person-outline"
            size={20}
            color={tabInfo.focused ? "#3f5cc0" : "#7b7b84"}
          />
        );
      },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
