import { Component, Inject, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inside-dialog',
  templateUrl: './inside-dialog.component.html',
  styleUrls: ['./inside-dialog.component.css']
})
export class InsideDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { age: number, name: string }) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
