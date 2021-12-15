/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Message handled in the background!', remoteMessage);
        //  여기에 로직을 작성한다.
        //  remoteMessage.data로 메세지에 접근가능
        //  remoteMessage.from 으로 topic name 또는 message identifier
        //  remoteMessage.messageId 는 메시지 고유값 id
        //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
        //  remoteMessage.sentTime 보낸시간
        });
        
AppRegistry.registerComponent(appName, () => App);
