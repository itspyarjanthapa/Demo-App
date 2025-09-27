import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator();

// --- Move icon components outside the TabNavigator ---
function HomeIcon({ focused, color, size }: any) {
  return (
    <IconM
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
      style={styles.icon}
    />
  );
}

function ProfileIcon({ focused, color, size }: any) {
  return (
    <IconM
      name={focused ? 'account' : 'account-outline'}
      size={size}
      color={color}
      style={styles.icon}
    />
  );
}

function UserIcon({ focused, color, size }: any) {
  return (
    <IconM
      name={focused ? 'account-group' : 'account-group-outline'}
      size={size}
      color={color}
      style={styles.icon}
    />
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#7e86faff',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: props => <ProfileIcon {...props} /> }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: props => <HomeIcon {...props} /> }}
      />
      <Tab.Screen
        name="User"
        component={Users}
        options={{ tabBarIcon: props => <UserIcon {...props} /> }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#131212ff',
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
  },
});
