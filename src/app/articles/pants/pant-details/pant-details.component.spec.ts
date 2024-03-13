import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantDetailsComponent } from './pant-details.component';

describe('PantDetailsComponent', () => {
  let component: PantDetailsComponent;
  let fixture: ComponentFixture<PantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
