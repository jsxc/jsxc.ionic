import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  homePage = HomePage;
  parameters={
    bosh:"",
    username:"",
    password:""
  }
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
  

  ionViewDidLoad() {
    this.storage.set('navigated',null);    
    this.storage.get('works').then((val) => {
      if (val!=null){
        this.navCtrl.push(HomePage);
      } else {
        this.storage.get('bosh').then((bosh) => {
          this.storage.get('username').then((username) => {
            this.storage.get('password').then((password) => {
              this.parameters.bosh = bosh;
              this.parameters.username = username;
              this.parameters.password = password;
            }); 
          }); 
        }); 
      }
    });
  }

  public navigateToHome() {
    this.storage.set('bosh',this.parameters.bosh);
    this.storage.set('username',this.parameters.username);    
    this.storage.set('password',this.parameters.password); 
    this.storage.set('works',"true"); 
    this.navCtrl.push(HomePage);
  }

}
