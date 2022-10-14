import * as React from 'react';
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

import Button from '../components/Button/Button'
import ExtAuth from '../components/ExtAuth'

import styles from './Styles'


export default function Login() {

  return ( 
    <View style={styles.screen}>
      <Text style={styles.titleBlue}>Hello,</Text>
      <Text style={styles.titleNormal}>Welcome back!</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Password"
        />

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <Button buttonText="Log in" />
      </View>
          
      <Text style={styles.extAuth}>Or continue with</Text> 
      <ExtAuth />

      <Text style={styles.smallText}>
        New around here? <Text style={styles.differentColorText}>Sign up</Text>
      </Text>
    </View>
  );
}