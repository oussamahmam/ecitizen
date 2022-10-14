import * as React from 'react';
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native'

import Button from '../../components/Button/Button'

import styles from '../Styles'


export default function ProfileInfo() {
  return ( 
    <View style={styles.phoneScreen}>
      <View style={styles.usable}>
        <Text style={styles.subtitle}>Fill your profile</Text>

        <TextInput style={styles.textInput} placeholder="Username"  />
        
        <TextInput 
          style={styles.textInput}
          placeholder="First Name"
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Last Name"
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Phone Number"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button buttonText="Finish" />
      </View>
    </View>
  );
}