import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {
  favorito: boolean = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log('click en el icono que es un bottton');
    this.favorito = !this.favorito;
    console.log(this.favorito);
  }
}
