import { Component, Input  } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'dinamic',
  templateUrl: './dinamic.component.html',  
})
export class DinamicComponent  {

  @Input() parentForm:FormGroup;
  name = 'Dinamic';
}
