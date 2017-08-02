import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';


import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',
  host: {
    '(document:message.jsxc)': 'onKeyUp($event)'
  }
})



export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundMode: BackgroundMode, private localNotifications: LocalNotifications) {


    // document.addEventListener('message.jsxc', function () {
    //   console.log('try');
    // })

    platform.ready().then(() => {



      backgroundMode.configure({

        text: 'JSXC is running in the background'
      });
      backgroundMode.enable();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


