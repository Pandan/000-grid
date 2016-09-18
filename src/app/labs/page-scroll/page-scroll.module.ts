/**
 * Created by pandan on 18/09/16.
 */
import {NgModule} from "@angular/core";
import {PageScrollComponent} from "./page-scroll.component";

import {CommonModule} from "@angular/common";
import {PageModuleComponent} from "./page-module.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageScrollComponent,
    PageModuleComponent
  ],
  exports: [PageScrollComponent],
  providers: []
})
export class PageScrollModule {

}
