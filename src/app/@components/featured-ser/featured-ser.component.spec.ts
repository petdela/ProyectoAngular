import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSerComponent } from './featured-ser.component';

describe('FeaturedSerComponent', () => {
  let component: FeaturedSerComponent;
  let fixture: ComponentFixture<FeaturedSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
