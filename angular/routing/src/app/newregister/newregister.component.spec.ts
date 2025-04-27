import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregisterComponent } from './newregister.component';

describe('NewregisterComponent', () => {
  let component: NewregisterComponent;
  let fixture: ComponentFixture<NewregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewregisterComponent]
    });
    fixture = TestBed.createComponent(NewregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
