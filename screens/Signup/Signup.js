import * as React from 'react';
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

import Button from '../../components/Button/Button'
import ExtAuth from '../../components/ExtAuth'

import styles from '../Styles'


export default function Signup() {

  return ( 
    <View style={styles.screen}>
      <Text style={styles.titleBlue}>Hello,</Text>
      <Text style={styles.titleNormal}>Create your account</Text>

      <TextInput 
        style={styles.textInput}
        placeholder="Email"
      />
      <TextInput 
        style={styles.textInput}
        placeholder="Password"
      />

      <Button buttonText="Sign up" />
           
      <Text style={styles.extAuth}>Or continue with</Text> 
      <ExtAuth />

      <Text style={styles.smallText}>
        Already have an account? <Text style={styles.differentColorText}>Log in</Text>
      </Text>
    </View>
  );
}