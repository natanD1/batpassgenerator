import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

export function BatInputText() {
  return (
    <TextInput
    placeholder='Pass'
    style={styles.inputer}
    />
  );
}