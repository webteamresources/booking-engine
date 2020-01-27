import { Component, OnInit, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit{
    
ngOnInit() {
    
}

private users = [{flightWay:"One Way", fromDestination:"Delhi", toDestination:"Mumbai"}];

getUsers()
{
  return this.users.slice();
}

addUser(user) {
    this.users.push(user);
    console.log(this.users);
}


}