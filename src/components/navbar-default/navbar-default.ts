import { Component , Input} from '@angular/core';
import { MenuController } from 'ionic-angular';

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


  constructor(public menuCtrl : MenuController ) {
    console.log('Hello NavbarDefaultComponent Component');
  }
  toggleMenu() {
    this.menuCtrl.toggle("rightmenu");
  }
}