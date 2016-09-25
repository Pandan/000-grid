import {OrbitalObject} from "./orbital-object";
/**
 * Created by pandan on 21/09/16.
 */
export class PlanetService {

  getPlanets() {
    return [
      new OrbitalObject(
        "mercury",
        0.38,
        0.38,
        1.59,
        '#ff637c',
        125,
      ),
      new OrbitalObject(
        "venus",
        0.94,
        0.72,
        1.18,
        '#bf4fad',
        274
      ),
      new OrbitalObject(
        "earth",
        1,
        1,
        1,
        '#0b95b9',
        185,
        [
          new OrbitalObject("moon", 0.2, 0.8, 12, "#5e5e5e", 30)
        ]
      ),
      new OrbitalObject(
        "mars",
        0.53,
        1.52,
        0.8,
        '#fc2a06',
        260
      ),
      new OrbitalObject(
        "jupiter",
        11.21 * 0.13,
        5.20 * 0.5,
        0.43,
        "#ff5e03",
        255,
        [
          new OrbitalObject("io", 0.15, 0.6, 1.2, "#5e5e5e", 60),
          new OrbitalObject("ganymede", 0.3, 0.75, 3, "#5e5e5e", 10),
          new OrbitalObject("callisto", 0.2, 0.95, 12, "#5e5e5e", 10)
        ]
      ),
      new OrbitalObject(
        "saturn",
        9.45 * 0.13,
        9.58 * 0.4,
        0.32,
        "#ffac03",
        340,
        [
          new OrbitalObject("titan", 0.25, 0.8, 6, "#5e5e5e", 120)
        ]
      ),
      new OrbitalObject(
        "uranus",
        4.01 * 0.13,
        19.20 * 0.25,
        0.22,
        "#a3aa02",
        105
      ),
      new OrbitalObject(
        "neptune",
        3.88 * 0.13,
        30.05 * 0.2,
        0.18,
        "#05b694",
        70
      )
    ]
  }

}
