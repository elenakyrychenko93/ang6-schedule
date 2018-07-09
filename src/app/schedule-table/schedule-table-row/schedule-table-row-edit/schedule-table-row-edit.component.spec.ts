import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTableRowEditComponent } from './schedule-table-row-edit.component';

describe('ScheduleTableRowEditComponent', () => {
  let component: ScheduleTableRowEditComponent;
  let fixture: ComponentFixture<ScheduleTableRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTableRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTableRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
