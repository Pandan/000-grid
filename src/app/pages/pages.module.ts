/**
 * Created by pandan on 06/09/16.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GridViewComponent} from "./grid-view.component";
import {GridItemComponent} from "./grid-item.component";
import {GridItemsService} from "./grid-items.service";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {PageComponent} from "./page.component";
import {PerspectiveComponent} from "../labs/perspective/perspective.component";
import {PerspectiveParallaxComponent} from "../labs/perspective-parallax/perspective.parallax.component";
import {PageScrollModule} from "../labs/page-scroll/page-scroll.module";


@NgModule({
  imports: [
    CommonModule,
    PageScrollModule
  ],
  declarations: [
    GridViewComponent,
    GridItemComponent,
    PageComponent,
    PerspectiveComponent,
    PerspectiveParallaxComponent,
    MdIcon
  ],
  exports: [
    GridViewComponent
  ],
  providers: [GridItemsService, MdIconRegistry]
})
export class PagesModule {

}
