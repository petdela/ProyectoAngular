import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContServComponent } from './cont-serv.component';

describe('ContServComponent', () => {
  let component: ContServComponent;
  let fixture: ComponentFixture<ContServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
