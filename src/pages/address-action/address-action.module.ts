import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressActionPage } from './address-action';

@NgModule({
  declarations: [
    AddressActionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressActionPage),
  ],
})
export class AddressActionPageModule {}
