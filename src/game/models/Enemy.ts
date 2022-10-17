import { Missile } from './Missile';
import { MoveableRectangle, Rectangle } from './Rectangle';


export class Enemy extends Rectangle {
  static WIDTH = 50;
  static HEIGHT = 50;

  missiles: Missile[] = [];

  constructor(
    protected registerMoveable: (m: MoveableRectangle) => void,
    left: number,
    top: number,
  ) {
    super(left, top, Enemy.WIDTH, Enemy.HEIGHT);
  }

  private createMissile(): Missile {
    return new Missile(
      this.registerMoveable,
      this.left + (this.width / 2 - Missile.WIDTH),
      this.top + Missile.HEIGHT,
      Missile.VERTICAL_SPEED,
    );
  }

  fireMissile() {
    console.log('Ennemy fire missile');
    this.missiles.push(this.createMissile());
  }
}
