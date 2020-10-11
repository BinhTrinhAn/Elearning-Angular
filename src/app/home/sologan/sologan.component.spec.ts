import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SologanComponent } from './sologan.component';

describe('SologanComponent', () => {
  let component: SologanComponent;
  let fixture: ComponentFixture<SologanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SologanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SologanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
