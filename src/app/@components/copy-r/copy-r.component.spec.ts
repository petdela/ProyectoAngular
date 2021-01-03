import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRComponent } from './copy-r.component';

describe('CopyRComponent', () => {
  let component: CopyRComponent;
  let fixture: ComponentFixture<CopyRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
