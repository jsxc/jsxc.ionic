import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { LoginFailPage } from '../login-fail/login-fail';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private storage: Storage) {
  }

  ionViewDidLoad() {
    let store = this.storage;
    let nv = this.navCtrl;
    document.addEventListener('ionic.disconnected', function(e){
      store.set('works',null); 
      let login_error = new CustomEvent('login.fail',{detail: "unkwown"});
      document.dispatchEvent(login_error);
      nv.push(LoginFailPage); 
    });
    this.storage.get('bosh').then((bosh) => {
      this.storage.get('username').then((username) => {
        this.storage.get('password').then((password) => {
          let login_details = {bosh:bosh,
                               username:username,
                               password:password}
          let login_event = new CustomEvent('login.trigger',{detail: login_details});
          document.dispatchEvent(login_event);
        }); 
      }); 
    });  
    
    

  }


}
