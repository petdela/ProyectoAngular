import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBcComponent } from './contact-bc.component';

describe('ContactBcComponent', () => {
  let component: ContactBcComponent;
  let fixture: ComponentFixture<ContactBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
