import React from 'react';
import './SideNavbarItem.scss'
import {Link} from "react-router-dom";

function SideNavbarItem(props) {
  const activeState = props.active ? 'navbar-item_active' : '';
  const style = `item__selection-block ${activeState}`;
  return (
    <div onClick={props.setActive} className={`side-navbar__item`}>
      <div className={style}>
        <Link className="selection-block__link" to={props.path}>
          {props.children}
        </Link>
      </div>
    </div>
  );
}

export default SideNavbarItem;
