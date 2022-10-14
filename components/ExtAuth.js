import * as React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native'


// const BLUE = '#3097f0'

export default function ExtAuth() {
  return ( 
    <View style={styles.buttons}>
      <Pressable style={styles.googleBtn}>
        <Text style={styles.text}>Facebook</Text>
      </Pressable>

      <Pressable style={styles.facebookBtn}>
        <Text style={styles.text}>Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: '2%',
    flexDirection: 'row',
    textAlign: 'center',
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .3)',
    width: '45%',  
    paddingVertical: 9,
    borderRadius: 10,
  },
  facebookBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .3)',
    width: '45%',  
    paddingVertical: 9,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
  },

  text: {
    color: 'rgba(0, 0, 0, .6)',
    fontSize: 13,
  }
})