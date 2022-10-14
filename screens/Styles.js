import { StyleSheet } from 'react-native'

const variables = {

  colors: {
    // General
    blue: '#3097f0',

    // Text Input
    bg: '#f5f5f5',
    borderGray: 'rgba(0, 0, 0, .2)',
    placeholderGray: 'rgba(0, 0, 0, .4)',

  },

  fonts: {
    title: 30,
    subtitle: 21,
    description: 13
  }
}

const styles = StyleSheet.create({

  /* ----- Onboarding Screens ----- */
  slide: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    flex: 1,
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '3.5%',
  },
  description: {
    color: '#fff',
    fontSize: 13,
  },

  /* ----- Authentification (Login & Signup) ----- */
  screen: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: '30%',
  },
  
  titleBlue: {
    color: variables.colors.blue,
    fontSize: variables.fonts.title,
    fontWeight: 'Bold',
  },
  titleNormal: {
    fontSize: variables.fonts.title,
    fontWeight: 'Bold',
    marginBottom: '10%',
  },

  textInput: {
    backgroundColor: variables.colors.bg,
    borderWidth: 1,
    borderColor: variables.colors.borderGray,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    borderRadius: 10,
    placeholderTextColor: variables.colors.placeholderGray,
    marginBottom: '5%',
  },

  forgotPassword: {
    fontSize: 12,
    color: variables.colors.blue,
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginTop: '-3%',
    marginBottom: 8,
  },

  extAuth: {
    marginVertical: '5%',
    textAlign: 'center',
  },

  smallText: {
    textAlign: 'center',
    marginTop: '10%',
  },
  differentColorText: {
    color: variables.colors.blue,
    fontWeight: '700',
  },

  /* ----- Profile Info ----- */
  phoneScreen: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: '5%',
  },

  usable: {
    height: '90%',
    paddingTop: '25%'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: variables.fonts.subtitle,
    fontWeight: '700',
    marginBottom: 10,
  },
  
  buttonContainer: {
    height: '10%',
    justifyContent: 'center',
  }
})

export default styles