import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      // testPush();
      props.navigation.navigate('SignIn');
    }, 1000);

    // setInterval(() => {
    //   testPush();
    // }, 3000);
    // test();
  });

  const test = () => {
    PushNotification.configure({
      onRegister: function (token) {
        alert('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        PushNotification.cancelAllLocalNotifications();
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    testSedule();
  };

  const testSedule = () => {
    PushNotification.localNotificationSchedule({
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 1 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    });
  };
  const testPush = () => {
    PushNotification.localNotification({
      id: 0,
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  return <View />;
};

export default Splash;
