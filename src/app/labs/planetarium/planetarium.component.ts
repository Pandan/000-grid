import {Component} from "@angular/core";
import {OrbitalObject} from "./orbital-object";
import {PlanetService} from "./planets.service";

@Component({
  selector: 'planetarium',
  template: `
    <div class="wrapper">
      <orbit *ngFor="let planet of planets; let j = index" [index]="j"></orbit>
      <planet *ngFor="let planet of planets; let i = index" [index]="i" [orbObj]="planet" ></planet>
      <div class="sun"></div>
    </div>`,
  styleUrls: ['planetarium.component.scss']
})

export class PlanetariumComponent {

  planets: OrbitalObject[];

  constructor(planetService:PlanetService) {
    this.planets = planetService.getPlanets();
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  nextFrame() {
  }

  ngOnDestroy() {
  }

}

