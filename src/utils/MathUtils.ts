/**
 * Created by pandan on 09/09/16.
 */

/* Credits to Phaser, https://github.com/photonstorm/phaser/blob/v2.3.0/src/math/Math.js */

export class MathUtils {

  static linearInterpolation(v: number[], k: number): number {

    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);

    if (k < 0) {
      return this.linear(v[0], v[1], f);
    }

    if (k > 1) {
      return this.linear(v[m], v[m - 1], m - f);
    }

    return this.linear(v[i], v[i + 1 > m ? m : i + 1], f - i);

  }

  static linear(p0: number, p1: number, t: number): number {
    return (p1 - p0) * t + p0;
  }

  static percentage(value: number, max: number, min: number): number {
    return ((value - min) / (max - min)) * 1
  }

  //The (absolute) difference between two values.
  static difference(a, b) {
    return Math.abs(a - b);
  }

  static within(a, b, tolerance) {
    return (Math.abs(a - b) <= tolerance);
  }

}

