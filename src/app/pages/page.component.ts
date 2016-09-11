/**
 * Created by pandan on 06/09/16.
 */

import {Component} from "@angular/core";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {Router, ActivatedRoute} from "@angular/router";
import {GridItemsService} from "./grid-items.service";
import {GridItem} from "./grid-item";

@Component({
  selector: 'page',
  template: `
    
    <div class="top-bar"
      [style.backgroundColor]="bgColor">
      <div class="arrow-button"></div>
        <md-icon class="arrow-button" 
        svgSrc="../../assets/arrow-right.svg"
        (click)="onClickArrow()"></md-icon>  
      <p class="header">{{gridItem.header | lowercase}}</p>
    </div> 
    <span [ngSwitch]="id">
      <perspective *ngSwitchCase="'perspective'" [borderColor]="bgColor"></perspective>
      <perspective-parallax *ngSwitchCase="'perspective-parallax'" [borderColor]="bgColor">Meanie</perspective-parallax>
      <page-scroll *ngSwitchCase="'page-scroll'" [borderColor]="bgColor">Meanie</page-scroll>
      
    </span>
    
   
  `,
  styleUrls: ['page.component.scss'],
  directives: [MdIcon],
  providers: [MdIconRegistry]
})

export class PageComponent {

  //@ViewChild('topWrapper') topWrapper;

  gridItem: GridItem;

  bgColor: string;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private gridItemsService: GridItemsService) {

  }

  ngOnInit() {
    let index: number = +this.route.snapshot.params['id'];
    this.gridItem = this.gridItemsService.getItems()[index];
    this.bgColor = this.gridItem.colorA;
    this.id = this.gridItem.id;

    console.log("id: " + this.id);
    //TweenMax.delayedCall(2, this.hideTopBar);

  }

  ngAfterViewInit() {
    //console.log("topWrapper " + this.topWrapper.nativeElement.offsetHeight);
  }

  onClickArrow() {
    this.router.navigate(['/']);
  }

  hideTopBar() {
    //var offsetHeight: number = this.topWrapper.nativeElement.offsetHeight;
    //TweenMax.to(this.topWrapper.nativeElement, 0.5, {opacity: -30, ease: Linear.easeNone});
  }

  showTopBar() {

  }


}
