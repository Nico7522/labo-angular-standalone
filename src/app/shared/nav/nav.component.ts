import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { items } from '../navigation';
import { RouterModule } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  _dialogService = inject(DialogService);
  dialogState: boolean | undefined;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = items;
    this._dialogService.$isDialogOpen.subscribe(
      (dialogState) => this.dialogState
    );
  }

  openLoginModal(bool: boolean) {
    this._dialogService.showDialog(bool);
  }
}
