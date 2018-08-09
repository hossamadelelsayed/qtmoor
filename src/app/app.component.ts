import { Component ,ViewChild  } from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "CategoryPage";
  @ViewChild(Nav) nav: Nav;
  profilePages: Array<{ title: string, component: any, icon: string , active: number }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.initList();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      platform.setDir('rtl', true);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  initList(){
    this.profilePages = [
      { title: 'الرئيسية', component: "HomePage", icon: 'ios-home-outline',active: 1},
      { title: 'طلباتى', component: "MyordersPage", icon: 'ios-paper-outline',active: 0},
      { title: 'المفضلة', component: "FavoritePage" , icon: 'ios-heart-outline',active: 0},
      { title: 'العناوين', component: "AddressPage" , icon: 'ios-map-outline',active: 0},
      { title: 'الملف الشخصى', component: "ProfilePage" , icon: 'ios-person-outline',active: 0},
      { title: 'صفحات فرعية', component: null , icon: 'ios-copy-outline',active: 0},
      { title: 'اتصل بنا', component: "ContactUsPage" , icon: 'ios-chatbubbles-outline',active: 0} 
    ];
  }
  setActiveItem(index : number){
    for(let i=0;i<this.profilePages.length;i++){
      if(i == index)
      this.profilePages[i].active = 1;
      else this.profilePages[i].active = 0;
    }
  }
  openPage(index : number){
    this.setActiveItem(index);
    this.nav.setRoot(this.profilePages[index].component);
  }
}

