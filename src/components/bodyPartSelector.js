import React, { useState } from "react";

function BodyPartSelector({updateSelected}) {
  const [isChecked, setIsChecked] = useState(false);
  const upperBodyClickHandler = () => {
    updateSelected({upperBody: !isChecked});
    setIsChecked(!isChecked);
  }
  const lowerBodyClickHandler = () => {
    updateSelected({lowerBody: !isChecked});
    setIsChecked(!isChecked);
    console.log('lowerBodyClickHandler')
  }
  const fullBodyClickHandler = () => {
    updateSelected({fullBody: !isChecked});
    setIsChecked(!isChecked);
    console.log('fullBodyClickHandler')
  }

  return (
    <div className="checkboxes">
      <p>Choose your workout:</p>
      <ul>
        <input type="checkbox" id="upper_body" name="upper_body" value="upper_body" checked={isChecked} onChange={upperBodyClickHandler}/>
        <label htmlFor="upper_body"> Upper Body</label>
        <input type="checkbox" id="lower_body" name="lower_body" value="lower_body" checked={isChecked} onChange={lowerBodyClickHandler}/>
        <label htmlFor="lower_body"> Lower Body</label>
        <input type="checkbox" id="full_body" name="full_body" value="full_body" checked={isChecked} onChange={fullBodyClickHandler}/>
      <label htmlFor="full_body"> Full Body</label>
      </ul>
    </div>
  );
}

export default BodyPartSelector;