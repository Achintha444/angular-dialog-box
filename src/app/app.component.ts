import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsideDialogComponent } from './inside-dialog/inside-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-box';

  constructor(private matDialog: MatDialog) {

  }

  onOpenDialog() {
    this.matDialog.open(InsideDialogComponent,
      {
        data: {
          age: 24,
          name: "Achintha"
        }
      });
  }
}
