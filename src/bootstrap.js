import { useDispatch } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { loadPosts } from './stor/actopns/post';

export async function Bootstrap() {
  const dispach = useDispatch();
  try {
    const notif = async () => {
      try {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (status !== 'granted') {
          Alert.alert('No notification permissions!', 'not notif');
          return;
        }

        const token = await Notifications.getExpoPushTokenAsync();
        dispach(loadPosts(token));
      } catch (e) {
        console.loge('error', e);
      }
    };
    notif();
  } catch (e) {
    console.log('bootstrap: ', e);
  }
}
