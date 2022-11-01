import { Component, Input, OnInit } from '@angular/core';
import { menuOptions, menuNames, menuPaths } from '../../models/menu-model';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  activePage!: menuNames;

  menuPaths = menuPaths;
  menuNames = menuNames;
  menuOptions!: menuOptions[];

  ngOnInit(): void {
    this.menuOptions = [
      {
        path: this.menuPaths.homePage,
        name: this.menuNames.homePage,
      },
      {
        path: this.menuPaths.galeria,
        name: this.menuNames.galeria,
      },
      {
        path: this.menuPaths.formulario,
        name: this.menuNames.formulario,
      },
      {
        path: this.menuPaths.comoAjudar,
        name: this.menuNames.comoAjudar,
      },
      {
        path: this.menuPaths.quemSomos,
        name: this.menuNames.quemSomos,
      },
    ];
  }
}
