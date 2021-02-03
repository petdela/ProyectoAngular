import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButoneraComponent } from './butonera.component';

describe('ButoneraComponent', () => {
  let component: ButoneraComponent;
  let fixture: ComponentFixture<ButoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButoneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
