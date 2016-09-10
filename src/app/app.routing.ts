/**
 * Created by pandan on 06/09/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridViewComponent} from "./grid/grid-view.component";
import {PageViewComponent} from "./views/page-view.component";

const appRoutes: Routes = [

  {
    path: '',
    component: GridViewComponent
  },
  {
    path: 'page/:id',
    component: PageViewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
