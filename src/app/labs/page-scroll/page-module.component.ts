import {Component, ElementRef, Input, Output, HostListener, Renderer, EventEmitter} from "@angular/core";
import "gsap";
import {MathUtils} from "../../../utils/MathUtils";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'page-module',
  template: `
    <div class="parallax" [style.backgroundColor]="color">
      <div [hidden]="disableRootChild" class="title" [ngStyle]="{'transform': 'scale('+textScale+')'}">
        <p>{{title}}</p>
      </div>
      <img [hidden]="disableRootChild" src="../../../assets/page-scroll/asterisk.svg"
        [ngStyle]="{'transform': 'rotate('+imgRotation+'deg) scale('+imgScale+')'}">
    </div>
    `,
  styleUrls: ['page-module.component.scss']
})

export class PageModuleComponent {
  @Input('color') color;
  @Input('title') title;
  @Input('index') index;

  @Output('scrollStopped') scrollStopped = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.onScroll();
  }

  elementRef: ElementRef;
  hideElement: boolean = false;

  nextFrameDone:boolean;

  yPos: number = 0;

  textScale: number = 1;
  imgRotation: number = 0;
  imgScale: number = 1;
  barScale: number = 0;

  constructor(elementRef: ElementRef, renderer: Renderer) {
    this.elementRef = elementRef;
  }

  ngAfterViewInit() {
    this.render();
  }

  onScroll() {
    this.nextFrame();
  }

  nextFrame() {
    this.yPos = this.elementRef.nativeElement.getBoundingClientRect().top;
    if(this.nextFrameDone){
      requestAnimationFrame(() => this.render());
      this.nextFrameDone = false;
    }
  }

  render() {
    //Checks if component is outside the viewport and hides elements and stops rendering.
    if (!MathUtils.within(this.yPos, 0, window.innerHeight)) {
      //this.hideElement = true;
      this.nextFrameDone = true;
      return;
    }
    //this.hideElement = false;

    //Calculate percentage to be used by interpolation. Percentage, in/out (0-1)/(1-0)
    var percent: number = MathUtils.percentage(this.yPos, 0, window.innerHeight);
    if (percent > 1) percent = MathUtils.percentage(percent, 1, 2);

    //Interpolation used to update css properties
    this.textScale = MathUtils.linearInterpolation([0, 1], percent);
    this.barScale = MathUtils.linearInterpolation([0, 10, 50, 100], percent);
    this.imgScale = MathUtils.linearInterpolation([0, 1.5], percent);
    this.imgRotation = MathUtils.linearInterpolation([240, 0], percent);

    this.nextFrameDone = true;
  }
}


