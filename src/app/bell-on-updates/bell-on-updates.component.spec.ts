import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellOnUpdatesComponent } from './bell-on-updates.component';

describe('BellOnUpdatesComponent', () => {
  let component: BellOnUpdatesComponent;
  let fixture: ComponentFixture<BellOnUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellOnUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellOnUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
