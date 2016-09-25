
import {NgModule} from "@angular/core";
import {PlanetService} from "./planets.service";
import {CommonModule} from "@angular/common";
import {PlanetariumComponent} from "./planetarium.component";
import {PlanetComponent} from "./planet.component";
import {OrbitComponent} from "./orbit.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrbitComponent,
    PlanetariumComponent,
    PlanetComponent
  ],
  exports: [PlanetariumComponent],
  providers: [PlanetService]
})

export class PlanetariumModule {

}
