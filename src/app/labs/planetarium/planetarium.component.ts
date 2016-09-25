import {Component, HostListener} from "@angular/core";
import {OrbitalObject} from "./orbital-object";
import {PlanetService} from "./planets.service";
import {MathUtils} from "../../../utils/MathUtils";

@Component({
  selector: 'planetarium',
  template: `
    <div class="wrapper"
      (mouseover)="onMouseOver($event)"
      (mouseout)="onMouseOut($event)">
      <p class="header">The Solar System</p>
      <div class="solar-system">
        <orbit *ngFor="let planet of planets; let j = index" [index]="j"></orbit>
        <planet *ngFor="let planet of planets; let i = index" [index]="i" [planetData]="planet" [timeFactor]="timeFactor" ></planet>
        <div class="sun"></div>
      </div>
    </div>`,
  styleUrls: ['planetarium.component.scss']
})

export class PlanetariumComponent {

  planets: OrbitalObject[];

  wheelDeltaY: number = 0;

  _timeFactor: number = 1;
  get timeFactor(): number {
    return this._timeFactor;
  }

  set timeFactor(value: number) {
    this._timeFactor = value;
  }

  @HostListener('window:mousewheel', ['$event'])
  onWindowMousewheel($event) {
    this.onMousewheel($event);
  }

  constructor(planetService: PlanetService) {
    this.planets = planetService.getPlanets();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onMousewheel($event: MouseWheelEvent) {
    this.wheelDeltaY = $event.wheelDeltaY;
    this.timeFactor = MathUtils.percentage(this.wheelDeltaY, -20, 0);
  }

  onMouseOver(event: MouseEvent) {
    this.stopRotation();
  }

  onMouseOut(event: MouseEvent) {
    this.startRotation();
  }

  startRotation() {
    TweenMax.to(this, 0.5, {
      timeFactor: 1,
      ease: Cubic.easeInOut
    });
  }

  stopRotation() {
    TweenMax.to(this, 0.5, {
      timeFactor: 0,
      ease: Cubic.easeInOut
    });
  }

  ngOnDestroy() {
  }

}

