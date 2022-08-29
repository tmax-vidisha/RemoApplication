import React from 'react';


//     const Label = styled.span`
//     grid-column: ${(props:any) => props.col} / span ${(props:any) => props.colSpan};
//   `;
  
  const CalendarEvent = (props:any) => {
    const { title, col, colSpan, onClick } = props;
  
    return (
      <span
        className="calendar-event-label"
        style={{
          gridColumnStart: col,
          gridColumnEnd: `span ${colSpan}`
        }}
        onClick={onClick}
      >
        {title}
      </span>
    );
  };
//   CalendarEvent.propTypes = {
//     title: PropTypes.string,
//     col: PropTypes.number,
//     colSpan: PropTypes.number,
//     onClick: PropTypes.func
//   };
  CalendarEvent.defaultProps = {
    title: "",
    col: 1,
    colSpan: 1,
    onClick: () => {}
  };

export default CalendarEvent;