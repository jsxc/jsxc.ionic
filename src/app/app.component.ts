import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';


import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundMode: BackgroundMode, private localNotifications: LocalNotifications) {
    
      public schedule() {
    // Schedule a single notification
    this.localNotifications.schedule({
    id: 1,
    text: 'Hello, World!',
    sound: null
});
}
    
    platform.ready().then(() => {



      backgroundMode.enable();
      setTimeout(function () {
                  // Modify the currently displayed notification
                  backgroundMode.configure({
                      text:'Running in background for more than 5s now.'
                  });
              }, 5000);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


