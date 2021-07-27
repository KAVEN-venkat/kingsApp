import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TypePageModule } from './modals/type/type.module';
import { CustomerPageModule } from './modals/customer/customer.module';
import { ItemPageModule } from './modals/item/item.module';
import { ItempricePageModule } from './modals/itemprice/itemprice.module';
import { LuckyPageModule } from './modals/lucky/lucky.module';
import { WinnerPageModule } from './modals/winner/winner.module';
import { ResultlistPageModule } from './resultlist/resultlist.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Storage } from '@ionic/storage';

import { AuthGuard } from 'src/app/services/AuthGuard.service';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TypePageModule,
    CustomerPageModule,
    ItemPageModule,
    ItempricePageModule,
    LuckyPageModule,
    WinnerPageModule,
    ResultlistPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    NativeStorage,
    File,
    Camera,
    Base64,
    WebView,
    UniqueDeviceID,
    Uid,
    AndroidPermissions,
    Storage,
    AuthGuard,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
