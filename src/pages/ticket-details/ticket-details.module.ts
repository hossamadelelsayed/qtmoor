import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketDetailsPage } from './ticket-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TicketDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketDetailsPage),
    ComponentsModule
  ],
})
export class TicketDetailsPageModule {}
