import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';

@Component({
   selector: 'app-address',
   templateUrl: './address.component.html',
   styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
   addressForm: FormGroup = this.formBuilder.group({
      street: this.formBuilder.control(""),
      number: this.formBuilder.control(0),
      postalCode: this.formBuilder.control("")
   });

   constructor(private addressFormContainer: ControlContainer, private formBuilder: FormBuilder) { }

   ngOnInit(): void {
      this.addressForm = this.addressFormContainer.control as FormGroup;
   }
}
