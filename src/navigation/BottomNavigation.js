import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tasck } from '../screen/Tasck';
import { MyTasks } from '../screen/MyTasks';
import { AddOrder } from '../screen/AddOrder';
import { MyInfo } from '../screen/MyInfo';

export const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasck" component={Tasck} />
      <Tab.Screen name="MyTasks" component={MyTasks} />
      <Tab.Screen name="AddOrder" component={AddOrder} />
      <Tab.Screen name="MyInfo" component={MyInfo} />
    </Tab.Navigator>
  );
};
