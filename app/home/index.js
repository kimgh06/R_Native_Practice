import { Button, Text, Image, View } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';


function LogoTitle() {
}

export default function Home() {
  const [count, setCount] = useState(0);

  return <>
    <View>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    </View>
  </>;
}
