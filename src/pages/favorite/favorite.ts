import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  public favorites :any[] = [1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public commonProvider : CommonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

}
