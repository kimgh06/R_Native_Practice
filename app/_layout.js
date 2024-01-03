import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack
    // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: '와 샌즈'
    }}>
    {/* Optionally configure static options outside the route. */}
    {/* <Stack.Screen name="home" options={{ title: 'welcome home' }} /> */}
  </Stack>;
}
