import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </button>
    );
  }

  export default RightArrow;
