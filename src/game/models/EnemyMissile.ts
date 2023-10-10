import { MoveableRectangle } from './Rectangle';

export class EnemyMissile extends MoveableRectangle {
  static WIDTH = 10;
  static HEIGHT = 28;

  static VERTICAL_SPEED = 0.08;

  verticalSpeed = -1;
  horizontalSpeed = 0;

  constructor(
    protected registerMoveable: (m: MoveableRectangle) => void,
    left: number,
    top: number,
    verticalSpeed: number = -1,
  ) {
    super(registerMoveable, left, top, EnemyMissile.WIDTH, EnemyMissile.HEIGHT);
    this.verticalSpeed = verticalSpeed;
  }
}
