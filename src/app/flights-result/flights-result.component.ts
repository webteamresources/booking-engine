import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-flights-result',
  templateUrl: './flights-result.component.html',
  styleUrls: ['./flights-result.component.css']
})
export class FlightsResultComponent implements OnInit {
  constructor(private UserService: UserService) { }
  userLength;
  user;
  index: number = 0;
  users = this.UserService.getUsers();
  

  ngOnInit() {
    console.log(this.users);     
    this.userLength = this.users.length;
    for( let i=0; i<this.userLength; i++)
        {
          if(this.users[i]){           
            this.index=i;
            break;
          };
        }
    this.user = this.users[this.index];   

  }

}
