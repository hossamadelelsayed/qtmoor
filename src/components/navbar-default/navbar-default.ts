import { Component , Input} from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

/**
 * Generated class for the NavbarDefaultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar-default',
  templateUrl: 'navbar-default.html'
})
export class NavbarDefaultComponent {

  @Input() title : string  ;
  @Input() displayCart : boolean = false ;
  @Input() displayMenu : boolean = true ;


  constructor(public menuCtrl : MenuController , public navCtrl : NavController) {
    console.log('Hello NavbarDefaultComponent Component');
  }
  toggleMenu() {
    this.menuCtrl.toggle("rightmenu");
  }
  goToCart(){
    this.navCtrl.push("CartPage");
  }
}
