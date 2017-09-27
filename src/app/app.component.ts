import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Autostart } from '@ionic-native/autostart';


import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',
  host: {
    '(document:message.jsxc)': 'onKeyUp($event)'
  }
})



export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundMode: BackgroundMode, private localNotifications: LocalNotifications, private autostart: Autostart) {


    // document.addEventListener('message.jsxc', function () {
    //   console.log('try');
    // })

    platform.ready().then(() => {
     
      backgroundMode.configure({
        silent:true
      });
      backgroundMode.enable();
      platform.registerBackButtonAction(() => {
        backgroundMode.moveToBackground();  
      });
      this.autostart.enable();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


