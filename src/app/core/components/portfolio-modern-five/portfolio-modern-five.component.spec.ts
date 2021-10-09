import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModernFiveComponent } from './portfolio-modern-five.component';

describe('PortfolioModernFiveComponent', () => {
  let component: PortfolioModernFiveComponent;
  let fixture: ComponentFixture<PortfolioModernFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioModernFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioModernFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
