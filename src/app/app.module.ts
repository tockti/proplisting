import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,  Routes} from '@angular/router';

//// เพิ่มมาเอง
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

//

import { AppComponent } from './app.component';
import { HomeComponent } from './compomemts/home/home.component';
import { ListingsComponent } from './compomemts/listings/listings.component';
import { NavbarComponent } from './compomemts/navbar/navbar.component';
import { ListingComponent } from './compomemts/listing/listing.component';
import { AddListingComponent } from './compomemts/add-listing/add-listing.component';
import { EditListingComponent } from './compomemts/edit-listing/edit-listing.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'listing/:id', component:ListingComponent},
  {path: 'add-listing', component:AddListingComponent}

]
/// เพิ่มมาจาก firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSe3p1dLtmkssEIOGrTZz80hrz5udwT3U",
    authDomain: "project--2040148928369288548.firebaseapp.com",
    databaseURL: "https://project--2040148928369288548.firebaseio.com",
    projectId: "project--2040148928369288548",
    storageBucket: "project--2040148928369288548.appspot.com",
    messagingSenderId: "823010642150"
};
///

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ////เพิ่มเอง
  //1. Router angular
    RouterModule.forRoot(appRoutes),
  //2. firebase config
  AngularFireModule.initializeApp(firebaseConfig)
  ///////
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
