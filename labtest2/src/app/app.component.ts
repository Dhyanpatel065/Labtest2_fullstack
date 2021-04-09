import { Component } from '@angular/core';
import {MissionlistService} from './missionlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  title = 'id101179309-labtest2-comp3133';

  constructor(private missionlistData: MissionlistService){

  }

  ngOnInit()
  {
    this.missionlistData.getmissionlist().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }
}
