import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrComponent } from './copyr.component';

describe('CopyrComponent', () => {
  let component: CopyrComponent;
  let fixture: ComponentFixture<CopyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
