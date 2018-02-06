import { Component } from '@angular/core';
import {User} from './model/user'
import {DirectionEnum} from './model/directionEnum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//ngFor
export class AppComponent {
  users = [
    new User ('Mahesh', 22),
    new User ('Krishna', 44),
    new User ('Naren', 55)
  ]

  //ngSwitch
  dirEnum = DirectionEnum;
  myDir = DirectionEnum.North;

  //ngIf
  isValid = false;
  version = 2;
  IsLatestVersion = true;
}
