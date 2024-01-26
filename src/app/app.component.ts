import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'} }
   ]
})
export class AppComponent {
   title = 'angular-custom-form-groups';

   userForm: FormGroup = this.formBuilder.group({
      name: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      address: this.formBuilder.group({
         street: this.formBuilder.control(""),
         number: this.formBuilder.control(0),
         postalCode: this.formBuilder.control("")
      })
   });

   constructor(private formBuilder: FormBuilder) { }

   onSubmit(): void {
      console.log(this.userForm.value);
   }
}
