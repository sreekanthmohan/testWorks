import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoTestComponent } from './io-test.component';

describe('IoTestComponent', () => {
  let component: IoTestComponent;
  let fixture: ComponentFixture<IoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
