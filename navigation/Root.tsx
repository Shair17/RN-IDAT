import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

export type StackRootParams = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackRootParams>();

export const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
