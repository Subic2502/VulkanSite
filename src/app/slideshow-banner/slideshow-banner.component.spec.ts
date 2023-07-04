import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowBannerComponent } from './slideshow-banner.component';

describe('SlideshowBannerComponent', () => {
  let component: SlideshowBannerComponent;
  let fixture: ComponentFixture<SlideshowBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowBannerComponent]
    });
    fixture = TestBed.createComponent(SlideshowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
