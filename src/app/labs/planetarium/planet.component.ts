import {Component, Input, HostBinding} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {OrbitalObject} from "./orbital-object";
import {MathUtils} from "../../../utils/MathUtils";

/**
 * Created by pandan on 09/09/16.
 */
@Component({
  selector: 'planet',
  template: `
     <planet class="moon" *ngFor="let planet of orbObj.children; let i = index" [index]="i" [planetData]="planet" [parentOrbObj]="orbObj" ></planet>
  `,
  styleUrls: ['planet.component.scss']
})

export class PlanetComponent {

  @HostBinding('style.transform') transform;
  @HostBinding('style.width') styleWidth;
  @HostBinding('style.height') styleHeight;
  @HostBinding('style.background-image') backgroundImage;
  @HostBinding('style.background') background;

  @Input('index') index: number = 0;
  @Input('orbObj') orbObj: OrbitalObject;
  @Input('parentOrbObj') parentOrbObj: OrbitalObject;

  colorRGB: any;
  isMoon: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.parentOrbObj) {
      this.isMoon = true;
      this.orbObj.centerOfOrbit = {x: this.parentOrbObj.diameter * 0.5, y: this.parentOrbObj.diameter * 0.5};
      this.orbObj.distance = this.parentOrbObj.diameter * this.orbObj.distance;
    } else {
      this.orbObj.centerOfOrbit = OrbitalObject.CENTER;
      this.orbObj.distance = OrbitalObject.DISTANCE * (this.index + 1);
    }

    this.colorRGB = MathUtils.hexToRgb(this.orbObj.color);
    this.background = this.orbObj.color;
    this.styleWidth = this.styleHeight = Math.round(this.orbObj.diameter) + "px";
    this.nextFrame();
  }

  nextFrame() {
    requestAnimationFrame(() => this.render());
  }

  render() {
    this.updateOrbitalObject(this.orbObj);
    this.nextFrame();
  }

  updateOrbitalObject(obj: OrbitalObject) {
    obj.position = this.calcOrbitPoint(obj.centerOfOrbit, obj.angle, obj.distance);

    this.transform = this.sanitizer.bypassSecurityTrustStyle(
      'translate(' + (obj.position.x - (obj.diameter * 0.5)) + 'px, ' + (obj.position.y - (obj.diameter * 0.5)) + 'px)'
    );
    if (!this.isMoon) {
      var rotationDeg: number = MathUtils.angleBetween(obj.position.x, obj.position.y, this.orbObj.centerOfOrbit.x, this.orbObj.centerOfOrbit.y);
      rotationDeg = MathUtils.radToDeg(rotationDeg) + 90;
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
        'linear-gradient(' + rotationDeg + 'deg, rgba(0, 0, 0, 0.2) 50%, ' + obj.color + ' 51%, ' + obj.color + ')'
      );
    }
    obj.angle += obj.velocity;
  }


  calcOrbitPoint(center: any, angle: number, distance: number): any {
    var point: any = {x: 0, y: 0}
    point.x = center.x + Math.sin(angle) * distance;
    point.y = center.y + Math.cos(angle) * distance;
    return point;
  }

  ngOnDestroy() {
  }

}

