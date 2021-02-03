import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBmComponent } from './contact-bm.component';

describe('ContactBmComponent', () => {
  let component: ContactBmComponent;
  let fixture: ComponentFixture<ContactBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
