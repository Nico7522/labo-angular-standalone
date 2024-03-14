import { Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogService } from '../../services/dialog.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { hasErrorAndTouched } from '../../utils/utils';
import { MessagesModule } from 'primeng/messages';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  _dialogService = inject(DialogService);
  _messageService = inject(MessageService);
  private _emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private _pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  _formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;
  formHasErrorAndTouched = hasErrorAndTouched;

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this._emailRegex),
        ],
      ],
      password: ['', [Validators.required, Validators.pattern(this._pswRegex)]],
    });
  }
  closeDialog() {
    this._dialogService.showDialog(false);
  }

  login() {
    this._messageService.add({
      severity: 'success',
      summary: 'Bienvenue !',
      detail: 'Connecté',
    });
    this._dialogService.showDialog(false);
  }
}
