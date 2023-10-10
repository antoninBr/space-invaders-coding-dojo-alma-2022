import React from 'react';
import missile_img from '../assets/missile2.png';
import './Missile.css';
import { EnemyMissile as MissileModel } from './models/EnemyMissile';

export const EnemyMissile: React.FC<{ missile: MissileModel }> = ({ missile }) => {
  return (
    <img className='Game-missile'
         src={missile_img}
         alt="Missile"
         style={{ left: `${missile.left}px`, top: `${missile.top}px` }}></img>
  );
};
