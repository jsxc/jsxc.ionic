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
    domain:"",
    username:"",
    password:""
  }
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
  

  ionViewDidLoad() {
    this.storage.get('bosh').then((val) => {
      if (val!=null){
        this.navCtrl.push(HomePage);
      }
    });
  }

  public navigateToHome() {
    this.storage.set('bosh',this.parameters.bosh);
    this.storage.set('domain',this.parameters.domain);    
    this.storage.set('username',this.parameters.username);    
    this.storage.set('password',this.parameters.password); 
    this.navCtrl.push(HomePage);
  }

}
