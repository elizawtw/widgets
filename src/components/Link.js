import React from "react";

const Link = ({className, href, children}) => {
  const onClick = (e) => {
    if(e.metaKey || e.ctrlKey) { //allows user to hold cmd key(mac) or ctrl key(windows) and click on link to open up a new tab
      return;
    }
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent); //communicate over to route components that url has changed
  }

  return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link;