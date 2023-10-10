import { EnemyMissile } from './EnemyMissile';
import { MoveableRectangle, Rectangle } from './Rectangle';

export enum EnemyType {
  SAUCER = 'SAUCER',
  ALIEN = 'ALIEN'
}
export class Enemy extends Rectangle {
  static WIDTH = 50;
  static HEIGHT = 50;

  missiles: EnemyMissile[] = [];
  type: EnemyType = EnemyType.ALIEN;

  constructor(
    protected registerMoveable: (m: MoveableRectangle) => void,
    left: number,
    top: number,
    type: EnemyType
  ) {
    super(left, top, Enemy.WIDTH, Enemy.HEIGHT);
    this.type = type;
  }

  private createMissile(): EnemyMissile {
    return new EnemyMissile(
      this.registerMoveable,
      this.left + (this.width / 2 - EnemyMissile.WIDTH),
      this.top + EnemyMissile.HEIGHT,
      EnemyMissile.VERTICAL_SPEED,
    );
  }

  fireMissile() {
    console.log('Ennemy of type '+ this.type +' fires missile');
    this.missiles.push(this.createMissile());
  }
}
