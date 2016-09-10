/**
 * Created by pandan on 01/09/16.
 */
import {Component} from "@angular/core";
import {GridItemsService} from "./grid-items.service";
import {GritItem} from "./grid-item";
import {Router} from "@angular/router";

@Component({
  selector: 'grid-view',
  template: `
    <div class="grid">
      <grid-item *ngFor="let item of gridItems; let i = index" [itemData]="item" [index]="i" (click)="onClickGridItem(i)" ></grid-item>
    </div>
  `,
  styleUrls: ['grid-view.component.scss']
})

export class GridViewComponent {
  gridItems:GritItem [];

  constructor(gridItemsService:GridItemsService, private router:Router){
    this.gridItems = gridItemsService.getItems();
  }

  onClickGridItem(index){
    this.router.navigate(['/page',index]);
  }

}
