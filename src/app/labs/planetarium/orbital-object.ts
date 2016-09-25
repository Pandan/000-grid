import {MathUtils} from "../../../utils/MathUtils";
/**
 * Created by pandan on 21/09/16.
 */
export class OrbitalObject {

  //Default orbObj values. Data is stored using a percentage of default values.
  public static get DIAMETER(): number {
    return 15;
  };

  public static get DISTANCE(): number {
    return 30
  };

  public static get VELOCITY(): number {
    return 0.005
  };

  //Used as the default center of orbit. Should probably calc this value...
  public static get CENTER(): any {
    return {x: 150, y: 150}
  };

  public name: string;
  public diameter: number;
  public distance: number;
  public velocity: number;
  public color: string;
  public initialAngle: number = 0;
  //Used to store children(moons)
  public children: OrbitalObject[];

  //Vars used to store values in orbit loop
  public position: any = {x: 0, y: 0};
  public angle: number = 0;
  public centerOfOrbit: any;

  constructor(name: string, diameter: number, distance: number, velocity: number, color: string, initialAngle: number, children?: OrbitalObject[]) {
    this.name = name;
    this.diameter = diameter * OrbitalObject.DIAMETER;
    this.distance = distance;
    this.velocity = velocity * OrbitalObject.VELOCITY;
    this.color = color;
    this.initialAngle = initialAngle;
    this.children = children;
    this.angle = MathUtils.degToRad(this.initialAngle);
  }
}
