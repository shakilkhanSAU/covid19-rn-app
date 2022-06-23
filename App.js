import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/component/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';


const Stack = createNativeStackNavigator();


export default function App() {

  // custom font apply
  const [loaded] = useFonts({
    graphikRegular: require('./assets/font/GraphikRegular.ttf'),
    graphikMedium: require('./assets/font/GraphikMedium.ttf'),
    graphikBold: require('./assets/font/GraphikBold.ttf'),
  });
  if (!loaded) {
    return <Text>Loading font...</Text>;
  }
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

