import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController } from 'ionic-angular';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  public addresses : any[] = [1,2];
  constructor(public navCtrl: NavController, public navParams: NavParams ,
             public popoverCtrl : PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }
  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create("AddressActionPage",{},{cssClass: 'address-popover'});
    popover.present({
      ev:myEvent
    });
  }
  goToAddAddress(){
    this.navCtrl.push("AddressAddPage");
  }

}
