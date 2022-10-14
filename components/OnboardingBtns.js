import * as React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const BLUE = '#3097f0'

export default function OnboardingBtns() {

  const navigation = useNavigation()

  return ( 
    <View style={styles.btnContainer}> 
      <Pressable style={styles.skipBtn} onPress={() => navigation.replace("Login")}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    left: '46%',
    top: '87%',
  },

  skipText: {
    color: BLUE,
    textDecorationLine: 'underline',
    letterSpacing: .3, 
  }, 
})