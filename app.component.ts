import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-forms-and-validations';
  constructor(private dialog : MatDialog){
  
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      
    });
}
}