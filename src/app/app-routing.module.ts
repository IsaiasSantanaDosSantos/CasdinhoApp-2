import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'nycollas-kurt',
    loadChildren: () => import('./casdinhers/nycollas-kurt/nycollas-kurt.module').then( m => m.NycollasKurtPageModule)
  },
  {
    path: 'willian-miguel',
    loadChildren: () => import('./casdinhers/willian-miguel/willian-miguel.module').then( m => m.WillianMiguelPageModule)
  },
  {
    path: 'isabella',
    loadChildren: () => import('./casdinhers/isabella/isabella.module').then( m => m.IsabellaPageModule)
  },
  {
    path: 'giovanna',
    loadChildren: () => import('./casdinhers/giovanna/giovanna.module').then( m => m.GiovannaPageModule)
  },
  {
    path: 'isaias',
    loadChildren: () => import('./motoristas/isaias/isaias.module').then( m => m.IsaiasPageModule)
  },
  {
    path: 'vanessa',
    loadChildren: () => import('./motoristas/vanessa/vanessa.module').then( m => m.VanessaPageModule)
  },
  {
    path: 'thais',
    loadChildren: () => import('./motoristas/thais/thais.module').then( m => m.ThaisPageModule)
  },
  {
    path: 'dados-casdinhers',
    loadChildren: () => import('./dados-casdinhers/dados-casdinhers.module').then( m => m.DadosCasdinhersPageModule)
  },
  {
    path: 'dados-motoristas',
    loadChildren: () => import('./dados-motoristas/dados-motoristas.module').then( m => m.DadosMotoristasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
