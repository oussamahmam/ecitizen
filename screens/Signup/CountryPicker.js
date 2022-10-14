import * as React from 'react';
import { StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import Button from '../../components/Button/Button'

// import CountryList from 'react-native-country-picker-modal'
import { CountrySelection } from 'react-native-country-list';


export default function CountryPicker() {
  return (
    <View style={styles.phoneScreen}>
      <View style={styles.usable}>
        <CountrySelection />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.specificStyling} buttonText="Next" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  phoneScreen: {
    backgroundColor: '#fff',
    flex: 1,
  },

  usable: {
    height: '90%',
    flex: 1
  },

  buttonContainer: {
    height: '10%',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)'
  }

/*
  <Text style={styles.title}>Select your country</Text>
  <TextInput style={styles.search} placeholder="Search" />
  <CountryList />
  
  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },

  search: {
    backgroundColor: TEXTINPUT_BG,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: '5%',
    paddingVertical: '2.5%',
    borderRadius: 10,
    placeholderTextColor: PLACEHOLDER_COLOR,
  },
*/


  
})