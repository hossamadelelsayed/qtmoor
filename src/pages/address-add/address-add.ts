import { Component , ViewChild  ,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-address-add',
  templateUrl: 'address-add.html',
})
export class AddressAddPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public lat : number = 21.4858 ;
  public lng : number = 39.1925;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressAddPage');
    this.loadMap();
  }
  loadMap() {
    let latLng = new google.maps.LatLng(this.lat, this.lng);
     let mapOptions = {
     center: latLng,
     zoom: 16,
     mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(latLng);
    this.addMarker(this.map.getCenter());
  }
  addMarker(LatLng){
    let marker  = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: LatLng
    });
    let content = "<h4>Location!</h4>";
    // this.addInfoWindow(marker, content);
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map,marker);
  }
}
