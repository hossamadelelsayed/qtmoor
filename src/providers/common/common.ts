import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  public iconEmpty: string = 'star-outline';
  public iconFull: string = 'star';
  constructor() {
    console.log('Hello CommonProvider Provider');
  }
  // Rate Service
  public icons(rate : number): string[] {
    let icons = [];
    for (let i = 1; i <= rate; i++) {
        icons.push(this.iconFull);
    }
    return icons;
  }
}
