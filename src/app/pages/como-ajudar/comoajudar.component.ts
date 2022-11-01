import { Component, OnInit } from '@angular/core';
import { menuNames } from 'src/app/shared/models/menu-model';

@Component({
  selector: 'app-como-ajudar',
  templateUrl: './comoajudar.component.html',
  styleUrls: ['./comoajudar.component.scss']
})
export class ComoajudarComponent implements OnInit {
  menuNames = menuNames;
  constructor() { }

  ngOnInit(): void {
  }

}
