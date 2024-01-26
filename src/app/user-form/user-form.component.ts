import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
   userForm: FormGroup = this.formBuilder.group({
      name: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      address: this.formBuilder.group({
         street: this.formBuilder.control(""),
         number: this.formBuilder.control(0),
         postalCode: this.formBuilder.control("")
      })
   });

   constructor(private userFormContainer: ControlContainer, private formBuilder: FormBuilder) { }

   ngOnInit(): void {
      this.userForm = this.userFormContainer.control as FormGroup;
   }
}
