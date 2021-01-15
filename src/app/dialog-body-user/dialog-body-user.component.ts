import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body-user',
  templateUrl: './dialog-body-user.component.html',
  styleUrls: ['./dialog-body-user.component.css']
})
export class DialogBodyUserComponent implements OnInit {

  form: FormGroup;
  userName: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogBodyUserComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.userName = data.userName;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: '',
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
