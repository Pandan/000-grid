import {Component, ViewChild, ElementRef, Input} from "@angular/core";
import {DomSanitizationService} from "@angular/platform-browser";
import "gsap";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'page-scroll',
  template: `
    <div class="container"
      (mousemove)="onBoxMouseMove($event)"
      (mouseover)="onBoxMouseOver($event)"
      (mouseout)="onBoxMouseOut($event)"
      (click)="onBoxMouseClick($event)">
      
      <section class="parallax" id="parallax-1">
        <div>
          <h1>sonder</h1>
        </div>
      </section>
      
      <section class="module content section1">
        <div class="content">
          <h2>sonder</h2>
          <p>The realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inherited craziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk</p>
        </div>
      </section>
      
      <section class="parallax" id="parallax-2">
        <div>
          <h1>Block 2</h1>
        </div>
      </section>
      
      <section class="module content section2">
        <div class="content">
          <h2>Block 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
      </section>
      
      
      <!--
      <section class="module parallax parallax-3">
        <div class="content">
          <h1>Block 3</h1>
        </div>
      </section>
      
      <section class="module content section3">
        <div class="content">
          <h2>Block 3r</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
      </section>
      -->
    </div>`,
  styleUrls: ['page-scroll.component.scss']
})

export class PageScrollComponent {

  @Input('borderColor') borderColor;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  onBoxMouseMove(event: MouseEvent) {
  }

  onBoxMouseOver(event: MouseEvent) {
  }

  onBoxMouseOut(event: MouseEvent) {
  }

  onBoxMouseClick(event: MouseEvent) {
  }

}

