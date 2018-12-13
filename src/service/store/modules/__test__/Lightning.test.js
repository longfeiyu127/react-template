import {
  deepCopy,
  EnemyPosition,
  createEnemy,
  // createBullet,
  EnemyControll,
  BulletControll
  // crashEngine
} from '../Lightning';

describe('Fivechess.js', () => {
  it('not throw', () => {
    expect(JSON.stringify(deepCopy({ a: 'a' }))).toBe('{"a":"a"}');
    const enemy = {
      position: {
        top: 0.1,
        left: 0.1
      },
      size: {
        height: 1,
        width: 1
      },
      targetPosition: {
        top: 0.1,
        left: 0.1
      }
    };
    expect(
      EnemyPosition(enemy).position.left >= 0 &&
        EnemyPosition(enemy).position.left <= 3.75 - enemy.size.width
    ).toBeTruthy();
    expect(createEnemy({ EnemyArr: [] }, true).length).toBe(2);
    const EnemyArr = [
      {
        speed: 0.1,
        position: {
          top: 7.3
        }
      }
    ];
    const screen = {
      clientHeight: 736
    };
    expect(EnemyControll(EnemyArr, screen).length).toBe(0);
    const BulletArr = [
      {
        speed: 0.1,
        position: {
          top: 0.1
        }
      }
    ];
    expect(BulletControll(BulletArr).length).toBe(0);
  });
});
