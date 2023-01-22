// @flow strict
import React from 'react';
import * as styles from './Icon.module.scss';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string
    rects?: Array<{ x: number, y: number, width: number, height: number }>
  }
};

const Icon = ({ name, icon }: Props) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
    {icon.rects && icon.rects.map((rect, index) => (
      <rect key={index} x={rect.x} y={rect.y} width={rect.width} height={rect.height} />
    ))}
  </svg>
);

export default Icon;
