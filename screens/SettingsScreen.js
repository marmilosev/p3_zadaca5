import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate('Home');
  }
  function handleAboutPress() {
    navigation.navigate('About');
  }

  function handleMyProfilePress() {
    navigation.navigate('MyProfile');
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> SETTINGS SCREEN </Text>
      <Pressable style={styles.btn} onPress={handleHomePress}>
        <Text style={styles.text}>Go To The Home Screen</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={handleAboutPress}>
        <Text style={styles.text}>Go To The About Screen </Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={handleMyProfilePress}>
        <Text style={styles.text}>Go To The My Profile Screen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8e3ea',
  },
  title: {
    fontSize: 25,
    fontWeight: 10,
    textAlign: 'center',
    margin: 15,
    color: '#3f5cc0',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7b7b84',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 250,
    margin: 10,
    marginLeft:30,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
