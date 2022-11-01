import { Component, Input, ViewEncapsulation } from '@angular/core';
import Swiper, { Navigation } from 'swiper';
import { imageContent } from '../../models/carousel-model';

Swiper.use([Navigation]);

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  @Input()
  imagesContents!: imageContent[];
}
