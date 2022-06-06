import { render } from "@testing-library/react";
import React, { useState } from "react";

function BodyPartSelector({updateSelected}) {
  const [isChecked, setIsChecked] = useState({"upperBody": false, "lowerBody": false, "fullBody": false});
  console.log(isChecked);


  const clickHandler = (bodyPart) => {
    const theState = isChecked;
    console.log(theState)
    const previousValue = theState[bodyPart]
    console.log(previousValue)
    theState[bodyPart] = !previousValue
    console.log(theState)
    // setIsChecked(theState)
    updateSelected(theState);
  }

  return (
    <div className="checkboxes">
      <p>Choose your workout:</p>
      <ul>
        <input type="checkbox" id="upper_body" name="upper_body" value="upper_body" onChange={clickHandler("upperBody")}/>
        <label htmlFor="upper_body"> Upper Body</label>
        <input type="checkbox" id="lower_body" name="lower_body" value="lower_body" onChange={clickHandler("lowerBody")}/>
        <label htmlFor="lower_body"> Lower Body</label>
        <input type="checkbox" id="full_body" name="full_body" value="full_body" onChange={clickHandler("fullBody")}/>
        <label htmlFor="full_body"> Full Body</label>
        
      </ul>
    </div>
  );


}

export default BodyPartSelector;