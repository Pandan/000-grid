import {Component, HostListener, Input} from "@angular/core";
import "gsap";
import {MathUtils} from "../../../utils/MathUtils";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'page-scroll',
  template: `
    <div class="container">
      <page-module (scrollStopped)="onScrollStopped()" *ngFor="let color of colors; let i = index" [title]="titles[i]" [color]="color" [index]="i" ></page-module>
    </div>`,
  styleUrls: ['page-scroll.component.scss']
})

export class PageScrollComponent {

  @Input('borderColor') borderColor;

  @HostListener('window:mousewheel', ['$event'])
  onWindowMousewheel($event) {
    this.onMousewheel();
  }

  //DOMMouseScroll used for FireFox
  @HostListener('window:DOMMouseScroll', ['$event'])
  onDOMMouseScroll($event) {
    this.onMousewheel();
  }

  colors = ["#f1c40f", "#e67e22", "#e74c3c", "#2ecc71", "#16a085"];
  titles = ["sonder", "occhiolism", "liberosis", "kuebiko", "exulansis"];

  scrollTimeOutId: number;
  scrollTimeOutDelay: number;
  animFrameId: number;

  isTweening: boolean = false;
  tween: TweenMax;
  tweenObj = {scrollYpos: 0};

  prevYpos:number;
  nextFrameDone:boolean;

  constructor() {
    //Check if safari and adjusts the scrollTimeOutDelay.
    var uagent = navigator.userAgent.toLowerCase();
    if (/safari/.test(uagent) && !/chrome/.test(uagent)) {
      this.scrollTimeOutDelay = 800;
    } else {
      this.scrollTimeOutDelay = 300;
    }
    this.nextFrameDone = true;
  }

  onMousewheel() {
    if (this.tween) {
      this.tween.kill();
      this.tween = null;
    }
    this.prevYpos = window.scrollY;
    this.nextFrame();
  }

  nextFrame() {
    if(this.nextFrameDone){
      requestAnimationFrame(() => this.render());
      this.nextFrameDone = false;
    }
  }

  render(){
    clearTimeout(this.scrollTimeOutId);
    this.scrollTimeOutId = window.setTimeout(() => {
      this.onScrollStopped();
    }, this.scrollTimeOutDelay);
    this.nextFrameDone = true;
  }

  onScrollStopped() {
    //On scrollStopped, calulate closest module YPos. If distance is closer then 300 then tween to that position.
    var moduleYPos: number = Math.round(window.scrollY / window.innerHeight) * window.innerHeight;
    if (MathUtils.difference(moduleYPos, window.scrollY) < 300) {
      this.tweenScrollTo(moduleYPos);
    }
  }

  tweenScrollTo(value: number) {
    //Tweeens using tweenObj, simple fix to so we can use gsap to handle scrollTo. Using gsap onUpdate to udpdate scrollTo.
    //GSAP should internally use requestAnimationFrame to udpate properties.
    //Udates tweenObj so it has the initial window.scrollY position
    this.tweenObj.scrollYpos = window.scrollY;
    this.tween = TweenMax.to(this.tweenObj, 0.5, {
      scrollYpos: value,
      onStart: () => {
        this.isTweening = true
      },
      onUpdate: () => this.onTweenUpdate(),
      onComplete: () => this.onTweenComplete(),
      ease: Cubic.easeInOut,
      autoKill: false
    });
  }

  onTweenUpdate(): void {
    window.scrollTo(0, this.tweenObj.scrollYpos);
  }

  onTweenComplete() {
    this.isTweening = false;
  }

  ngOnDestroy() {
    if (this.tween) {
      this.tween.kill();
    }
  }

}

