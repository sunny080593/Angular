import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOneComponent } from './master-one.component';

describe('MasterOneComponent', () => {
  let component: MasterOneComponent;
  let fixture: ComponentFixture<MasterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
