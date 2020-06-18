import React from 'react';
import * as Permissions from 'expo-permissions';
import { Alert, View, StyleSheet, Text } from 'react-native';
import { Notifications } from 'expo';
import { useSelector, useEffect, useDispatch } from 'react-redux';
import { tokenNotif } from '../stor/actopns/post';

export const notifPhoto = () => {
  const dispach = useDispatch();
  const notif = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        Alert.alert('No notification permissions!', 'not notif');
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      dispach(tokenNotif(token));
    } catch (e) {
      console.loge('error', e);
    }
  };

  notif();
  return (
    <View style={styles.raw}>
      <Text>MyInfo</Text>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
