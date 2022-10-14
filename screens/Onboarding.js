import * as React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

import OnboardingBtns from '../components/OnboardingBtns'
import Swiper from 'react-native-swiper'

import styles from './Styles'


export default function Onboarding() {
  return (
    <Swiper 
      style={styles.wrapper} 
      showsButtons={true}
      scrollEnabled={true}
      loop={false}
    >
      <View style={styles.slide}>
        <ImageBackground 
          style={styles.bgImage} 
          resizeMethod='cover'
          source={require('../assets/img/first.jpg')}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Voice your opinion</Text>
            <Text style={styles.description}>
              Speak your mind, make your thoughts heard
            </Text>   
          </View>

          <OnboardingBtns />
        </ImageBackground>
      </View>

      <View style={styles.slide}>
        <ImageBackground
          style={styles.bgImage} 
          resizeMethod='cover'
          source={require('../assets/img/second.jpg')}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Join the discussion</Text>
            <Text style={styles.description}>
              Discover different takes on various topics
            </Text>
          </View>

          <OnboardingBtns />
        </ImageBackground>
      </View>

      <View style={styles.slide}>
        <ImageBackground 
          style={styles.bgImage} 
          resizeMethod='cover'
          source={require('../assets/img/third.jpg')}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Stay updated</Text>
            <Text style={styles.description}>
              Browse through international and national news
            </Text>
          </View>

          <OnboardingBtns />
        </ImageBackground>
      </View>
    </Swiper>
  )
}