import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-dinamic2',
  templateUrl: './dinamic2.component.html',
  styleUrls: ['./dinamic2.component.css']
})
export class Dinamic2Component implements OnInit {

  parentForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.parentForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    });
    this.parentForm.valueChanges.subscribe(newVal=>console.log(newVal));
  }

}