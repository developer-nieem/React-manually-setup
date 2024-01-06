import React from "react";

export const HelloApp = () => {
  return   React.createElement("h2" , {style : {color: "red"}}, "Hello react2" );
}

export const Data = () =>{
 return   React.createElement("h2" , {style : {color: "red"}}, "See you the data" );
} 

export const Badge = () => {
    return React.createElement("h3" , {} , "Nieem")
}