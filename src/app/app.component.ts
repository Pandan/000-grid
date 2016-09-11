import { Component } from '@angular/core';
import {GridViewComponent} from "./pages/grid-view.component";
import {PageComponent} from "./pages/page.component";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
