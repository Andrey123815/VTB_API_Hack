import React, {useState} from 'react';
import './SideNavbar.scss'
import SideNavbarItem from "../../UI-KIT/SideNavbarItem/SideNavbarItem.jsx";
import {NAV_ITEMS} from "../../configurations/navItems.js";

function SideNavbar() {
  const [navigator, setNavigator] = useState(
    new Array(NAV_ITEMS.length)
      .fill(true, 0, 1)
      .fill(false, 1)
  );

  const setActive = (index) => {
    setNavigator(
      navigator
        .slice()
        .fill(false)
        .fill(true, index, index + 1));
  }

  return (
    <div className="sidebar">
      <nav className='sidebar__navigation'>
        {
          NAV_ITEMS.map(({title, path, }, index) =>
              <SideNavbarItem key={title} title={title} path={path}
                              setActive={() => setActive(index)} active={navigator[index]}>
                {title}
              </SideNavbarItem>
          )
        }
      </nav>
      <div>
        <SideNavbarItem>Выйти</SideNavbarItem>
      </div>
    </div>
  );
}

export default SideNavbar;
