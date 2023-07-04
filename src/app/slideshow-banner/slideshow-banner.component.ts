import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-banner',
  templateUrl: './slideshow-banner.component.html',
  styleUrls: ['./slideshow-banner.component.css']
})
export class SlideshowBannerComponent implements OnInit {
  pictures: any[] = [
    { url: 'assets/images/banner2.jpg', caption: 'Banner2' },
    { url: 'assets/images/banner3.jpg', caption: 'Banner3' }
    
  ];

  ngOnInit() {
  }
}

