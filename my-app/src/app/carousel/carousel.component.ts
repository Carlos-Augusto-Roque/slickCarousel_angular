import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slideConfig={
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }

  images = [
    {img: "assets/images/ferrari.jpg"},
    {img: "assets/images/ferrari.jpg"},
    {img: "assets/images/ferrari.jpg"},
    {img: "assets/images/ferrari.jpg"},
    {img: "assets/images/ferrari.jpg"},
    {img: "assets/images/ferrari.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
