import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDialogComponent } from './event-dialog.component';

describe('RaceDialogComponent', () => {
  let component: RaceDialogComponent;
  let fixture: ComponentFixture<RaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
