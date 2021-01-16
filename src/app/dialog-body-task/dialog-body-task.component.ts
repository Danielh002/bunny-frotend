import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-body-task',
  templateUrl: './dialog-body-task.component.html',
  styleUrls: ['./dialog-body-task.component.css']
})
export class DialogBodyTaskComponent implements OnInit {

  form: FormGroup;
  description: string = '';
  states = ["TO-DO", "DONE"]
  selectedvalue: string = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogBodyTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form = this.fb.group({
      description: data.description?? '',
      selectedvalue: data.state ?? ''
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
