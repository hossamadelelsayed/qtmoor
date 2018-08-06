import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPhonePage } from './verify-phone';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VerifyPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyPhonePage),
    ComponentsModule
  ],
})
export class VerifyPhonePageModule {}
