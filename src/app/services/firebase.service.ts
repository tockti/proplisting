import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class FirebaseService {
///////ขั้นตอนการเรียกใช้  ดรพำิฟหำ
//กำหนดค่า
listings: FirebaseListObservable<any[]>;
listing: FirebaseObjectObservable<any[]>;
//////
  constructor(private af: AngularFire) {}
    
    getListings(){
      //item ตือ  database จาห af จากตาราง item
      //งง  เอาfirebaseObserve มาทำไม
        this.listings = this.af.database.list('/book') as FirebaseListObservable<Listing[]>;
       
        return this.listings;
    }
    getListingDetails(id){
        this.listing = this.af.database.object('book/'+id) as FirebaseObjectObservable<Listing>;
        return this.listing;
}
}//close
 
interface Listing{
  $key? : string;
  title? : string;
  Authr? : string;
}
