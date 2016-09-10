import { Component } from '@angular/core';
import {GridViewComponent} from "./grid/grid-view.component";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  directives: [GridViewComponent]
})
export class AppComponent {
  title = 'app works!';
}
