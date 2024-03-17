import {
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { items } from '../navigation';
import { RouterModule } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { matLogInOutline } from '@ng-icons/material-icons/outline';
import { bootstrapPersonAdd } from '@ng-icons/bootstrap-icons';
import { NgIconComponent } from '@ng-icons/core';
import { TokenService } from '../../services/token.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterModule, NgIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private _dialogService = inject(DialogService);
  private _tokenService = inject(TokenService);
  private _cartService = inject(CartService)
  dialogState: boolean | undefined;
  items: MenuItem[] | undefined;
  loginIcon = matLogInOutline;
  registerIcon = bootstrapPersonAdd;
  isLogged: boolean | undefined;
  isAdmin: boolean | null = null;
  cartLength: number = 0;

  constructor() {
    effect(() => {
      this.isLogged = this._tokenService.tokenSignal();
      this.isAdmin = this._tokenService.checkIsAdmin();
      this.cartLength = this._cartService.cartLength()
    });
  }
  ngOnInit() {
    this.items = items;
    this._dialogService.$isDialogOpen.subscribe(
      (dialogState) => (this.dialogState = dialogState)
    );
  }

  openLoginModal(bool: boolean) {
    this._dialogService.showDialog(bool);
  }

  logout() {
    localStorage.removeItem('token');
    this._tokenService.signalTokenExist();
  }
}
