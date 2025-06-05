import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

    checkoutForm : FormGroup;

    constructor(private fb: FormBuilder){
      this.checkoutForm = this.fb.group({
        fname : ['', Validators.required],
        lname: ['', Validators.required],
        address : ['', Validators.required],
        email : ['',[Validators.required, Validators.email]]
      });
    }

    onSubmit(){
      if(this.checkoutForm.valid){
        console.log('Form Submitted', this.checkoutForm.value);
        alert('order Places Successful');
        this.checkoutForm.reset();
      }
      else{
        alert('please fill all fields correctly');
      }
    }
}
