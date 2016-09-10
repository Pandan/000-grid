import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {GridModule} from "./grid/grid.module";
import {PageViewComponent} from "./views/page-view.component";
import {PerspectiveComponent} from "./labs/perspective.component";


@NgModule({
  declarations: [
    AppComponent,
    PageViewComponent,
    PerspectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
