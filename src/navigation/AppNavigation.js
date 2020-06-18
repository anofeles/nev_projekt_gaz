import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { TopNavigation } from './TopNavigation';

export const AppNavigation = () => {
    // return (<View>
    //     <Text>11111111111</Text>
    // </View>);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TopNavigation />
      </NavigationContainer>
    </View>
  );
};
