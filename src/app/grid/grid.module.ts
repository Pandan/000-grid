/**
 * Created by pandan on 06/09/16.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GridViewComponent} from "./grid-view.component";
import {GridItemComponent} from "./grid-item.component";
import {GridItemsService} from "./grid-items.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridViewComponent,
    GridItemComponent
  ],
  exports: [
    GridViewComponent
  ],
  providers: [GridItemsService]
})
export class GridModule {

}
