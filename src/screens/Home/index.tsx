import React from 'react';
import styles from './styles'
import { View } from 'react-native';
import { BatLogo } from '../../components/BatLogo';
import { StatusBar } from 'expo-status-bar';
import { BatInputText } from '../../components/Input/BatInputText';


export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo/> 
      </View>

      <View>
        <BatInputText/>
      </View>
      <StatusBar style='light'/>
    </View>
  );
}