import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogBodyTaskComponent } from './dialog-body-task.component';

describe('DialogBodyTaskComponent', () => {
  let component: DialogBodyTaskComponent;
  let fixture: ComponentFixture<DialogBodyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBodyTaskComponent ],
      imports : [ HttpClientModule, ReactiveFormsModule, MatDialogModule ],
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
    fixture = TestBed.createComponent(DialogBodyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
