import { Component, inject } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { items } from '../navigation';
import { RouterModule } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { matLogInOutline } from '@ng-icons/material-icons/outline';
import { NgIconComponent } from '@ng-icons/core';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterModule, NgIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  _dialogService = inject(DialogService);
  dialogState: boolean | undefined;
  items: MenuItem[] | undefined;
  icon = matLogInOutline;

  ngOnInit() {
    this.items = items;
    this._dialogService.$isDialogOpen.subscribe(
      (dialogState) => (this.dialogState = dialogState)
    );
  }

  openLoginModal(bool: boolean) {
    this._dialogService.showDialog(bool);
  }
}
