import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
  },
  logo: {
    width: 250,
    height: 250,
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
  },
});

export default function App() {
  const [darkTheme, changeDarkTheme] = useState(false);

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? 'black' : 'white' }}>
      <Text style={{ ...styles.text, color: darkTheme ? 'white' : 'black' }}>This is my First React APP!</Text>
      <Text style={{ ...styles.text, color: darkTheme ? 'white' : 'black' }}>{`Actual Theme: ${darkTheme ? 'Dark' : 'Light'}`}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        }}
        onPress
      />
      <View style={styles.button}>
        <Button
          onPress={() => {
            changeDarkTheme(!darkTheme);
          }}
          title="Switch Theme"
        />
      </View>
      <StatusBar style={{ auto: 'auto' }} />
    </View>
  );
}
