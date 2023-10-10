import React from 'react';
import { EnemyMissile } from './EnemyMissile';
import './Missiles.css';
import { EnemyMissile as MissileModel } from './models/EnemyMissile';

export const EnemyMissiles: React.FC<{ missiles: MissileModel[] }> = ({ missiles }) => {
  return (
    <div className="Game-missiles">
      {
        missiles.map((missile, index) =>
          (<EnemyMissile missile={missile} key={index}/>),
        )
      }
    </div>
  );
};
