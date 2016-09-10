import {Component, HostListener, ViewChild, ElementRef} from "@angular/core";
import {MathUtils} from "../utils/MathUtils";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'perspective',
  template: `<div class="box" #box (mousemove)="onBoxMouseMove($event)"></div>`,
  styleUrls: ['perspective.component.scss']
})

export class PerspectiveComponent {

  @ViewChild('box')
  box: ElementRef;

  private isOver:boolean = false;


  onBoxMouseMove(event: MouseEvent) {
    console.log("event.clientX: " + event.offsetX);

    var p: number = MathUtils.percentage(event.offsetX,300,0);

    console.log("percent: " + p);
  }

  update(x:number, y:number){

    var xPos:number ;
    var yPos:number;

  }




}

