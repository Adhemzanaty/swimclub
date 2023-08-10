import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  arr =['home', 'aloooo']

  data: any[] = [];
  
    constructor(private _dataService: DataService ) {
  
      this._dataService.getJsonData().subscribe((res : any) => {
        this.data = res;
    });
  
  
     }
  
}
