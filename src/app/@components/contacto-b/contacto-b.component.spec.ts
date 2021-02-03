import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoBComponent } from './contacto-b.component';

describe('ContactoBComponent', () => {
  let component: ContactoBComponent;
  let fixture: ComponentFixture<ContactoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
