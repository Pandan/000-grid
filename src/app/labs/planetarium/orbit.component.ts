import {Component, Input} from "@angular/core";
import {HostBinding} from "@angular/core/src/metadata/directives";
import {DomSanitizer} from "@angular/platform-browser";
import {OrbitalObject} from "./orbital-object";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'orbit',
  template: ``,
  styleUrls: ['orbit.component.scss']
})

export class OrbitComponent {
  @HostBinding('style.width') styleWidth;
  @HostBinding('style.height') styleHeight;
  @HostBinding('style.transform') transform;

  @Input('index') index: number = 0;

  xPos: number = 0;
  yPos: number = 0;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    var i: number = this.index + 1;

    this.xPos = 0 - (i * OrbitalObject.DISTANCE);
    this.yPos = 0 - (i * OrbitalObject.DISTANCE);
    this.xPos += OrbitalObject.CENTER.x;
    this.yPos += OrbitalObject.CENTER.y;
    this.transform = this.sanitizer.bypassSecurityTrustStyle(
      'translate(' + this.xPos + 'px, ' + this.yPos + 'px)'
    );
    this.styleWidth = (i * (OrbitalObject.DISTANCE * 2)) + "px";
    this.styleHeight = (i * (OrbitalObject.DISTANCE * 2)) + "px";
  }

  ngOnDestroy() {
  }

}

