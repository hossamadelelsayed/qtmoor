import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgetPassVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-pass-verify',
  templateUrl: 'forget-pass-verify.html',
})
export class ForgetPassVerifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassVerifyPage');
  }
  goToNewPassword(){
    this.navCtrl.push("NewPasswordPage");
  }

}
