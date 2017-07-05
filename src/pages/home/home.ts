import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import $ from "jquery";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {
    $(document).on("message.jsxc",function(){
      console.log("something");
    })
    console.log("here");
  }

    public schedule() {

      // Schedule a single notification
      this.localNotifications.schedule({
      id: 1,
      text: 'Hello, World!',
      sound: null
  });
  }

}
