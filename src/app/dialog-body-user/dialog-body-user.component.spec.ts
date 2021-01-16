import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogBodyUserComponent } from './dialog-body-user.component';

describe('DialogBodyUserComponent', () => {
  let component: DialogBodyUserComponent;
  let fixture: ComponentFixture<DialogBodyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBodyUserComponent ],
      imports : [ ReactiveFormsModule, MatDialogModule ],
      providers: [
        { 
        provide: MatDialogRef,
        useValue: []
         }, 
        { 
        provide: MAT_DIALOG_DATA, 
        useValue: [] 
        }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBodyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
