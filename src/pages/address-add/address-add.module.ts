import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressAddPage } from './address-add';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AddressAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressAddPage),
    ComponentsModule
  ],
})
export class AddressAddPageModule {}
