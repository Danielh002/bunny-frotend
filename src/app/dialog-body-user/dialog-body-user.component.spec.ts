import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBodyUserComponent } from './dialog-body-user.component';

describe('DialogBodyUserComponent', () => {
  let component: DialogBodyUserComponent;
  let fixture: ComponentFixture<DialogBodyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBodyUserComponent ]
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
