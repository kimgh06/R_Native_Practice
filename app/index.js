import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as SMS from 'expo-sms'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  const [loca, setLoca] = useState(null);
  const GetLoaction = e => {
    if ("geolocation" in navigator) {
      const option = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      }
      // const location = navigator.geolocation.getCurrentPosition()
      navigator.geolocation.watchPosition(e => {
        console.log(e.coords)
      }, err => alert("can't use"), option)
    }
  }

  return <SafeAreaView style={styles.container}>
    <View>
      <Button title='hello' onPress={e => {
        GetLoaction();
      }} />
      <Link href={'/home'}>home으로</Link>
      <Text>와 샌즈</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
