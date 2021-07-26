import React from "react";

function MenuBar({clickEvent}) {  
  return (
    <div className="ui four item menu" >
      <span className="item active" onClick={clickEvent} id={'profile'}>
        <i className="user large icon" />
      </span>

      <span className="item" onClick={clickEvent} id={'picture'}>
        <i className="photo large icon" />
      </span>

      <span className="item" onClick={clickEvent} id={'coctail'}>
        <i className="cocktail large icon" />
      </span>

      <span className="item" onClick={clickEvent} id={'bird'}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
