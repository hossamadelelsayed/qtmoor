import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPasswordPage } from './new-password';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPasswordPage),
    ComponentsModule
  ],
})
export class NewPasswordPageModule {}
