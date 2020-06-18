import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButton, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

import { BottomNavigation } from './BottomNavigation';
import { Gmap } from '../components/Gmap';
import { Info } from '../screen/Info';
import { notifPhoto } from '../components/notifPhoto';

export const TopNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="post" component={Info} />
      <Stack.Screen name="Gmap" component={Gmap} />
      <Stack.Screen name="NotifPhoto" component={notifPhoto} />
    </Stack.Navigator>
  );
};
