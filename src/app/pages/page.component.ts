/**
 * Created by pandan on 06/09/16.
 */

import {Component, ViewChild,ContentChild,ElementRef} from "@angular/core";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {Router, ActivatedRoute} from "@angular/router";
import {GridItemsService} from "./grid-items.service";
import {GridItem} from "./grid-item";

import "gsap";

@Component({
  selector: 'page',
  template: `
    <div class="top"
      (mouseover)="onTopMouseOver($event)"
      (mouseout)="onTopMouseOut($event)">
      <div class="arrow-button2" ></div>
      
      <div #topbar class="top-bar" 
        [style.backgroundColor]="bgColor">  
        <md-icon class="arrow-button"  
          [style.color]="'363636'"
          svgSrc="./assets/arrow-right.svg"
          (click)="onClickArrow()">
        </md-icon> 
        <p class="header">{{gridItem.header | lowercase}}</p>
      </div>
      <br><br>
      <!--<md-icon class="arrow-down-icon" svgSrc="../../assets/angle-arrow-down.svg"></md-icon> -->
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

  @ViewChild('topbar') topbar;

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
  }

  ngAfterViewInit() {

    this.hideTopBar(1);
  }

  onClickArrow() {
    this.router.navigate(['/']);
  }

  onTopMouseOver($event){
    console.log("onTopMouseOver");
    this.showTopBar();
  }

  onTopMouseOut($event){
    console.log("onTopMouseOut");
    this.hideTopBar()
  }

  showTopBar(delay:number = 0):void{
    TweenMax.to(this.topbar.nativeElement, 0.5, {y:0, delay:delay, ease: Cubic.easeOut});
  }

  hideTopBar(delay:number = 0) {
    TweenMax.to(this.topbar.nativeElement, 0.5, {y:-60, delay:delay, ease: Cubic.easeOut});
  }

}
