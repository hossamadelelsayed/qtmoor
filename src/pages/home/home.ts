import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public categories : any[] = [1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public commonProvider : CommonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
