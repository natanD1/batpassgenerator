import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

interface BatInputTextProps {
  pass: string
}

export function BatInputText(props: BatInputTextProps) {
  return (
    <TextInput
      placeholder='Password'
      style={styles.inputer}
      value={props.pass}
    />
  );
}