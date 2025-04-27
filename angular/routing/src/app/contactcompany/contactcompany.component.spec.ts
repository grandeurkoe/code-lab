import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcompanyComponent } from './contactcompany.component';

describe('ContactcompanyComponent', () => {
  let component: ContactcompanyComponent;
  let fixture: ComponentFixture<ContactcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactcompanyComponent]
    });
    fixture = TestBed.createComponent(ContactcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
