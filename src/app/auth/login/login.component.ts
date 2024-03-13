import { Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogService } from '../../services/dialog.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  _dialogService = inject(DialogService);
  _messageService = inject(MessageService);

  closeDialog() {
    this._dialogService.showDialog(false);
  }

  login() {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Connecté',
    });
    this._dialogService.showDialog(false);
  }
}
