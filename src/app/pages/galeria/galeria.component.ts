import { Component, OnInit } from '@angular/core';
import { menuNames } from 'src/app/shared/models/menu-model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  menuNames = menuNames;
  constructor() {}

  ngOnInit(): void {}
}
