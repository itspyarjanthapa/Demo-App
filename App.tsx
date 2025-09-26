import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/auth/Onboarding';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import TabNavigator from './src/navigation/Tabnavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const LoginNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="userLogin" component={LoginNav} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    setisLoggedIn(data);
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <LoginNav />}
    </NavigationContainer>
  );
};

export default App;
