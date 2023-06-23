import React from "react";
import './FiltrSearch.css'
import {InputListBreeds}  from'../components/InputListBreeds'
import {InputFriendliness}  from'../components/InputFriendliness'




export const FiltrSearch = () =>{
return(
  <div className="form-wrapp">
          <InputListBreeds/>
          <InputFriendliness/>
  </div>
)
};