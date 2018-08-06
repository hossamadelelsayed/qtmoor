import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPassVerifyPage } from './forget-pass-verify';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ForgetPassVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPassVerifyPage),
    ComponentsModule
  ],
})
export class ForgetPassVerifyPageModule {}
