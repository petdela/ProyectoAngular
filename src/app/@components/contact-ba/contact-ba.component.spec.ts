import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBaComponent } from './contact-ba.component';

describe('ContactBaComponent', () => {
  let component: ContactBaComponent;
  let fixture: ComponentFixture<ContactBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
