import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import * as Speech from 'expo-speech';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop : StatusBar.currentHeight || 0
    }
  })

const TextToSpeech = () => {
    const speak = () => {
        Speech.speak("boa tarde mãe lucinda, esse é meu aplicativo de voz")
    }
    return(
        <View style={styles.container}>
        <Button title="Precione para reproduzir" onPress={() => speak()} />
      </View>
    );

}

export default TextToSpeech;