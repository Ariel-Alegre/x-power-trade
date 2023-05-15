import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Items.module.scss';

const Item = ({to, svg, text, open}) => {
  return (
    <NavLink to={to} className={open ? styles.linkOpen : styles.normal}>
      <div>
        {svg}
      </div>
      {open ? <p>{text}</p> : null}
    </NavLink>
  );
};

export default Item;