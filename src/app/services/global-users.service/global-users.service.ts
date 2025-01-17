import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from 'src/app/backendUrl';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalUsersService {

  eventParticipantsFetchTrigger = new Subject()
  eventUserFetchTrigger = new Subject()

  constructor(private http: HttpClient) { }


  getGlobalListOfUsers() {
    return this.http.get(backendUrl+"/fetch_participants");
  }

  getEventSpecificParticipantList(eventName: any){
    return this.http.get(backendUrl+'/fetch_event_participants/'+eventName)
  }

  addGuestParticipant(guestUserName: string){
    return this.http.post(backendUrl+"/add_guest_user",{"Username": guestUserName})
  }

}
