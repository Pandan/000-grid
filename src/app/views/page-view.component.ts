/**
 * Created by pandan on 06/09/16.
 */

import {Component} from "@angular/core";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {Router, ActivatedRoute} from "@angular/router";
import {GridItemsService} from "../grid/grid-items.service";
import {GritItem} from "../grid/grid-item";

@Component({
  selector:'page-view',
  template: `
    
    <div class="top-bar"
      [style.backgroundColor]="bgColor">
      <div class="arrow-button"></div>
        <md-icon class="arrow-button" 
        svgSrc="../../assets/arrow-right.svg"
        [style.color]="'#ffffff'"
        (click)="onClickArrow()"></md-icon>  
      <p class="header">Label</p>
    </div>
    
    <span [ngSwitch]="id">
      <perspective *ngSwitchCase="'perspective'"></perspective>
      <span *ngSwitchCase="'Meanie'">Meanie</span>
      <span *ngSwitchCase="'Miney'">Miney</span>
      <span *ngSwitchCase="'Moe'">Moe</span>
      <span *ngSwitchDefault>other</span>
    </span>
   
  `,
  styleUrls: ['page-view.component.scss'],
  directives: [MdIcon],
  providers:[MdIconRegistry]
})

export class PageViewComponent{

  gridItems:GritItem[];

  bgColor: string;
  id: string;

  constructor(private route: ActivatedRoute, private router:Router, gridItemsService:GridItemsService){
    this.gridItems = gridItemsService.getItems();
  }

  ngOnInit() {
    let index: number = +this.route.snapshot.params['id'];
    this.bgColor = this.gridItems[index].colorA;
    this.id = this.gridItems[index].id;
    console.log("id: " + this.id);
  }

  onClickArrow(){
    this.router.navigate(['/']);
  }


}
