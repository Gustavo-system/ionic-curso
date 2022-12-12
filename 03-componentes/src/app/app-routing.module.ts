import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio',
		pathMatch: 'full',
	},
	{
		path: 'inicio',
		loadChildren: () => import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
	},
	{
		path: 'alertas',
		loadChildren: () => import('./pages/alertas/alertas.module').then((m) => m.AlertasPageModule),
	},
	{
		path: 'action-sheet',
		loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
	},
	{
		path: 'avatar',
		loadChildren: () => import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
	},
	{
		path: 'buttons',
		loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsPageModule)
	},
	{
		path: 'cards',
		loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsPageModule)
	},
	{
		path: 'fab',
		loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }
