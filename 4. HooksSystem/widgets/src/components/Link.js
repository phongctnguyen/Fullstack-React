import React from 'react';

export default ({ className, href, children }) => {
  const handleClick = (e) => {
    console.log(e)
    if (e.metaKey || e.ctrlKey) {
      console.log(e)
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleClick} className={className} href={href}>
      {children}
    </a>
  );
};
