import {Component, ViewChild, ElementRef, Input} from "@angular/core";
import {DomSanitizationService} from "@angular/platform-browser";
import "gsap";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'template',
  template: `
    <div class="wrapper"
      (mousemove)="onBoxMouseMove($event)"
      (mouseover)="onBoxMouseOver($event)"
      (mouseout)="onBoxMouseOut($event)"
      (click)="onBoxMouseClick($event)">
    </div>`,
  styleUrls: ['template.component.scss']
})

export class TemplateComponent {

  @Input('borderColor') borderColor;

  constructor() {
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  onBoxMouseMove(event: MouseEvent) {
  }

  onBoxMouseOver(event: MouseEvent) {
  }

  onBoxMouseOut(event: MouseEvent) {
  }

  onBoxMouseClick(event: MouseEvent){
  }

}

