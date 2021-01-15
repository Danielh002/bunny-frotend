import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBodyTaskComponent } from './dialog-body-task.component';

describe('DialogBodyTaskComponent', () => {
  let component: DialogBodyTaskComponent;
  let fixture: ComponentFixture<DialogBodyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBodyTaskComponent ]
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
