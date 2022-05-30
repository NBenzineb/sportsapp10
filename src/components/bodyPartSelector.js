import React, { useState } from "react";

function BodyPartSelector({updateSelected}) {
  const [isChecked, setIsChecked] = useState(false);
  const upperBodyClickHandler = () => {
    updateSelected({upperBody: !isChecked});
    setIsChecked(!isChecked);
  }

  return (
    <div className="checkboxes">
      <p>Choose your workout:</p>
      <ul>
        <input type="checkbox" id="upper_body" name="upper_body" value="upper_body" checked={isChecked} onChange={upperBodyClickHandler}/>
        <label htmlFor="upper_body"> Upper Body</label>
      </ul>
    </div>
  );
}

export default BodyPartSelector;