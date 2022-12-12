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
			name: 'Action Sheet',
			url: '/action-sheet',
		},
		{
			icon: 'alert-circle-outline',
			name: 'Alertas',
			url: '/alertas',
		},
		{
			icon: 'person-circle-outline',
			name: 'Avatar',
			url: '/avatar',
		},
		{
			icon: 'radio-button-off-outline',
			name: 'Botones',
			url: '/buttons',
		},
		{
			icon: 'card-outline',
			name: 'Cards',
			url: '/cards',
		},
		{
			icon: 'car-outline',
			name: 'Fab',
			url: '/fab',
		},
	];

	constructor() { }

	ngOnInit() { }
}
