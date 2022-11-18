import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =React.useContext(VisibilityContext);
  
    return (
      <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </button>
    );
  }

  export default LeftArrow;