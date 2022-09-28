import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export default class CheckoutComponent implements OnInit {
  checkoutForm: any;
  constructor(private formbuilder: FormBuilder, private router: Router) {
    checkoutForm: FormGroup;
  }

  ngOnInit(): void {
    this.checkoutForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }
  onsubmit() {
    alert('Your order has been placed');
    this.router.navigateByUrl('/');
  }

  get firstName() {
    return this.checkoutForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.checkoutForm.get('lastName') as FormControl;
  }
  get email() {
    return this.checkoutForm.get('email') as FormControl;
  }
  get mobile() {
    return this.checkoutForm.get('mobile') as FormControl;
  }
  get address() {
    return this.checkoutForm.get('address') as FormControl;
  }
  get country() {
    return this.checkoutForm.get('country') as FormControl;
  }
}
