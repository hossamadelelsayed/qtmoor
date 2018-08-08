import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTicketPage } from './add-ticket';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AddTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTicketPage),
    ComponentsModule
  ],
})
export class AddTicketPageModule {}
