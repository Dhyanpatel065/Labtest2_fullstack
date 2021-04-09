import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MissionlistService {
  url ="https://api.spacexdata.com/v3/launches"

  constructor(private http:HttpClient) { }
  getmissionlist()
  {
    return this.http.get(this.url);
  }
}
