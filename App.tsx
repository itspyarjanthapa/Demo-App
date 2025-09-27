import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/auth/Onboarding';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import TabNavigator from './src/navigation/Tabnavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { StatusBar, StyleSheet } from 'react-native';
import UpdateProfile from './src/screens/updates/UpdateProfile';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.successToast}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.successTitle}
      text2Style={styles.successSubtitle}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.errorTitle}
      text2Style={styles.errorSubtitle}
    />
  ),
};

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
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
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
      <StatusBar barStyle={'light-content'} />
      <LoginNav />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  successToast: {
    borderLeftColor: '#9bf5beff',
    backgroundColor: '#F0FFF4',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginTop: 10,
  },
  errorToast: {
    // borderLeftColor: '#E53935',
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  successTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
  },
  successSubtitle: {
    fontSize: 14,
    color: '#4CAF50',
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B71C1C',
  },
  errorSubtitle: {
    fontSize: 14,
    color: '#E53935',
  },
});
