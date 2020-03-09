import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classnames from 'classnames';
import './Header.css';

const renderLinks = (links, clickHandler) => {
  return links.map((link) => {
    const { name, href, active } = link;
    const classes = classnames({
      'nav-link': true,
      active,
    });
    return (
      <li className="nav-item" key={href}>
        <Link className={classes} to={href} onClick={clickHandler(href)}>
          {name}
        </Link>
      </li>
    );
  });
};

const resetNavState = (linksList) => linksList.map((link) => ({ ...link, active: false }));

const Header = () => {
  const currentActivePath = useHistory().location.pathname;

  const getDefaultLinksState = () => {
    const linksNames = ['React', 'JS', 'psd2html'];

    return linksNames.map((link) => {
      const href = `/${link.toLowerCase()}`;
      return {
        name: link,
        href,
        active: href === currentActivePath,
      };
    });
  };

  const defailtLinksState = getDefaultLinksState();

  const [links, setActiveLink] = useState(defailtLinksState);

  const onLinkClickHandler = (targetHref) => () => {
    const updatedLinksState = links.reduce((acc, link) => {
      const { href } = link;
      if (href !== targetHref) {
        return [...acc, { ...link, active: false }];
      }
      return [...acc, { ...link, active: true }];
    }, []);
    setActiveLink(updatedLinksState);
  };

  const onLogoClick = () => {
    const updatedLinksState = resetNavState(links);
    setActiveLink(updatedLinksState);
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={onLogoClick}>
            Projects List
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{renderLinks(links, onLinkClickHandler)}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
