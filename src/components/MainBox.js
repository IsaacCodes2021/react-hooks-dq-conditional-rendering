import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {

  let [activeItem, displayItem] = useState(<Profile/>)

  function clickHandle(event) {  
    if(event.target.id === "profile") displayItem(<Profile />)
    else if(event.target.id === "picture") displayItem(<Photos />)
    else if(event.target.id === "coctail") displayItem(<Cocktails />)
    else if(event.target.id === "bird") displayItem(<Pokemon />)
  }

  let detailsToDisplay = <div>{activeItem}</div>;

  return (
    <div>
      <MenuBar clickEvent = {clickHandle}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
