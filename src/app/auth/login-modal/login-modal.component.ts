import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from '../../services/dialog.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule, LoginComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
  _dialogService = inject(DialogService);
  visible: boolean = false;

  ngOnInit() {
    this._dialogService.$isDialogOpen.subscribe(
      (dialogState) => (this.visible = dialogState)
    );
  }

  closeDialog() {}
}
