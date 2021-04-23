import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryModel } from '../models/country.model';
import { PaymentService } from '../service/payment.service';
import * as user_reducer from '../store/reducers/user.reducer';
import * as user_action from '../store/actions/user_data.action';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  countries: CountryModel[] = [];

  userForm: FormGroup;

  constructor(
    private paymentService: PaymentService,
    private store: Store<user_reducer.userState>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]*$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      budget: [null, Validators.required],
      country: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^([0-9\(\)\/\+ \-]*)$/)],
      ],
    });
  }

  ngOnInit(): void {
    this.getCountries();
  }

  get firstName(): AbstractControl {
    return this.userForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.userForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.userForm.get('email');
  }

  get budget(): AbstractControl {
    return this.userForm.get('budget');
  }

  get country(): AbstractControl {
    return this.userForm.get('country');
  }

  get phone(): AbstractControl {
    return this.userForm.get('phone');
  }

  // method to get the list of countries to populate country dropdown
  public getCountries(): void {
    this.paymentService.getCountries().subscribe((country) => {
      this.countries = country;
    });
  }

  // method to trigger the notifier
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  saveUserInformation(): void {
    const payload: UserModel = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      budget: this.budget.value,
      country: this.country.value,
      phone: this.phone.value,
    };

    this.paymentService.saveUserInformation(payload).subscribe((_) => {
      this.userForm.reset();
      this.openSnackBar('User created successfully!!!');
      this.store.dispatch(new user_action.AddUserInformation(payload));
      this.router.navigate(['/']);
    });
  }
}
