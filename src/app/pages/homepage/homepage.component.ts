import { Component } from '@angular/core';
import { imageContent } from 'src/app/shared/models/carousel-model';
import { menuNames } from 'src/app/shared/models/menu-model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  menuNames = menuNames;
  carouselImages: imageContent[] = this.generateCarouselImages();

  generateCarouselImages(): imageContent[] {
    return [
      {
        src: 'https://nfpet.com.br/blog/wp-content/uploads/2018/07/20-07.png',
        description: 'Adoção e Doação',
      },
      {
        src: 'https://cisavet.com.br/arquivos/banco-de-imagens/categoria-1/cao-e-tutor-tudo-para-nao-chorar-20181018100717.jpg',
        description: 'Por que adotar?',
      },
      {
        src: 'https://www.adotepetz.com.br/images/banner-3.jpg',
        description: 'Adotar',
      },
    ];
  }
}
