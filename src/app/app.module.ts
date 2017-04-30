import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Import the AF2 Module 
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// AF2 Settings 
export const firebaseConfig = {   
	apiKey: "AIzaSyC47asozrrZhagdM7lk4Mg44Vsclbc3Dbo",
    authDomain: "af2app-11bd2.firebaseapp.com",
    databaseURL: "https://af2app-11bd2.firebaseio.com",
    projectId: "af2app-11bd2",
    storageBucket: "af2app-11bd2.appspot.com",
    messagingSenderId: "931208015516"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
