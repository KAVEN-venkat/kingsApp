import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WelcomePage } from './welcome/welcome.page';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { CustomerService } from 'src/app/services/customer.service';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'people'
    },
    {
      title: 'Items',
      url: '/ticket',
      icon: 'bookmark'
    },
    {
      title: 'Customers',
      url: '/user',
      icon: 'people'
    },
    {
      title: 'Sale',
      url: '/sale',
      icon: 'briefcase'
    },
    {
      title:'Schemes',
      url:'/luckyprice',
      icon:'shapes'
    },
    {
      title:'Result',
      url:'/winners',
      icon:'trophy'
    },
    {
      title:'Statement',
      url:'/result',
      icon:'documents'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];
  
  UniqueDeviceID:string;
  userName:string;
  email: string;
  img_url:String;
  image: string;
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private uniqueDeviceID: UniqueDeviceID,
    private uid: Uid,
    private androidPermissions: AndroidPermissions,
    private customerService: CustomerService,
    private env: EnvService,
    private authService:AuthService,
  ) {
    this.img_url = this.env.IMG_URL;
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.authService.authState.subscribe(state => {
        console.log("State:- "+state);
        if (state) {
          if (localStorage.getItem("user_detail")) {
            let user = JSON.parse(localStorage.getItem("user_detail")).user;
            this.userName = user['first_name'] + " " + user['last_name'];
            this.email = user['email'];
            this.img_url = this.env.IMG_URL;
            if (user['photo']!=null) {
              this.image = this.img_url + "" + user['photo'];
            } else {
              this.image = this.img_url + "images/no_img.png";
            }
          }
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['']);
        }
      });
    
      if (this.platform.is('android')) {
          console.log("running on Android device!");
      }
      if (this.platform.is('ios')) {
          console.log("running on iOS device!");
      }
      if (this.platform.is('mobileweb')) {
          console.log("running in a browser on mobile!");
      }
      this.getPermission();
      this.getUniqueDeviceID();
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.backButton.subscribe(()=>{
        console.log ('exit:-'+window.location.pathname);
        if (window.location.pathname == "/login" || window.location.pathname == "/otp" || window.location.pathname == "/register") {
            this.navCtrl.navigateRoot('/');
          }else if (window.location.pathname == "/forgot" || window.location.pathname == "/reset") {
            this.navCtrl.navigateRoot('/login');
          }else{
            navigator['app'].exitApp();
          }      
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  goToEditProfile() {
    let user = JSON.parse(localStorage.getItem('user_detail')).user;
    this.navCtrl.navigateRoot('/profile/'+user.id);
  }

  getPermission(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
      if(res.hasPermission){
        
      }else{
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
          console.log(this.getID_UID('IMEI'));
          console.log("Persmission Granted Please Restart App!");
        }).catch(error => {
          console.log("Error! "+error);
        });
      }
    }).catch(error => {
      console.log("Error! "+error);
    });
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get().then((uuid: any) => {
      console.log(uuid);
      this.UniqueDeviceID = uuid;
    }).catch((error: any) => {
      console.log(error);
      this.UniqueDeviceID = "Error! ${error}";
    });
  }


  getID_UID(type){
    if(type == "IMEI"){
      return this.uid.IMEI;
    }else if(type == "ICCID"){
      return this.uid.ICCID;
    }else if(type == "IMSI"){
      return this.uid.IMSI;
    }else if(type == "MAC"){
      return this.uid.MAC;
    }else if(type == "UUID"){
      return this.uid.UUID;
    }
  }

  logout(){
    localStorage.removeItem('user_detail');
    if(!localStorage.getItem('user_detail')){
        //this.navCtrl.navigateRoot('/');
      this.router.navigate(['']);
    }else{
      this.router.navigate(['home']);
    }
  }
}
