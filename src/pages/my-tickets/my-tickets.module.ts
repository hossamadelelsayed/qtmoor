import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTicketsPage } from './my-tickets';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTicketsPage),
    ComponentsModule
    ],
})
export class MyTicketsPageModule {}
