import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from '@angular/material/list';
import { UsersListComponent } from './users-list/users-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from "@angular/material/icon";
import { TaskListComponent } from './task-list/task-list.component'; 
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DialogBodyTaskComponent } from './dialog-body-task/dialog-body-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyUserComponent } from './dialog-body-user/dialog-body-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TaskListComponent,
    DialogBodyTaskComponent,
    DialogBodyUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    ScrollingModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyUserComponent,DialogBodyTaskComponent]
})
export class AppModule {}