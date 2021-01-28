import {  NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './pages/RootStackscreen'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>

    </NavigationContainer>
  );
}


