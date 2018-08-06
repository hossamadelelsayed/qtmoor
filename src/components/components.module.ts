import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo';
import { IonicPageModule } from 'ionic-angular';
import { NavbarDefaultComponent } from './navbar-default/navbar-default';
@NgModule({
	declarations: [LogoComponent,
    NavbarDefaultComponent],
	imports: [
		IonicPageModule.forChild(ComponentsModule)
	],
	exports: [LogoComponent,
    NavbarDefaultComponent]
})
export class ComponentsModule {}
