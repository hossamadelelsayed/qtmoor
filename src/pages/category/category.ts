import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public products : any[] = [1,2,3];
  constructor(public navCtrl: NavController, public navParams: NavParams , public commonProvider : CommonProvider ,
              public actionSheetCtrl : ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'ترتيب حسب',
      buttons: [
        {
          text: 'السعر تصاعديا',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'السعر تنازليا',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'أحدث المنتجات',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'الأعلى تقييما',
          handler: () => {
            console.log('Destructive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
