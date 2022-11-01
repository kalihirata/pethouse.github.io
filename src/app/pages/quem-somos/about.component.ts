import { Component } from '@angular/core';
import { imageContent } from 'src/app/shared/models/carousel-model';
import { menuNames } from 'src/app/shared/models/menu-model';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  menuNames = menuNames;
  carouselImages: imageContent[] = this.generateCarouselImages();

  generateCarouselImages(): imageContent[] {
    return [
      {
        src: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
        description: 'Adoção e Doação',
      },
      {
        src: 'https://blog-static.petlove.com.br/wp-content/uploads/2020/09/Cachorro-feliz-Petlove.jpg',
        description: 'Por que adotar?',
      },
      {
        src: 'https://blog.petfellice.com.br/wp-content/uploads/2020/06/vira-latas.jpg',
        description: 'Adotar',
      },
    ];
  }
}
