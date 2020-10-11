import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillLearnComponent } from './will-learn.component';

describe('WillLearnComponent', () => {
  let component: WillLearnComponent;
  let fixture: ComponentFixture<WillLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
