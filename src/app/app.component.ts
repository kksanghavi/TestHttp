import { Component } from '@angular/core';
import {HTTPService} from './HTTPService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HTTPService]
})
export class AppComponent {
  _httpService: HTTPService;
  title = 'My First Angular App ';

  constructor(httpService: HTTPService){
    this._httpService = httpService;
  }

  OnClick(){
    //alert("OnClick --- START");

    this._httpService.ExecuteRequest();

    //alert("OnClick --- END");
  }
}
