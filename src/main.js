import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";

// import { Badge, Data, HelloApp} from "./addToCart"

// const app = ()=> {
//     return (
//         React.createElement("h2" , {style : {color: "red"}}, "Hello react", HelloApp(),Badge() , Data()  )
//     )
// } 


// const App = () => {
//     return(
//         <React.Fragment>
//         <div>
//         <h1>Hello ffff</h1>
        
//         </div>
//         </React.Fragment>
//     )
// }

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>)
