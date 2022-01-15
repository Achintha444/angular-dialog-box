import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideDialogComponent } from './inside-dialog.component';

describe('InsideDialogComponent', () => {
  let component: InsideDialogComponent;
  let fixture: ComponentFixture<InsideDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
