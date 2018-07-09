import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTableRowStaticComponent } from './schedule-table-row-static.component';

describe('ScheduleTableRowStaticComponent', () => {
  let component: ScheduleTableRowStaticComponent;
  let fixture: ComponentFixture<ScheduleTableRowStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTableRowStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTableRowStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
