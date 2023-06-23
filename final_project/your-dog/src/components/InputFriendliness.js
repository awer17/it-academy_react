import React from "react";

export const InputFriendliness = () =>{
let  cachesCheckbox =(eo) =>{
  console.log([eo.target.value, eo.target.checked])
}

  return(
    <div>
      <p>Friendliness</p>
      <input type="checkbox"  name="10" value="10" onChange={cachesCheckbox} />
      <label > 10</label><br />
      <input type="checkbox"   name="9" value="0"onChange={cachesCheckbox}/>
      <label > 9</label><br />
      <input type="checkbox"  name="8" value="8" onChange={cachesCheckbox}/>
      <label > 8</label><br />
      <input type="checkbox"  name="7" value="7" onChange={cachesCheckbox}/>
      <label > 7</label><br />
    </div>
    
  )
}