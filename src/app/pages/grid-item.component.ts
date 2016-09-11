/**
 * Created by pandan on 01/09/16.
 */
import {Component, ViewChild, Input} from "@angular/core";
import "gsap";
import {GridItem} from "./grid-item";

@Component({
  selector: 'grid-item',
  template: `
    <div class="content" #content
      (mouseover)="onMouseOver($event)" 
      (mouseout)="onMouseOut($event)" 
      [style.backgroundColor]="itemData.colorA">
      
      <div class="bottom-bg" #bottomBg></div>
      <div class="bottom-content">
        <p class="header">{{index+1}}. {{itemData.header | lowercase}}</p>
        <p class="subHeader">{{itemData.subHeader}}</p>
      </div>
    </div>
  `,
  styleUrls: ['grid-item.component.scss']

})

export class GridItemComponent {

  @ViewChild('content') content;
  @ViewChild('bottomBg') bottomBg;
  @Input('itemData') itemData: GridItem;
  @Input('index') index: number;

  ngOnInit() {

  }

  onMouseOver($event) {
    //console.log("onMouseOver " + $event);
    TweenMax.to(this.bottomBg.nativeElement, 0.3, {opacity:0.3, ease:Linear.easeNone});
  }

  onMouseOut($event) {
    //console.log("onMouseOut " + $event);
    TweenMax.to(this.bottomBg.nativeElement, 0.3, {opacity:0.1, ease:Linear.easeNone});
  }


}
