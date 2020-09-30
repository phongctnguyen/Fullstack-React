import React, { useState } from 'react';

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    if (activeIndex !== index) {
      setOpen(true);
    } else {
      setOpen(!open);
    }

    setActiveIndex(index);
  };

  const renderedItems = items.map(({ title, content }, index) => {
    const active = open && index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={title}>
        <div className={`title ${active}`} onClick={() => handleClick(index)}>
          <i className='dropdown icon'></i>
          {title}
        </div>
        <div className={`content ${active}`}>{content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
};
