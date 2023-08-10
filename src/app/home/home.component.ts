import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  arr =['home', 'aloooo']

data: any[] = [];

  constructor(private _dataService: DataService ) {

    this._dataService.getJsonData().subscribe((res : any) => {
      this.data = res;
  });


   }

ngOnInit(){

}


}
