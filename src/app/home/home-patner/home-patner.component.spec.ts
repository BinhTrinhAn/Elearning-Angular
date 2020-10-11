import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePatnerComponent } from './home-patner.component';

describe('HomePatnerComponent', () => {
  let component: HomePatnerComponent;
  let fixture: ComponentFixture<HomePatnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePatnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
