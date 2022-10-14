import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from './Style'


export default function Button(props) {
  return ( 
    <Pressable style={styles.button}>
      <Text style={styles.textButton}>{props.buttonText}</Text>
    </Pressable>
  );
}