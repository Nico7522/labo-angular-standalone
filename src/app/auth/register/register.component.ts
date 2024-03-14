import { Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { hasErrorAndTouched } from '../../utils/utils';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    ReactiveFormsModule,
    PasswordModule,
    MessagesModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _formBuilder = inject(FormBuilder);
  private _httpClient = inject(HttpClientModule);
  registerForm!: FormGroup;
  private _emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private _pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  formHasErrorAndTouched = hasErrorAndTouched;
  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this._emailRegex),
        ],
      ],
      birthdate: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(this._pswRegex)]],
    });
  }

  createAccount() {
    if (this.registerForm?.valid) {
      console.log(this.registerForm?.get('phoneNumber')?.value);
    } else {
      console.log(this.registerForm?.errors);
    }
  }
}
