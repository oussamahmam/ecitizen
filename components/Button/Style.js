import { StyleSheet } from 'react-native'

const BLUE = '#3097f0'


export const styles = StyleSheet.create({
  buttonContainer: {
    height: '90%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: BLUE,
    paddingVertical: '3%',
    textAlign: 'center',
    borderRadius: 7,
  },
  textButton: {
    color: '#fff',
    fontWeight: 700,
  },
})