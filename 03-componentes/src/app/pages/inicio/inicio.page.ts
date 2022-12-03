import { Component, OnInit } from '@angular/core';

interface Components {
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Label',
      url: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alertas',
      url: '/alertas',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
