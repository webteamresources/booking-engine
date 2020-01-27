import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  formSubmitted;
  element = true;
  
  tripType = ['One Way', 'Return', 'Multi city' , 'Flight + Hotel'];

  constructor(private router: Router, private route: ActivatedRoute, private UserService: UserService) { }

  ngOnInit() {
    this.formSubmitted = false;
  }
  
  flightWayEl(event) {
    if(event){
      this.element = event;
    }
  }

  onSubmit(widgetForm:NgForm) {
    const formdata = widgetForm.value;
    this.UserService.addUser(formdata);
    this.router.navigate(['flight-result'], {relativeTo: this.route});
    console.log(formdata);
  }

}
