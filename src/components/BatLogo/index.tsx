import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View>
        <Text style={styles.textTitle}>BATPASS - GENERATOR</Text>
        <Image
        source={batLogo}
        style = {{resizeMode:'contain', height:180}}
        />
        
    </View>
  );
}