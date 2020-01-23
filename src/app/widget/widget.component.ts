import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  signupForm: FormGroup;
  formSubmitted;

  tripType = ['One way', 'Return', 'Multi city' , 'Flight + Hotel'];
  constructor() { }

  ngOnInit() {
    this.formSubmitted = false;
    this.signupForm = new FormGroup ({
      'fname' : new FormControl(null, Validators.required),
      'lname' : new FormControl(null, Validators.required),
      'subject' : new FormControl(null, Validators.required),
      'phone' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'message' : new FormControl(null)
    });
  }

  onSubmit() {
    const formdata = this.signupForm.value;
    console.log(formdata); 
  }

}
