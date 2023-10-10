import React from 'react';
import saucer_img from '../assets/saucer.png';
import alien_img from '../assets/alien.png';
import './Enemy.css';
import { Enemy as EnemyModel, EnemyType } from './models/Enemy';


export const Enemy: React.FC<{ enemy: EnemyModel }> = ({ enemy }) => {
  let img;
  switch (enemy.type){
    case EnemyType.SAUCER:
      img = saucer_img;
      break;
    case EnemyType.ALIEN:
      img = alien_img;
      break;
  }
  return (
    <img className='Game-enemy'
         src={img}
         alt="Enemy"
         style={{ left: `${enemy.left}px`, top: `${enemy.top}px` }}></img>
  );
};
