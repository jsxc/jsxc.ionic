import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import $ from "jquery";
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bosh="";
  domain="";
  username="";
  password="";

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('bosh').then((val) => {
      this.bosh=val;
      $('#bosh').val(val);
    });  
    this.storage.get('domain').then((val) => {
      this.domain=val;
      $('#domain').val(val);
    }); 
    this.storage.get('username').then((val) => {
      this.username=val;
      $('#username').val(val);
    }); 
    this.storage.get('password').then((val) => {
      this.password=val;
      $('#password').val(val);
    }); 
    
  }

    public schedule() {

      // Schedule a single notification
      //   this.localNotifications.schedule({
      //   id: 1,
      //   text: 'Hello, World!',
      //   sound: null
      // });
      console.log(this.bosh)
  }

}
