import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FServComponent } from './f-serv.component';

describe('FServComponent', () => {
  let component: FServComponent;
  let fixture: ComponentFixture<FServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
