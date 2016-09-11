/**
 * Created by pandan on 06/09/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridViewComponent} from "./pages/grid-view.component";
import {PageComponent} from "./pages/page.component";

const appRoutes: Routes = [

  {
    path: '',
    component: GridViewComponent
  },
  {
    path: 'page/:id',
    component: PageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
