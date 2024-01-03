import { Button, Text, Image } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';


function LogoTitle() {
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Text>Count: {count}</Text>
    </>
  );
}
