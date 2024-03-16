import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Shoe } from '../../../models/shoe.model';
import { ShoeService } from '../../../services/shoe.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CanExit } from '../../../models/guard-interface';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FloatLabelModule,
  ],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss',
})
export class EditArticleComponent implements CanExit {
  isDirty(): boolean {
    if (this.editForm) return this.editForm.touched;

    return false;
  }
  private _shoeService = inject(ShoeService);
  private _formBuilder = inject(FormBuilder);
  editForm: FormGroup | null = null;
  shoe: Shoe | null = null;

  ngOnInit() {
    this.shoe = this._shoeService.shoeToEdit();
    this.editForm = this._formBuilder.group({
      modelName: [''],
      price: [''],
      description: [''],
      discount: [''],
    });
    if (this.shoe) this.editForm.patchValue(this.shoe);
  }
}
