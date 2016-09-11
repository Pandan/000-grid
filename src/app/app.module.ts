import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {PagesModule} from "./pages/pages.module";
import {PerspectiveComponent} from "./labs/perspective/perspective.component";
import {PageComponent} from "./pages/page.component";
import {PerspectiveParallaxComponent} from "./labs/perspective-parallax/perspective.parallax.component";
import {PageScrollComponent} from "./labs/page-scroll/page-scroll.component";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PerspectiveComponent,
    PerspectiveParallaxComponent,
    PageScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PagesModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
