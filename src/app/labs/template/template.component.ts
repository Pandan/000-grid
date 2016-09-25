import {Component, Input} from "@angular/core";

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

