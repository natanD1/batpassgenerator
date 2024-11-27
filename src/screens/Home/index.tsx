import React from 'react';
import styles from './styles'
import { View } from 'react-native';
import { BatLogo } from '../../components/BatLogo';
import { StatusBar } from 'expo-status-bar';
import { BatInputText } from '../../components/Input/BatInputText';
import { BatButton } from '../../components/BatButton';


export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>

        <BatButton />
      </View>
      <StatusBar style='light' />
    </View>
  );
}