import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsumComponent } from './eventsum.component';

describe('EventsumComponent', () => {
  let component: EventsumComponent;
  let fixture: ComponentFixture<EventsumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsumComponent]
    });
    fixture = TestBed.createComponent(EventsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
