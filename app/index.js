import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SMS from 'expo-sms'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  const [loca, setLoca] = useState(null);
  const SendMessage = async e => {
    const able = await SMS.isAvailableAsync();
    if (able) {
      const result = await SMS.sendSMSAsync(
        ['01091677752'], 'Hello there'
      )
      console.log(result)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Button title='hello' onPress={e => {
          sendMessage()
        }} /> */}
        <Link href={'/home'}>home으로</Link>
        <Text>와 샌즈</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
