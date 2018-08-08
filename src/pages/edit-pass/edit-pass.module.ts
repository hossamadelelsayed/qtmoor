import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPassPage } from './edit-pass';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditPassPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPassPage),
    ComponentsModule
  ],
})
export class EditPassPageModule {}
